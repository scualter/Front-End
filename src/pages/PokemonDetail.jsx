import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PokemonDetail = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favs")) || []
  );

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, [name]);

  const isFavorite = () => {
    return favorites.some(p => p.id === pokemon?.id);
  };

  const toggleFavorite = () => {
    let newFavs;

    if (isFavorite()) {
      newFavs = favorites.filter(p => p.id !== pokemon.id);
    } else {
      newFavs = [...favorites, pokemon];
    }

    setFavorites(newFavs);
    localStorage.setItem("favs", JSON.stringify(newFavs));
  };

  if (!pokemon) return <p>Cargando...</p>;

  return (
    <div className="container">
      <h2>{pokemon.name}</h2>

      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <p>❤️ HP: {pokemon.stats[0].base_stat}</p>
      <p>⚔️ Attack: {pokemon.stats[1].base_stat}</p>
      <p>🛡️ Defense: {pokemon.stats[2].base_stat}</p>

      <button
        onClick={toggleFavorite}
        className={isFavorite() ? "fav-active" : ""}
      >
        {isFavorite() ? "❌ Quitar de favoritos" : "❤️ Añadir a favoritos"}
      </button>
    </div>
  );
};

export default PokemonDetail;