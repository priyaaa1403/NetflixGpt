import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINIAPI_KEY } from "./constant";

// Access your API key (see "Set up your API key" above)
export const genAI = new GoogleGenerativeAI(GEMINIAPI_KEY);













// import  {OPENAI_KEY} from "./constant";
// import OpenAI from "openai";


// //openai configuration


// const openai =new OpenAI({
//     apiKey:OPENAI_KEY,
//     dangerouslyAllowBrowser:true
// });

// export default openai;