import GptBody from "./GptBody";
import GptSearchBar from "./GptSearchBar";
import {BG_IMG} from "../utils/constant";

const GPTCompo = () => {
  return (
    <div className=" pt-24">
       
      
      <div className="fixed h-screen w-screen top-20 md:fixed md:top-0">
        <img src={BG_IMG} className="w-full h-full object-cover" alt="bg_img"/>
      </div>

       <div className=" ml-11 mt-11 md:ml-28">
        <GptSearchBar/>
       </div>
        <div className="mt-5 md:mt-14">
        <GptBody/>
        </div>
    
     

    </div>
  )
}

export default GPTCompo;