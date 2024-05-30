import React from "react";
import "./CardMovie.css";
import { Result } from "../../types/MoviesApiTypes";
import { IMAGES_URL } from "../../constants";

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
        {/* <img src={`${IMAGES_URL.URL_POSTER}/${movie.poster_path}`} alt={movie.original_title} className="card-movie__image" /> */}
        {/* <div></div>
      <div className="card-movie__content">
        <h2 className="card-movie__title">{movie.original_title}</h2>
        <p className="card-movie__release-date">{movie.release_date}</p>
        <div className="card-movie__rating">
          <span className="card-movie__rating-icon">⭐</span>
          <span className="card-movie__rating-value">{movie.popularity}</span>
        </div>
      </div> */}
      </div>
      <h2 className="card-movie__title">{movie.original_title}</h2>
    </>
  );
};

export default CardMovie;
