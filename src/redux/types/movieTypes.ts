import { ResponseMovieDB } from "../../types/MoviesApiTypes";

export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";

interface FetchMoviesRequestAction {
  type: typeof FETCH_MOVIES_REQUEST;
}

interface FetchMoviesSuccessAction {
  type: typeof FETCH_MOVIES_SUCCESS;
  payload: ResponseMovieDB;
}

interface FetchMoviesErrorAction {
  type: typeof FETCH_MOVIES_ERROR;
  payload: string;
}

export type MoviesActionTypes =
  | FetchMoviesRequestAction
  | FetchMoviesSuccessAction
  | FetchMoviesErrorAction;
