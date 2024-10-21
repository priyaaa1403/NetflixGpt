export const validateData = (name,email,password)=>{
   
    const isNameValid =/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    const isEmailValid =/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
    
    if(name!=null && !isNameValid){
        return "Please enter a valid Name.";
    }
    if(!isEmailValid){
        return "Please enter a valid Email address.";
    }
    if(!isPasswordValid){
        return "Your password must contain between 4 and 60 characters.";
    }
    return null;
   
}