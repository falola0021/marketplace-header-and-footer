import http from "./http-common";

const getAll = () => {
  return http.get("/api/workflow");
};

const get = (id) => {
  return http.get(`/roles/${id}`);
};

const create = (name, description, phases) => {
  return http.post("/api/workflow", {
    name,
    description,
    phases,
  });
};

const update = (id, data) => {
  return http.patch(`/workflows/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/api/workflow/${id}`);
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
