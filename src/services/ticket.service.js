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

export default {
  getTicketAwaitingApproval,
  rejectTicket,
  approveTicket,
};
