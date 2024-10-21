import { useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { genAI } from "../utils/openai";
import { useDispatch, useSelector } from "react-redux";
import {addFetchedGptResultData ,changeActualSearchBtn} from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constant";
import multiLang from "../utils/multiLanguage";

const GptSearchBar = ()=>{
   const userInput = useRef(null);
   const  userLang = useSelector((store)=> store.langg.chosenLang);
   const dispatch = useDispatch(); 
   

   const searchEachMovie = async (movie) =>{
 
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+
        movie
        +"&include_adult=false&language=en-US&page=1",API_OPTIONS);
      const json = await data.json();
     // console.log(json.results); 
     return json.results;


    }
   
     
   //OPEN AI's API call 
   const handleGptSearch = async () => {
    dispatch(changeActualSearchBtn());

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

    const prompt = "Act as a movie recommendation system and suggest  some movies for the query:"+userInput.current.value+". only give me 5 movies , comma separated like the example given here : 12th Fail, Shershah , Highway, Titanic, Bhool Bhuliya "
                 
  
    const result = await model.generateContent(prompt);
    const response = result.response;
    //const text = response.text();
    console.log(response.candidates[0].content.parts[0].text);
    console.log(response.candidates[0].content.parts[0].text.split(","))
    
    const userOutputMovies = response.candidates[0].content.parts[0].text.split(",");
    const promiseArray = userOutputMovies.map(movie=> searchEachMovie(movie));
    const movieArray = await Promise.all(promiseArray);
    //console.log(movieArray);
    //through 1 action dispatching 2 data category's data
    dispatch(addFetchedGptResultData({movieTitle:userOutputMovies,movieInfo:movieArray}));



} 
   
    return (
        <div className=" z-30 sticky top-28 flex  w-full ">
           <form className="flex w-full md:w-5/12" onSubmit={(e) =>e.preventDefault()}> 
            <input type="text"
            ref={userInput}
            className="bg-black w-full pl-1 rounded-md border md:border-2 border-white mt-1 md:mt-0 p-1 md:p-2 text-white font-light md:font-medium text-sm md:text-lg"
            placeholder={multiLang[userLang].placeholder}
            />
            {console.log(userInput)}
            <button className=" ml-2 mr-1 md:mr-0 flex items-center mt-2 md:mt-3 p-4 border-2 border-white bg-black text-white w-28 h-7 rounded-md"
                 onClick={handleGptSearch} 
            >
            <IoSearchOutline className="mr-1" /> 
                {multiLang[userLang].search}
            </button>
           </form>
        </div>
    )

}

export default GptSearchBar;