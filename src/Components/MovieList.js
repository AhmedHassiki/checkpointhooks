import React, { useState } from "react";
import Add from "./Add";
import MovieCard from './MovieCard';

function MovieList({ movies, addMovie }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [ratingFilter] = useState(0);

  // const filteredMovies = movies.filter(movie => movie.rating >= ratingFilter);
  // console.log(ratingFilter)

  return (
    <>
      <div className="add">
        <button className="addButton" onClick={handleShow}>Add Movie</button>
        <Add show={show} handleClose={handleClose} addMovie={addMovie} />
      </div>
      {movies.map((movie,i) => (
        <div className="image-container" key={i} > 
          <MovieCard movies={movie} />
        </div>
      ))}
    </>
  );
}

export default MovieList;