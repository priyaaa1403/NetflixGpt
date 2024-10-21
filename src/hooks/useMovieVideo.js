import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import { useEffect } from "react";
import {addTrailerVideo} from "../utils/moviesSlice";


const useMovieVideo = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () =>{
     const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos",API_OPTIONS);
     const json = await data.json()
     console.log(json.results);
     const videosList = json.results;
     const filteredVideos = videosList.filter((video) => video.type === "Trailer");
     const trailer = filteredVideos.length ? filteredVideos[0] :videosList[0];
     dispatch(addTrailerVideo(trailer));
    }
    //MEMOIZATION (WHEN BG VIDEO WAS FIXED)
    //  useEffect(()=>{
    //   !trailerVideo && getMovieVideos();
                         
    //  },[]) 
    useEffect(()=>{
        getMovieVideos();                       
       },[movieId])

}
export default useMovieVideo;