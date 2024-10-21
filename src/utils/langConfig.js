import { createSlice } from "@reduxjs/toolkit";

const langConfig = createSlice({
    name:"langg",
    initialState:{
        chosenLang : "en"
    },
    reducers:{
        changeChosenLang :(state,action) =>{
              state.chosenLang =action.payload;
        },
        handleLangDefault:(state) =>{
            state.chosenLang = "en";
        }
    }
})

export const {changeChosenLang,handleLangDefault} = langConfig.actions;
export default langConfig.reducer;