export const getToken = () => localStorage.getItem("token");

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};

export const isAuth = () => {
  return !!localStorage.getItem("token");
};