import MovieCard from "./MovieCard";

const MovieList = ({title, movieData}) =>{

    //early return
    if(!movieData)
    {
        return;
    }
//console.log(movieData[0]);
    return(
        <div className="ml-2 mb-2">
            <h1 className="ml-3 font-semibold text-lg md:text-2xl">{title}</h1>
            <div className="mt-2 flex overflow-x-auto space-x-3 hide-scrollbar ">
            {movieData.map((movie)=><MovieCard key={movie.id} movieId ={movie.id} cardPoster = {movie.poster_path} cardName={movie?.title || movie.original_name} rating = {movie.vote_average}/> )}
            </div>
          

        </div>
    )
}
export default MovieList;