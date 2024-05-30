import { useDispatch, useSelector } from "react-redux";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import "./Home.css";
import { RootState } from "../../redux/reducers";
import { getMovies } from "../../redux/actions/movieActions";
import { useEffect } from "react";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";

import { ResponseMovieDB, Result } from "../../types/MoviesApiTypes";

import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import useMovie from "../../hooks/useMovie";
import { ROUTES_API } from "../../constants";

const Home = () => {
  const dispatch = useDispatch();
  const moviesData: ResponseMovieDB = useSelector(
    (state: RootState) => state?.movies?.data,
  );
  const loading = useSelector((state: RootState) => state?.movies?.loading);
  const error = useSelector((state: RootState) => state?.movies?.error);

  const movies: Result[] = moviesData.results;

  const { data: moviesDataPopular } = useMovie<ResponseMovieDB>(
    `${ROUTES_API.POPULAR}`,
  );

  const moviesPopular: Result[] = moviesDataPopular?.results ?? [];

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  if (loading) return <LoaderComponent />;

  if (error) return <ErrorComponent errorMessage={error} />;

  return (
    <div style={{ flex: 1 }}>
      <HeroSlider />
      <MovieCarousel title="Peliculas Recientes" movies={movies} />
      <MovieCarousel title="Peliculas Populares" movies={moviesPopular} />
      );
    </div>
  );
};

export default Home;
