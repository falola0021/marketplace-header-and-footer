import React from "react";
import Requester from "../Requester/Requester";
import Approver from "../Approver/Approver";
import Admin from "../Admin/Admin";
import AuthService from "../../services/auth.service";
import Footer from "../../components/Footer/Footer";

function Users() {
  const currentUser = AuthService.getCurrentUser();
  const userRole = currentUser.roles[0];

  return (
    <>
      {userRole === "admin" && <Admin />}
      {/* {userRole === "user" && <Requester />} */}
      {userRole === "user" && <Approver />}
      <Footer />
    </>
  );
}
export default Users;
