const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api"; 

export const login = async (data) => {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      // Si no es 2xx, lee el texto y lanza error
      const errorText = await res.text();
      throw new Error(errorText);
    }

    return await res.json(); // Solo parsea JSON si todo va bien
  } catch (error) {
    console.error("Error en login:", error.message);
    throw error; // Para que el front pueda manejarlo
  }
};

export const getFavorites = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/favorites`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText);
    }

    return await res.json();
  } catch (error) {
    console.error("Error obteniendo favoritos:", error.message);
    throw error;
  }
};