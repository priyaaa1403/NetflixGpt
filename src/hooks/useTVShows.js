// import { useDispatch, useSelector } from "react-redux";
// import { API_OPTIONS } from "../utils/constant";
// import { addTVShows } from "../utils/moviesSlice";
// import { useEffect } from "react";

// const useTVShows = () =>{
//     const dispatch = useDispatch();
//     const tvShows = useSelector((store) => store.movies.tvShows);
//     const getTVShows = async () =>{
//     const data = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",API_OPTIONS);
//     const json  =await data.json();
//     console.log(json);
//     dispatch(addTVShows(json.results));
//     }
//     useEffect(()=>{
//        !tvShows && getTVShows();
//     },[])

// }
// export default useTVShows;