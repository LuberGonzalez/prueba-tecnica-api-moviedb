import { Result } from "../../types/MoviesApiTypes";
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../types/favoritesTypes";

export const addToFavorites = (movie: Result) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: movie,
  };
};

export const removeFromFavorites = (movieId: number) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: movieId,
  };
};
