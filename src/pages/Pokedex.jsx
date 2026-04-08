import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favs")) || []
  );

  useEffect(() => {
    loadPokemons();
  }, [page]);

  const loadPokemons = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`)
      .then(res => res.json())
      .then(async (data) => {
        const detalles = await Promise.all(
          data.results.map(poke =>
            fetch(poke.url).then(res => res.json())
          )
        );
        setPokemons(detalles);
      });
  };

  const searchPokemon = async () => {
    if (!search) return;

    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
      );
      const data = await res.json();
      setPokemons([data]);
    } catch {
      alert("No encontrado ❌");
    }
  };

  const resetSearch = () => {
    setSearch("");
    loadPokemons();
  };

  const isFavorite = (poke) => {
    return favorites.some(p => p.id === poke.id);
  };

  const toggleFavorite = (poke) => {
    let newFavs;

    if (isFavorite(poke)) {
      newFavs = favorites.filter(p => p.id !== poke.id);
    } else {
      newFavs = [...favorites, poke];
    }

    setFavorites(newFavs);
    localStorage.setItem("favs", JSON.stringify(newFavs));
  };

  return (
    <div className="container">
      <h2>Pokédex 🎮</h2>

      <input
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && searchPokemon()}
      />

      <button onClick={searchPokemon}>🔍</button>
      <button onClick={resetSearch}>🔄</button>

      <div className="grid">
        {pokemons.map((poke) => (
          <div className="card" key={poke.id}>
            
            <Link to={`/pokemon/${poke.name}`} className="card-link">
              <img src={poke.sprites.front_default} alt={poke.name} />
              <h3>{poke.name}</h3>
              <p>HP: {poke.stats[0].base_stat}</p>
            </Link>

            <button
              onClick={() => toggleFavorite(poke)}
              className={isFavorite(poke) ? "fav-active" : ""}
            >
              {isFavorite(poke) ? "❌" : "❤️"}
            </button>

          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 0}>
          ⬅
        </button>
        <button onClick={() => setPage(page + 1)}>
          ➡
        </button>
      </div>
    </div>
  );
};

export default Pokedex;