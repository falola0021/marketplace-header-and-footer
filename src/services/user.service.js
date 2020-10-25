import http from "./http-common";

const getAll = () => {
  return http.get(
    "/api/user?limit&offset&email&mobile&status&fullName&startDate&endDate"
  );
};

const get = (id) => {
  return http.get(`/roles/${id}`);
};

const create = (firstName, lastName, email, password, role) => {
  return http.post(
    "/api/admin/user",

    {
      firstName,
      lastName,
      email,
      password,
      role,
    }
  );
};

const update = (id, data) => {
  return http.put(`/roles/${id}`, data);
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