import Main from "./Main";
import Secondary from "./Secondary";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Body = () =>{
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();
   //useTVShows();

    return (
        <div className=" overflow-x-hidden sticky bg-black ">            
           <Main/>
           <Secondary/>
        </div> 
    )
}
export default Body;