import { ThunkAction } from "redux-thunk";
import { ROUTES_API } from "../../constants";
import { getData } from "../../services/apiServices";
import { ResponseMovieDB } from "../../types/MoviesApiTypes";
import {
  DELETE_MOVIE,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  SAVE_MOVIE,
} from "../types/movieTypes";
import { RootState } from "@reduxjs/toolkit/query";
import { AnyAction } from "redux";

export const getMovies = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    try {
      const response = await getData<ResponseMovieDB>(
        `${ROUTES_API.NOW_PLAYING}`,
      );
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: response,
      });
    } catch (error: unknown) {
      let errorMessage = "Ocurrio un error";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      dispatch({
        type: FETCH_MOVIES_ERROR,
        payload: errorMessage,
      });
    }
  };
};

export const saveMovie = (movieId: string) => {
  return {
    type: SAVE_MOVIE,
    payload: movieId,
  };
};

export const deleteMovie = (movieId: string) => {
  return {
    type: DELETE_MOVIE,
    payload: movieId,
  };
};
