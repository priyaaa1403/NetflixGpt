import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Secondary = () =>{
   const data = useSelector((store) => store.movies.nowPlayingMovies);
   const popularData = useSelector((store) => store.movies.popularMovies);
   const topRated = useSelector((store) =>store.movies.topRatedMovies);
   const upComing = useSelector((store) =>store.movies.upComingMovies);
   //const tv = useSelector((store)=>store.movies.tvShows);

  

    return (
        <div className=" bg-black mt-[357px] md:mt-0 relative h-full p-2  text-white ">
            <div className="absolute -top-64 mb-4 overflow-x-auto w-full">
             <MovieList title ="Now Playing" movieData={data}/>
            </div>
            <div className="pt-14">  <MovieList title ="Top Rated" movieData={topRated}/> </div>
            <MovieList title ="Popular Movies" movieData={popularData}/>
            
             <MovieList title ="Upcoming Movies" movieData={upComing}/>

        </div>
    )
}
export default Secondary;