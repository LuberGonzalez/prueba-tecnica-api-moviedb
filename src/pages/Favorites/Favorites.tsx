import React from "react";
import "./Favorites.css";
import CardMovie from "../../components/CardMovie/CardMovie";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

const Favorites: React.FC = () => {
  const favorites =
    useSelector((state: RootState) => state.favorites.favorites) ||
    JSON.parse(localStorage.getItem("favorites") || "[]");

  return (
    <div className="container mt-5 movie-list" style={{ flex: 1 }}>
      <h2 className="text-center mt-5">Películas Favoritas</h2>
      <div className="row">
        {favorites && favorites.length > 0 ? (
          favorites.map((movie) => (
            <div key={movie.id} className="col-lg-3 col-md-6 col-sm-6">
              <CardMovie movie={movie} />
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
