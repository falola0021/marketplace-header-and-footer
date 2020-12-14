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
};
