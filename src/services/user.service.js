import http from "./http-common";

const getAll = () => {
  return http.get(
    "/api/user?limit&offset&email&mobile&status&fullName&startDate&endDate"
  );
};

const get = (id) => {
  return http.get(`/roles/${id}`);
};

const create = (firstName, lastName, email, password, department, role) => {
  return http.post("/api/admin/user", {
    firstName,
    lastName,
    email,
    password,
    department,
    role,
  });
};

const attachRoleToUser = (roleId, userId) => {
  return http.post("/api/admin/user/role/attach", {
    roleId,
    userId,
  });
};
const detachRoleToUser = (roleId, userId) => {
  return http.post("/api/admin/user/role/detach", {
    roleId,
    userId,
  });
};

const update = (id, data) => {
  return http.patch(`/user/${id}`, data);
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

const activateUser = (id) => {
  return http.patch(`/api/admin/user/activate/${id}`);
};
const deactivateUser = (id) => {
  return http.patch(`/api/admin/user/deactivate/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  attachRoleToUser,
  detachRoleToUser,
  activateUser,
  deactivateUser,
};
