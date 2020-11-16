import http from "./http-common";

const getTicketAwaitingApproval = () => {
  return http.get("/api/ticket/pending");
};

const rejectTicket = (id, rejectComment) => {
  return http.patch(`/api/ticket/reject/${id}`, rejectComment);
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
