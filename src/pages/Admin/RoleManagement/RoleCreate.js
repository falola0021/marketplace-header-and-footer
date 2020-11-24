import React, { useState, useRef } from "react";
import Form1 from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import RoleDataService from "../../../services/role.service";

import Styles from "./Role.module.css";
import { Row, Col, Form } from "react-bootstrap";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const rname = (value) => {
  if (value.length < 3) {
    return (
      <div className="alert alert-danger" role="alert">
        The name of vendor cannot be less than 3 characters.
      </div>
    );
  }
};

function Role({ closeDrawer, retrieveRoles }) {
  const form = useRef();
  const checkBtn = useRef();

  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeRole = (e) => {
    const role = e.target.value;
    setRole(role);
  };

  const onChangeStatus = (e) => {
    const status = e.target.value;
    setStatus(status);
  };

  const handleCreateRole = (e) => {
    e.preventDefault();

    setSuccessful(false);
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      RoleDataService.create(role, status)
        .then((response) => {
          setSuccessful(true);
          retrieveRoles();
          setMessage(response.data.message);
          setTimeout(function () {
            closeDrawer();
          }, 1000);
        })
        .catch((error) => {
          setSuccessful(false);
          setLoading(false);
          setMessage(error.response.data.message);
          console.log("here");
        });
    }
  };

  return (
    <>
      <Row>
        <Col>
          <div className={Styles.heading}>Create a User Role</div>
          <Form1 onSubmit={handleCreateRole} ref={form} className={Styles.form}>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Role Name</Form.Label>
                  <Input
                    style={{
                      border: " 1px solid  #f3f3f3",
                      backgroundColor: "rgba(59, 122, 254, 0.02)",
                      width: "100%",
                      padding: "6px 10px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="text"
                    placeholder="Enter Role"
                    name="role"
                    value={role}
                    onChange={onChangeRole}
                    validations={[required, rname]}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Select
                    style={{
                      border: " 1px solid #f3f3f3",
                      backgroundColor: "rgba(59, 122, 254, 0.02)",
                      width: "100%",
                      padding: "6px 10px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="text"
                    name="status"
                    value={status}
                    onChange={onChangeStatus}
                    validations={[required]}
                    className={Styles.formcontrol}
                    as="select"
                  >
                    <option value="">- Select Status -</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </Select>
                </Form.Group>
              </Col>
            </Row>

            <span>
              <button
                style={{
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  borderRadius: "3px",
                  color: "#ffffff",
                  border: " 1px solid #cdd0d3",
                  outline: "none",
                }}
                className={Styles.submitbutton}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                Create Role
              </button>
            </span>

            <span>
              {message && (
                <div className="form-group">
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
            </span>

            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form1>
        </Col>
      </Row>
    </>
  );
}

export default Role;
