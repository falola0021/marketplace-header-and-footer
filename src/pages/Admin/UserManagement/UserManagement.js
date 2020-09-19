import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Styles from "./UserManagement.module.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import UserManagementTable from "./UserManagementTable";

function UserManagement() {
  return (
    <>
      <div className={Styles.body}>
        <p className={Styles.title}>User Management</p>

        <Row className={Styles.usercontainer}>
          <Col className={Styles.userbox}>
            <div className={Styles.heading}>Create User</div>
            <Form className={Styles.form}>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      className={Styles.formcontrol}
                      type="text"
                      placeholder="Enter Fullname"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      className={Styles.formcontrol}
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Select Role</Form.Label>
                    <Form.Control className={Styles.formcontrol} as="select">
                      <option>user</option>
                      <option>HOD</option>
                      <option>Admin</option>
                      <option>User</option>
                      <option>Hr</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      className={Styles.formcontrol}
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button className={Styles.submitbutton} type="submit">
                Create
              </Button>
            </Form>
          </Col>
          <Col className={Styles.userbox}>
            <div className={Styles.heading}>Create Role</div>
            <Form className={Styles.form}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  className={Styles.formcontrol}
                  type="text"
                  placeholder="Enter Role Title"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Row className={Styles.radiobuttonrow}>
                  <Col>
                    <Form.Check
                      className={Styles.radiobutton}
                      type="radio"
                      label="Active"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      className={Styles.radiobutton}
                      type="radio"
                      label="Inactive"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Button className={Styles.submitbutton} type="submit">
                Create
              </Button>
            </Form>
          </Col>
        </Row>

        <UserManagementTable />
      </div>
    </>
  );
}

export default UserManagement;
