import React from "react";
import Requester from "../Requester/Requester";
import Approver from "../Approver/Approver";
import Admin from "../Admin/Admin";
import AuthService from "../../services/auth.service";
import Footer from "../../components/Footer/Footer";

function Users() {
  const currentUser = AuthService.getCurrentUser();
  let userRoles = currentUser.roles;
  const showDashoard = (userRoles) => {
    if (userRoles.includes("admin")) {
      return <Admin />;
    } else if (userRoles.includes("approver")) {
      return <Approver />;
    } else {
      return <Requester />;
    }
  };
  return (
    <>
      {showDashoard(userRoles)}

      <Footer />
    </>
  );
}
export default Users;
