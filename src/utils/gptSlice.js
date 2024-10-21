import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        searchButtonState:false,
        movieTitle:null,
        movieInfo:null,
        actualSearchBtn : false
    },   
    reducers:{
        changeSearchButtonState :(state)=>{
           state.searchButtonState=!state.searchButtonState;
           state.movieTitle = null;
           state.movieInfo = null;
           state.actualSearchBtn = false;
           


        },
        changeActualSearchBtn : (state) =>{
              state.actualSearchBtn =true;
              state.movieTitle = null;
              state.movieInfo = null;

        },
        addFetchedGptResultData:(state,action) => {
           const{movieTitle, movieInfo} = action.payload;
            state.movieTitle = movieTitle;
            state.movieInfo =movieInfo;
        }
    }
})

export const { changeSearchButtonState , addFetchedGptResultData, changeActualSearchBtn}=gptSlice.actions;
export default gptSlice.reducer;