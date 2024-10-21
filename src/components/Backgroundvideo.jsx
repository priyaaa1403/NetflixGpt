import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";

 const Backgroundvideo = ({movieId}) => {
  
  const trailer = useSelector((store) =>store.movies.trailerVideo);
  console.log("bg-video compo called");
                     
   useMovieVideo(movieId);
   console.log(trailer);
   return (
     <div className ="w-screen pt-32 md:pt-0"> 
      <iframe className= "w-screen aspect-video" 
       src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1&controls=0&rel=0"}
        title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin">
          
      </iframe>
    
     </div>
   )
 }
   
 export default Backgroundvideo;