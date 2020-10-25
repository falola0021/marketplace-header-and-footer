import http from "./http-common";

const create = (
  name,
  address,
  city,
  state,
  email,
  phone,
  bank,
  accountName,
  accountNumber,
  isVerified
) => {
  return http.post(
    "/api/vendor",

    {
      name,
      address,
      city,
      state,
      email,
      phone,
      bank,
      accountName,
      accountNumber,
      isVerified,
    }
  );
};
// const get = (id) => {
//   return http.get(`/api/vendor/:${id}`);
// };

const get = (id) => {
  return http.get(`/api/vendor/${id}`);
};

const getAll = () => {
  return http.get("/api/vendor");
};

const update = (id, data) => {
  return http.patch(`/api/vendor/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/api/vendor/${id}`);
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
