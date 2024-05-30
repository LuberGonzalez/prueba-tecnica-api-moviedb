import { useDispatch, useSelector } from "react-redux";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import "./Home.css";
import { RootState } from "../../redux/reducers";
import { getMovies } from "../../redux/actions/movieActions";
import { useEffect } from "react";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import CardMovie from "../../components/CardMovie/CardMovie";
import { ResponseMovieDB, Result } from "../../types/MoviesApiTypes";

import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const dispatch = useDispatch();
  const moviesData: ResponseMovieDB = useSelector(
    (state: RootState) => state?.movies?.data,
  );
  const loading = useSelector((state: RootState) => state?.movies?.loading);
  const error = useSelector((state: RootState) => state?.movies?.error);

  const movies: Result[] = moviesData.results;

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  if (loading) return <LoaderComponent />;

  if (error) return <ErrorComponent errorMessage={error} />;

  return (
    <div style={{ flex: 1 }}>
      <HeroSlider />
      <div className="container mt-5 movie-list">
        <h2 className="text-center mt-5">Peliculas Recientes</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={15}
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
    </div>
  );
};

export default Home;
