import React from "react";
import "./CardMovie.css";
import { Result } from "../../types/MoviesApiTypes";
import { IMAGES_URL } from "../../constants";
import AddToFavorites from "../AddToFavorites/AddToFavorites";

interface CardMovieProps {
  movie: Result;
}

const CardMovie: React.FC<CardMovieProps> = ({ movie }) => {
  return (
    <>
      <div
        className="card-movie"
        style={{
          backgroundImage: `url(${IMAGES_URL.URL_POSTER}/${movie.poster_path})`,
        }}
      >
        <AddToFavorites movie={movie} />
      </div>
      <h2 className="card-movie__title">{movie.original_title}</h2>
    </>
  );
};

export default CardMovie;
