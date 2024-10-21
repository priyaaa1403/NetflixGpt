import Header1 from "./Header1";
import Form from "./Form";
const Login = ()=>{
    return (
        <div className="relative">
           <div className="absolute  z-30 ">
           <Header1/>
           </div>
           <div>
           <Form/>
           </div>
        </div>
    )
}
export default Login;