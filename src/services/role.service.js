import http from "./http-common";

const getAll = () => {
  return http.get("/api/role");
};

const get = (id) => {
  return http.get(`/roles/${id}`);
};

const create = (role, status) => {
  return http.post("/api/role", {
    role,
    status,
  });
};

const update = (id, data) => {
  return http.patch(`/roles/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/roles/${id}`);
};

const removeAll = () => {
  return http.delete(`/roles`);
};

const findByTitle = (title) => {
  return http.get(`/roles?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};
