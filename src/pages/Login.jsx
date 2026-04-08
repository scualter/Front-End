import { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await login({ email, password });

    localStorage.setItem("token", data.token);

    navigate("/pokedex");
  };

  return (
    <div className="container">
      <h2>Iniciar Sesión 🔐</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Entrar</button>

        <Link to="/register">Crear cuenta</Link>
      </form>
    </div>
  );
};

export default Login;