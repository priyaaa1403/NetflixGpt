import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant"
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const upComingMovies = useSelector((store)=>store.movies.upComingMovies);
    const getUpcomingMovies = async () =>{
       const data =await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS);
      const json =  await data.json();
      dispatch(addUpcomingMovies(json.results));

    }
    useEffect(()=>{
    !upComingMovies && getUpcomingMovies();
    },[])
}
export default useUpcomingMovies;