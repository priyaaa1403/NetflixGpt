import { createSlice } from "@reduxjs/toolkit"

const moviesSlice =  createSlice({
    name:"movies",
    initialState:{
        movieUniqueId:null,
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies :null,
        topRatedMovies :null,
        upComingMovies:null,
       
    },
    reducers:{
        addMovieUniqueId: (state,action) => {
            state.movieUniqueId = action.payload;

        },
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state,action) =>{
            state.trailerVideo =action.payload;

        },
        addPopularMovies : (state,action)=>{
             state.popularMovies =action.payload;
        },
        addTopRatedMovies :(state ,action)=>{
            state.topRatedMovies = action.payload;

        },
        addUpcomingMovies :(state,action) =>{
            state.upComingMovies =action.payload;
        }

    }
})
export const {addMovieUniqueId,addNowPlayingMovies, addTrailerVideo , addPopularMovies, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;