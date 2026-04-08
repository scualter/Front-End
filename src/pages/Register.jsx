import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("https://proyecto-final-backend-pwhh.onrender.com/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    console.log(data);
    alert("Usuario creado 🔥");
  };

  return (
    <div className="container">
      <h2>Register 📝</h2>

      <form onSubmit={handleRegister}>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Crear cuenta</button>
      </form>
    </div>
  );
};

export default Register;