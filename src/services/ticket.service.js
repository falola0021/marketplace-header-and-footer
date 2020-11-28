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
