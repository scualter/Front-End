import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) return null;

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 onClick={() => navigate("/pokedex")}>
        🎮 Pokédex
      </h2>

      <div>
        <Link to="/pokedex">Pokédex</Link>
        <Link to="/favorites">Favoritos</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;