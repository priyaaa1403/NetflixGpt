import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Backgroundvideo from "./Backgroundvideo";
const Main = () =>{
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    const movies1 = useSelector((store) => store.movies?.popularMovies);
    const movies2 = useSelector((store) => store.movies?.topRatedMovies);
    const movies3 = useSelector((store) => store.movies?.upComingMovies);
   


   const  movieUniqueId = useSelector((store)=>store?.movies?.movieUniqueId);


    const findMovieById =(id)=>{
        const allMoviesList = [movies,movies1,movies2,movies3];
        for(const movieList of allMoviesList){
            //early return
            if(movieList){
                const foundMovie = movieList.find(movie => movie.id === id);
                if(foundMovie){
                    return foundMovie;
                }
            }
        }
        return movies && movies[0];
       
    }
     //early return
     if(!movies){
        return;
    }
    const mainMovie =!movieUniqueId?movies[0]:findMovieById(movieUniqueId);

   
   
    // extracting  
    console.log(mainMovie);
    const {id,original_title,overview} = mainMovie;
    return ( 
        <div className="">
            
          <Backgroundvideo movieId = {id} />      
          <VideoTitle title = {original_title} desc = {overview} />
        </div>
    )
}
export default Main;