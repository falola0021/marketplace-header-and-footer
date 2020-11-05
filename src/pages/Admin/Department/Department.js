import React, { useState } from "react";
import Styles from "./Department.module.css";
import DepartmentTable from "./Table/Table";
function Department(props) {
  return (
    <>
      <div className={Styles.body}>
        <p className={Styles.title}>Department</p>
        <DepartmentTable />
      </div>
    </>
  );
}

export default Department;
