import React from "react";
import Styles from "./UserManagement.module.css";
import { Row, Col} from "react-bootstrap";

import UserManagementTable from "./UserManagementTable";

import Users from "../../../components/Users/Users";
import Roles from "../../../components/Roles/Roles";


const UserManagement = (props) => {
  return (
    <>
      <div className={Styles.body}>
        <p className={Styles.title}>User Management</p>

        <Row className={Styles.usercontainer}>
          <Col className={Styles.userbox}>
          <Users/>
          </Col>
          <Col className={Styles.userbox}>
           <Roles/>
          </Col>
        </Row>

        <UserManagementTable />
      </div>
    </>
  );
};

export default UserManagement;
