import { useState, useEffect } from "react";
import { getData } from "../services/apiServices";

interface MovieData<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

const useMovie = <T>(endpoint: string): MovieData<T> => {
  const [movieData, setMovieData] = useState<MovieData<T>>({
    data: null,
    error: null,
    loading: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      setMovieData((prevMovieData) => ({
        ...prevMovieData,
        loading: true,
        error: null,
      }));
      try {
        const data: T = await getData<T>(endpoint);
        setMovieData((prevMovieData) => ({
          ...prevMovieData,
          data,
          loading: false,
          error: null,
        }));
      } catch (error) {
        setMovieData((prevMovieData) => ({
          ...prevMovieData,
          loading: false,
          error: "Error fetching data",
        }));
      }
    };

    fetchData();
  }, [endpoint]);

  return movieData;
};

export default useMovie;
