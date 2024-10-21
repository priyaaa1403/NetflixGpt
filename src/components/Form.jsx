import { useState, useRef, useEffect } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { validateData } from "../utils/validateData";
import { VscError } from "react-icons/vsc";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import {BG_IMG} from "../utils/constant";

 
const Form = () => {

    const dispatch = useDispatch();   
    const [isTick, setIsTick] = useState(false);
    const handlerTick = () => {
        setIsTick((curr_val) => !curr_val)
    }

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [isSignIn, setSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    
    const handlerCompo = () => {
        setSignIn(!isSignIn);
    }
     
   


    const handleFormValidation = () => {
        const nameIsValid = name.current ? name.current.value : null;
        const validationError = validateData(nameIsValid, email.current.value, password.current.value)
        setErrorMessage(validationError);
 
        if (validationError) {
            return;
        }
        console.log(errorMessage);    
        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                         photoURL: "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4" 
                      }).then(() => {
                          // Profile updated!
                          const {uid,email,displayName,photoURL} = auth.currentUser;
                          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                         
                        
                        // ...
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);

                    // ..
                });
        }
        else {

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in    
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: null,
                         photoURL: "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
                      }).then(() => {
                          // Profile updated!
                          const {uid,email,displayName,photoURL} = auth.currentUser;
                          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                         
                          
                        // ...
                      }).catch((error) => {
                        // An error occurred   
                        // ...
                      });


                   
                })
                .catch((error) => { 
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                    //console.log(errorMessage);
                });

        }


    }
    // console.log(name);
    // console.log(email.current.value);
    //console.log(password.current.value);
    // console.log(errorMessage);

    return (
        <div className=" fixed h-auto">
            <div className="relative">
                <img className=" w-screen h-screen object-cover " src={BG_IMG}
                    alt="bg-image" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className=" w-10/12 md:w-4/12 md:items-center absolute top-24 left-7 md:left-1/3 bg-black/85 md:bg-black/90  rounded-lg ">
                <div className="w-9/12 m-auto mt-11 text-white">
                    <h1 className="mb-6 text-3xl font-bold ">{isSignIn ? "Sign In" : "Sign Up"}</h1>

                    {
                        !isSignIn && <div className="mb-5">
                            {errorMessage === "Please enter a valid Name." ?
                                <input className="w-full text-lg p-3 rounded-md  opacity-70 border-2 border-red-600 bg-zinc-900"
                                    ref={name}
                                    type="text"
                                    placeholder="Full name"
                                /> :
                                <input className=" text-lg w-full p-3 rounded-md border opacity-70 border-white bg-zinc-900"
                                    ref={name}
                                    type="text"
                                    placeholder="Full name"
                                />
                            }

                            {errorMessage === "Please enter a valid Name." && <div className=" p-2 mt-1">
                                <div className="flex items-center">
                                    <span className="text-red-600 font-bold pt-1 text-xl"><VscError style={{ color: "red" }} /></span>
                                    <h1 className="text-red-700 ml-1  font-semibold ">{errorMessage}</h1>
                                </div>
                            </div>}
                        </div>

                    }

                    <div className="mb-5 ">
                        {errorMessage === "Please enter a valid Email address." ?
                            <input className="w-full text-lg p-3 rounded-md  opacity-70 border-2 border-red-600 bg-zinc-900"
                                ref={email}
                                type="text"
                                placeholder="Email or mobile number"
                            />
                            :
                            <input className="w-full text-lg p-3 rounded-md border opacity-70 border-white bg-zinc-900"
                                ref={email}
                                type="text"
                                placeholder="Email or mobile number"
                            />}
                        {errorMessage === "Please enter a valid Email address." && <div className="p-2 mt-1">

                            <div className="flex  items-center">
                                <span className="text-red-600 font-bold pt-1 text-xl"><VscError /></span>
                                <h1 className="text-red-700 ml-1  font-semibold ">{errorMessage}</h1>

                            </div>
                        </div>}
                    </div>



                    <div className="mb-4">
                        {errorMessage === "Your password must contain between 4 and 60 characters." ?
                            <input className="w-full text-lg p-3 rounded-md  opacity-70 border-2 border-red-600 bg-zinc-900"
                                ref={password}
                                type="password"
                                placeholder="Password"
                            /> :
                            <input className=" text-lg w-full p-3 rounded-md border opacity-70 border-white bg-zinc-900"
                                ref={password}
                                type="password"
                                placeholder="Password"
                            />
                        }
                        {errorMessage === "Your password must contain between 4 and 60 characters." && <div className=" p-2 mt-1">

                            <div className="flex">
                                <span className="text-red-600 font-bold pt-1 text-xl"><VscError /></span>
                                <h1 className="text-red-700 ml-1 font-semibold ">{errorMessage}</h1>
                            </div>
                        </div>}
                    </div>

                    {
                        errorMessage === "Firebase: Error (auth/email-already-in-use)." &&
                        (<div><h1 className="text-red-600 font-semibold mb-2">This email address is already in use!</h1></div>)

                    }
            
                     {
                    errorMessage === "Firebase: Error (auth/invalid-credential)." && (<div className="mb-2"><h1 className="text-red-600 font-semibold">This email address is not registered!</h1></div>)
                    }
                   

                    <div className="rounded-md mb-3  text-center" onClick={handleFormValidation}>
                        <button
                            className="w-full hover:bg-red-500 opacity-1 font-semibold bg-red-600 text-white rounded-md p-2"

                            type="submit"
                        >
                            {isSignIn ? "Sign In" : "Sign up"}
                        </button>
                    </div>


                    <h1 className="mt-4 text-center cursor-pointer hover:underline">Forgot password?</h1>


                    <div className=" mt-3 flex items-center cursor-pointer" onClick={handlerTick}>
                        <span className="mr-1">{isTick === true ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}</span>
                         <h1> Remember me</h1>
                    </div>

                    <h1 className="mt-4 mb-20 ">{isSignIn ? "New to Netflix?" : "Already a registered user?"}
                        <span className="ml-1 font-bold cursor-pointer hover:underline" onClick={handlerCompo}>
                            {isSignIn ? "Sign up now." : "Sign in now."}
                        </span>
                    </h1>

                </div>
            </form>
        </div>

    )
}
export default Form;