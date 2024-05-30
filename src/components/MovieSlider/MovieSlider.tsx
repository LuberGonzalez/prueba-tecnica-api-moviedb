import { Button } from "react-bootstrap";
import "./MovieSlider.css";

const MovieSlider = () => {
  return (
    <div
      className="hero-slide__item"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original//qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg)`,
      }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">TITLE</h2>
          <div className="overview">OVERVIEW</div>
          <div className="btns">
            <Button>Watch Now</Button>
            <Button>Watch Trailer</Button>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img
            src="https://image.tmdb.org/t/p/w500//2YqZ6IyFk7menirwziJvfoVvSOh.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MovieSlider;
