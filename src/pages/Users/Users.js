import React from "react";
import Requester from "../Requester/Requester";
import Admin from "../Admin/Admin";
import AuthService from "../../services/auth.service";

function Users() {
  const currentUser = AuthService.getCurrentUser();
  const userRole = currentUser.roles[0];

  if (userRole === "admin") {
    return <Admin />;
  } else if (userRole === "user") {
    return <Requester />;
  }
}

export default Users;
