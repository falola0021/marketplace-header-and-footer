import http from "./http-common";

const getTicketAwaitingApproval = () => {
  return http.get("/api/ticket/pending");
};

const allApproverTickets = () => {
  return http.get("/api/ticket/approver/tickets");
};
const AllApprovedTickets = () => {
  return http.get("/api/ticket/approver/ticket-approved");
};
const AllRejectedTickets = () => {
  return http.get("/api/ticket/approver/ticket-rejected");
};

const rejectTicket = (id, comment) => {
  const trimmed_id = id.trim();
  return http.patch(`/api/ticket/reject/${trimmed_id}`, { comment: comment });
};

const approveTicket = (id, comment) => {
  const trimmed_id = id.trim();
  return http.patch(`/api/ticket/approve/${trimmed_id}`, { comment: comment });
};

//aprovers stats

const countAllApprovedTickets = () => {
  return http.get("/api/dashboard/approver/ticket-count");
};

const countApprovedTicketsByApprover = () => {
  return http.get("/api/dashboard/approver/ticket-approved");
};
const countRejectedTicketsByApprover = () => {
  return http.get("/api/dashboard/approver/ticket-rejected");
};
const countPendingTicketsByApprover = () => {
  return http.get("/api/dashboard/approver/ticket-pending");
};

const countAllUsers = () => {
  return http.get("/api/dashboard/admin/user-count");
};
const countDepartments = () => {
  return http.get("/api/dashboard/admin/department-count");
};
const countConfirmedRequests = () => {
  return http.get("/api/dashboard/admin/ticket-count-approved");
};
const countPendingRequests = () => {
  return http.get("/api/dashboard/admin/ticket-count-pending");
};
const countRejectedRequests = () => {
  return http.get("/api/dashboard/admin/ticket-count-rejected");
};
const countActiveUsers = () => {
  return http.get("/api/dashboard/admin/active-user-count");
};

export default {
  allApproverTickets,
  getTicketAwaitingApproval,
  AllApprovedTickets,
  AllRejectedTickets,
  rejectTicket,
  approveTicket,
  countAllApprovedTickets,
  countApprovedTicketsByApprover,

  countRejectedTicketsByApprover,
  countPendingTicketsByApprover,

  countAllUsers,
  countDepartments,
  countConfirmedRequests,
  countPendingRequests,
  countRejectedRequests,
  countActiveUsers,
};
