import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {addMovieUniqueId} from "../utils/moviesSlice"

const MovieCard = ({ movieId, cardPoster, cardName, rating }) => {
  const dispatch = useDispatch();
  const formattedRating = rating.toFixed(1);
  const handleCard = (movieId)=>{
    dispatch(addMovieUniqueId(movieId));
  }

  return (
    <div className="relative w-44 flex-shrink-0 pb-1 ml-2 transition-transform duration-300 ease-in-out cursor-pointer group hover:scale-110 hover:shadow-lg"
    onClick={()=>handleCard(movieId)}
    >
     
      <img
        className="rounded-md"
        src={"https://image.tmdb.org/t/p/w200" + cardPoster}
        alt={cardName}
      />
      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 h-28 w-full bg-black bg-opacity-75 text-white text-sm opacity-100 p-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        <h1 className="text-lg font-bold">{cardName}</h1>
        <h3 className="flex items-center pb-1">
          {formattedRating} <FaStar className="text-yellow-500 ml-1" />
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
