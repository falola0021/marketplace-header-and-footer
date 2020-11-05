import http from "./http-common";

const getAll = () => {
  return http.get("/api/category");
};

const get = (id) => {
  return http.get(`/roles/${id}`);
};

const create = (name, description, workflow) => {
  return http.post("/api/category", {
    name,
    description,
    workflow,
  });
};

const update = (id, data) => {
  return http.patch(`api/category/${id}`, data);
};

const remove = (id) => {
  return http.delete(`api/category/${id}`);
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
