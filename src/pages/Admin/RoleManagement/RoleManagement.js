import React, { useState } from "react";
import Styles from "./Role.module.css";
import RoleTable from "./Table/Table";
function RoleManagement(props) {
  return (
    <>
      <div className={Styles.body}>
        <p className={Styles.title}>Role Management</p>

        <RoleTable />
      </div>
    </>
  );
}

export default RoleManagement;
