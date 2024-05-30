import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./HeroSlider.css";
import MovieSlider from "../MovieSlider/MovieSlider";
import { useSelector } from "react-redux";
import { ResponseMovieDB, Result } from "../../types/MoviesApiTypes";
import { RootState } from "../../redux/reducers";
const HeroSlider: React.FC = () => {
  const moviesData: ResponseMovieDB = useSelector(
    (state: RootState) => state?.movies?.data,
  );

  const movies: Result[] = moviesData.results;

  const progressCircle = useRef<SVGSVGElement>(null);

  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (timeLeft: number, percentage: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        `${1 - percentage}`,
      );
    }

    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(timeLeft / 1000)}s`;
    }
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="swiper"
      >
        {movies && movies.length > 0 ? (
          movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <MovieSlider key={index} movie={movie} />
            </SwiperSlide>
          ))
        ) : (
          <p>No hay películas disponibles.</p>
        )}
        <div className="autoplay-progress" slot="container-end">
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default HeroSlider;
