import http from "./http-common";

const getAll = () => {
  return http.get("/api/department");
};

const get = (id) => {
  return http.get(`/roles/${id}`);
};

const create = (name, hod, description) => {
  return http.post("/api/department", {
    name,
    hod,
    description,
  });
};

const update = (id, data) => {
  return http.patch(`api/department/${id}`, data);
};

const remove = (id) => {
  return http.delete(`api/department/${id}`);
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
