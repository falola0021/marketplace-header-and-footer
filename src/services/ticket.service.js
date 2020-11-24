import http from "./http-common";

const getTicketAwaitingApproval = () => {
  return http.get("/api/ticket/pending");
};

const rejectTicket = (id) => {
  return http.patch(`/api/ticket/reject/${id}`);
};

const approveTicket = (id) => {
  return http.patch(
    `/api/ticket/approve/${id}`
    //approveComment
  );
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
  getTicketAwaitingApproval,
  rejectTicket,
  approveTicket,
  countAllApprovedTickets,
  countApprovedTicketsByApprover,
  countRejectedTicketsByApprover,
  countPendingTicketsByApprover,
};
