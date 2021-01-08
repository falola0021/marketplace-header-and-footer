import http from "./http-common";

const register = (firstName, lastName, email, password, department) => {
  return http.post("/api/user", {
    firstName,
    lastName,
    email,
    password,
    department,
  });
};

const login = (email, password) => {
  return http
    .post("/api/user/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        const data = response.data.data;
        setUser(data);
        window.location.reload();
      }

      return response.data.data;
    });
};

// const refreshToken = () => {
//   return http.get("/api/user/refresh-token");
// };

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const setUser = (data) => {
  const userObject = {
    ...data.details,
    roles: data.roles,
    token: data.token,
    refreshToken: data.refreshToken,
  };

  localStorage.setItem("user", JSON.stringify(userObject));
};
export default {
  register,
  getCurrentUser,
  login,
  logout,
  // refreshToken,
};
