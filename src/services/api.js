const API_URL = "https://proyecto-final-backend-pwhh.onrender.com";

export const login = async (data) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  });

  return res.json();
};

export const getFavorites = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/favorites`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};