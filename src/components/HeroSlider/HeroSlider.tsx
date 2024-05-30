import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./HeroSlider.css";
import MovieSlider from "../MovieSlider/MovieSlider";
const HeroSlider: React.FC = () => {
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
        <SwiperSlide>
          <MovieSlider />
        </SwiperSlide>
        <SwiperSlide>
          <MovieSlider />
        </SwiperSlide>
        <SwiperSlide>
          <MovieSlider />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default HeroSlider;
