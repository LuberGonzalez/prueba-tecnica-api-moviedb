import React from "react";
import "./Favorites.css";
import CardMovie from "../../components/CardMovie/CardMovie";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { removeFromFavorites } from "../../redux/actions/favoritesActions";

const Favorites: React.FC = () => {
  const dispatch = useDispatch();
  const favorites =
    useSelector((state: RootState) => state.favorites.favorites) ||
    JSON.parse(localStorage.getItem("favorites") || "[]");

  console.log(favorites);

  const handleRemoveFromFavorites = (movieId: number) => {
    dispatch(removeFromFavorites(movieId));
    const updatedFavorites = favorites.filter((fav) => fav.id !== movieId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mt-5 movie-list">
      <h2 className="text-center mt-5">Películas Favoritas</h2>
      <div className="row">
        {favorites && favorites.length > 0 ? (
          favorites.map((movie) => (
            <div key={movie.id} className="col-lg-3 col-md-6 col-sm-6">
              <CardMovie movie={movie} />
              <button
                className="remove-favorite-button"
                onClick={() => handleRemoveFromFavorites(movie.id)}
              >
                Remove from Favorites
              </button>
            </div>
          ))
        ) : (
          <p>No hay películas disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
