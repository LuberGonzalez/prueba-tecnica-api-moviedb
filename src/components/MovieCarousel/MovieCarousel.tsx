import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Result } from "../../types/MoviesApiTypes";

import CardMovie from "../CardMovie/CardMovie";

import "./MovieCarousel.css";

interface Movie {
  movie: Result[];
}

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ title, movies }) => {
  return (
    <div className="container mt-5 movie-list">
      <h2 className="text-center mt-5">{title}</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="swiper-slide mt-5"
        breakpoints={{
          768: {
            slidesPerView: 5,
          },
          480: {
            slidesPerView: 2,
          },
        }}
      >
        {movies && movies.length > 0 ? (
          movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <CardMovie key={index} movie={movie} />
            </SwiperSlide>
          ))
        ) : (
          <p>No hay películas disponibles.</p>
        )}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;
