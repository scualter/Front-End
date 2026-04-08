const API_URL = "https://api.render.com/deploy/srv-d7b8chnkijhs73ash88g?key=q7IOVOGodg4";

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