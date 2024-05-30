import { Result } from "../../types/MoviesApiTypes";
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../types/favoritesTypes";

interface FavoritesState {
  favorites: Result[];
}

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoritesReducer = (
  state = initialState,
  action: { type: string } & Record<string, unknown>,
) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload as Result],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (fav) => fav.id !== (action.payload as number),
        ),
      };
    default:
      return state;
  }
};
export default favoritesReducer;
