import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavorites(favs);
  }, []);

  const removeFavorite = (id) => {
    const newFavs = favorites.filter(p => p.id !== id);
    setFavorites(newFavs);
    localStorage.setItem("favs", JSON.stringify(newFavs));
  };

  return (
    <div className="container">
      <h2>Favoritos ⭐</h2>

      <div className="grid">
        {favorites.map((poke) => (
          <div className="card" key={poke.id}>
            
            <Link to={`/pokemon/${poke.name}`} className="card-link">
              <img src={poke.sprites.front_default} alt={poke.name} />
              <h3>{poke.name}</h3>
            </Link>

            <button onClick={() => removeFavorite(poke.id)}>
              ❌
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;