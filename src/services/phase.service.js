import http from "./http-common";

const getAll = () => {
  return http.get("/api/phase");
};

const get = (id) => {
  return http.get(`/api/phase/${id}`);
};

const create = (name, phaseType, approver, sla, isDynamic) => {
  return http.post("/api/phase", {
    name,
    phaseType,
    approver,
    sla,
    isDynamic,
  });
};

const update = (id, data) => {
  return http.patch(`api/phase/${id}`, data);
};

const remove = (id) => {
  return http.delete(`api/phase/${id}`);
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
