import { useSelector } from "react-redux";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { useState } from "react";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged} from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO_URL} from "../utils/constant";
import { changeSearchButtonState } from "../utils/gptSlice";
import lang from "../utils/SupportLang";
import { changeChosenLang , handleLangDefault} from "../utils/langConfig";
 


const Header1 = ()=>{  
  
   const userInfo =  useSelector((store)=>store.user);
   const GptBtnState = useSelector((store)=>store.gpt.searchButtonState);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [isArrow,setIsArrow] = useState(false);
   const handleArrow = ()=>{
    setIsArrow(!isArrow);
   }

   const handleLangChange = (e) =>{
    dispatch(changeChosenLang(e.target.value))

   }
   const handleGptButtonClick = () =>{
    dispatch(changeSearchButtonState());
    dispatch(handleLangDefault());

   }

   useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
          // User is signed in
      dispatch(addUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }));
        navigate('/browse');
    } 
    else{   
        navigate('/')
        dispatch(removeUser());    
      }
    });
    //this function will be called when the components unmounts which will then unsubscribe to the event listener onAuthstatechangedapi
    return ()=>unsubscribe();
    
  },[]);

   const handleSignout = ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        //console.log(userInfo);
        navigate('/');
      
      }).catch((error) => {
        // An error happened.
        navigate('/error');
      });
   }
   //console.log(userInfo);
    return (
       
           <div className=" w-screen overflow-x-hidden flex flex-col md:flex-row bg-gradient-to-b from-black justify-between">
           <img className=" w-36 mt-0 md:mt-0 md:w-48 md:ml-20 pt-5 bg-gradient-to-r from-black md:rounded-lg " src={LOGO_URL}
            alt="logo"/>
          
           {
           userInfo  &&
            <div className="flex items-center mr-6" >
             
              {GptBtnState && 
              <select onChange={handleLangChange}
              className ="md:mr-2 bg-black top-20 left-24 absolute md:static text-lg border border-white md:mt-0 text-white md:font-semibold p-2 md:p-1 rounded-md hover:cursor-pointer md:text-lg">
              {lang.map((lg) => <option key={lg.identifier} value={lg.identifier}>
                  {lg.name}
              </option>)}
              </select>
              
              }

               <button className="bg-white md:mr-5 md:mt-0 mt-0 ml-2 p-2 md:p-1 md:ml-0 rounded-md md:font-medium md:text-base w-18 h-10 text-xl font-semibold border border-black  md:w-24 md:h-9"
               onClick ={handleGptButtonClick}
               >{ 
                GptBtnState ? "Home" : "Search"
               }</button>

                {userInfo?.displayName && <h1 className=" text-sm md:text-lg absolute md:static md:mr-8 top-7 left-56  md:mt-0  font-semibold text-white">Hey {userInfo.displayName.split(" ")[0]}!</h1>}
                <img
                 className="absolute md:static w-10 right-7 top-6 md:mt-0  md:w-11 md:h-11 rounded-md md:mr-4"
                src={userInfo.photoURL}
                alt="me"/>
               
                {!isArrow ?<IoMdArrowDropdownCircle  className="text-white text-xl absolute right-1 md:static top-7  md:mt-0  cursor-pointer" onClick ={handleArrow} />:
                <div>
                <IoMdArrowDropupCircle className="text-white absolute md:static right-1 top-7 text-xl  md:mt-5  cursor-pointer" onClick ={handleArrow} /> 
                <button className="text-white p-2 md:p-0 absolute md:static top-20  right-1 font-light md:ml-0  md:font-semibold rounded-md bg-gradient-to-t from-black text-lg md:text-lg w-24 border border-white md:w-24 h-11 md:h-7 md:mt-4 " onClick ={handleSignout}>Sign out</button>
                </div> }
            
            </div>
           
           } 

        </div>
    )
}
export default Header1;