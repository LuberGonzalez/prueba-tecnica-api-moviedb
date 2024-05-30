import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actions/favoritesActions";
import { RootState } from "../../redux/reducers";
import { Result } from "../../types/MoviesApiTypes";
import "./AddToFavorites.css";
import Alert from "../Alert/Alert";

interface AddToFavoritesProps {
  movie: Result;
}

const AddToFavorites: React.FC<AddToFavoritesProps> = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );
  const [isFavorited, setIsFavorited] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "danger">("success");

  useEffect(() => {
    const currentFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]",
    );
    setIsFavorited(currentFavorites.some((fav: Result) => fav.id === movie.id));
  }, [movie.id]);

  const handleAddToFavorites = () => {
    if (isFavorited) {
      dispatch(removeFromFavorites(movie.id));
      const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setAlertMessage("Eliminado de favoritos");
      setAlertType("danger");
    } else {
      dispatch(addToFavorites(movie));
      const currentFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]",
      );
      const updatedFavorites = [...currentFavorites, movie];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setAlertMessage("Agregado a Favoritos");
      setAlertType("success");
    }
    setIsFavorited(!isFavorited);
  };

  return (
    <>
      <button
        className={`favorite-button ${isFavorited ? "favorited" : ""}`}
        onClick={handleAddToFavorites}
      >
        <i className={`bi bi-heart${isFavorited ? "-fill" : ""}`}></i>
      </button>
      {alertMessage && <Alert message={alertMessage} type={alertType} />}
    </>
  );
};

export default AddToFavorites;
