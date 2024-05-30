import { Button } from "react-bootstrap";
import { Result } from "../../types/MoviesApiTypes";
import "./MovieSlider.css";
import { IMAGES_URL } from "../../constants";

interface MovieSliderProps {
  movie: Result;
}

const MovieSlider: React.FC<MovieSliderProps> = ({ movie }) => {
  return (
    <div
      className="hero-slide__item"
      style={{
        backgroundImage: `url(${IMAGES_URL.URL_POSTER_BACK}${movie.backdrop_path})`,
      }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{movie.original_title}</h2>
          <div className="overview">{movie.overview}</div>
          <div className="btns">
            <Button>Ver Ahora</Button>
            <Button>Ver Trailer</Button>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img
            src={`${IMAGES_URL.URL_POSTER}/${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieSlider;
