import http from "./http-common";

const create = (
  ref,
  items,
  numberOfItems,
  description,
  category,
  vendor,
  department,
  dueDate,
  amount,
  selectedFiles,
  comment
) => {
  let formData = new FormData();
  formData.append("ref", ref);
  formData.append("items", items);
  formData.append("numberOfItems", numberOfItems);
  formData.append("description", description);
  formData.append("category", category);
  formData.append("vendor", vendor);
  formData.append("department", department);
  formData.append("dueDate", dueDate);
  formData.append("amount", amount);
  for (let file of selectedFiles) {
    formData.append("documents", file);
  }
  formData.append("comment", comment);

  console.log(formData);
  console.log(selectedFiles);

  return http.post("/api/ticket", formData);
};
const get = (id) => {
  return http.get(`api/ticket/${id}`);
};

const getAll = () => {
  return http.get("/api/ticket");
};
const getUserTicketList = () => {
  return http.get("/api/ticket/my-tickets");
};

const getAllCount = () => {
  return http.get("/api/dashboard/ticket-count");
};
const getAllDeclined = () => {
  return http.get("/api/dashboard/ticket-rejected");
};
const getAllApproved = () => {
  return http.get("/api/dashboard/ticket-approved");
};
const getAllPending = () => {
  return http.get("/api/dashboard/ticket-pending");
};

export default {
  create,
  getAll,
  get,
  getAllCount,
  getAllDeclined,
  getAllApproved,
  getAllPending,
  getUserTicketList,
};
