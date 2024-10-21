import Header1 from "./Header1";
import Body from "./Body";
import GPTCompo from "./GPTCompo";
import { useSelector } from "react-redux";

const Home = ()=>{
  const gptCompoShow = useSelector((store) =>store.gpt.searchButtonState)
    return (
        <div>
          <div className="fixed  md:fixed z-20"> <Header1/></div>
          {
            gptCompoShow ? <GPTCompo/> : <Body/>
          }
            
        </div>
    )
}
export default Home;