import React, { useState } from "react";
import Styles from "./UserManagement.module.css";
import UserTable from "./Table/Table";

function UserManagement(props) {
  return (
    <>
      <div className={Styles.body}>
        <p className={Styles.title}>User Management</p>

        <UserTable />
      </div>
    </>
  );
}

export default UserManagement;
