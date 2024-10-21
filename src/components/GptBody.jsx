import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";
const GptBody = () =>{

 const actualBtnState = useSelector((store)=> store.gpt.actualSearchBtn);
 const {movieTitle,movieInfo} = useSelector((store) => store.gpt);

 
 if(!movieTitle && !movieInfo && !actualBtnState){
    return ;
 } 

 if(!movieTitle && !movieInfo && actualBtnState){
    return <Shimmer/>
 }  
 
    return (
       
       <div className="sticky bg-black opacity-90 border-2 border-white top-48 p-4 h-auto rounded-md w-10/12 ml-8 md:ml-20 md:left-6 z-30 text-white">
         <div className="h-full overflow-y-auto ">
          
       {movieTitle.map((movieName,index)=>
       <MovieList
        key={movieName}  
        title={movieName} 
        movieData={movieInfo[index]} 
        />)}
          
                            
        </div>   
       </div>
    )
}
export default GptBody;