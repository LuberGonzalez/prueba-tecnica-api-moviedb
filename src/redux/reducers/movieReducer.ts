import { ResponseMovieDB } from "../../types/MoviesApiTypes";
import {
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from "../types/movieTypes";

interface MoviesState {
  data: ResponseMovieDB[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  data: [],
  loading: false,
  error: null,
};

function movieReducer(
  state = initialState,
  action: { type: string } & Record<string, unknown>,
) {
  if (typeof action.type !== "string") {
    throw new Error("Action type must be a string.");
  }
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default movieReducer;
