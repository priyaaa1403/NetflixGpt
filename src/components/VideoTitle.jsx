import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

 const VideoTitle = ({title ,desc}) => {
  console.log("videotitle compo called")

   return (   
    <div className = " absolute top-0 left-0 w-screen aspect-video bg-gradient-to-r from-black">
 
     <div className=" mt-56 ml-4 md:mt-40 "> 
         <h1 className =" text-2xl md:text-6xl font-bold text-yellow-400 font-dance">{title}</h1>
         <p className="  md:w-6/12 md:p-3 font-extralight text-sm md:text-base md:font-medium text-white">{desc}</p>
         <div  className="flex">
          <button className="bg-white w-16 h-8 md:w-28 md:h-11 mt-1 md:mt-0 mr-2 md:text-lg font-semibold rounded-md shadow-lg hover:bg-opacity-60 text-black flex items-center justify-center"><FaPlay className="mr-1" /> Play</button>
          <button className="bg-gray-500  w-36 md:w-36 md:h-11 mt-1 md:mt-0 flex items-center font-semibold rounded-md  hover:bg-opacity-60 shadow-lg md:text-lg justify-center text-white"><IoIosInformationCircleOutline className="mr-1 text-2xl" /> More info</button>
         </div>

     </div>
     </div> 
    
   )
 }
 
 export default VideoTitle;