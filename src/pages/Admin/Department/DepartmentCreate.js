import React, { useState, useRef, useEffect } from "react";
import Form1 from "react-validation/build/form";
import Input from "react-validation/build/input";
import Textarea from "react-validation/build/textarea";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import DepartmentDataService from "../../../services/department.service";
import UserDataService from "../../../services/user.service";
// import * as roleActions from "../../../redux/actions/roleActions/roleActions";

import Styles from "./Department.module.css";
import { Row, Col, Form } from "react-bootstrap";
// import { Textarea } from "@chakra-ui/core";

const required = (value) => {
  if (!value) {
    return (
      <div
        style={{ fontSize: "12px", padding: "0" }}
        className="alert alert-danger"
        role="alert"
      >
        This field is required!
      </div>
    );
  }
};

const vname = (value) => {
  if (value.length < 3) {
    return (
      <div
        style={{ fontSize: "12px", padding: "0" }}
        className="alert alert-danger"
        role="alert"
      >
        The name of vendor cannot be less than 3 characters.
      </div>
    );
  }
};

function Department({ closeDrawer, retrieveDepartments }) {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [hod, setHod] = useState("");
  const [description, setDescription] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState(false);

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeHod = (e) => {
    const hod = e.target.value;
    setHod(hod);
  };
  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const retrieveUsers = () => {
    UserDataService.getAll()
      .then((response) => {
        setUsers(response.data.data.userList);
      })
      .catch((e) => {
        console.log(e);
        console.log("cannot get user");
      });
  };

  useEffect(() => {
    retrieveUsers();
  }, []);

  const handleCreateDepartment = (e) => {
    e.preventDefault();

    setSuccessful(false);
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      DepartmentDataService.create(name, description)
        .then((response) => {
          setSuccessful(true);
          setLoading(false);
          setMessage(response.data.message);
          retrieveDepartments();
          setTimeout(function () {
            closeDrawer();
          }, 1000);
        })
        .catch((e) => {
          setSuccessful(false);
          setLoading(false);
          console.log(e.response.data.message);
          setMessage(e.response.data.message);
          console.log("here");
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <div className={Styles.heading}>Create a Department</div>
          <Form1
            onSubmit={handleCreateDepartment}
            ref={form}
            className={Styles.form}
          >
            <Row>
              <Col sm="12">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
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
                    placeholder="Enter Name"
                    name="role"
                    value={name}
                    onChange={onChangeName}
                    validations={[required, vname]}
                  />
                </Form.Group>
              </Col>
              {/* <Col sm="6">
                <Form.Group>
                  <Form.Label>Hod</Form.Label>
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
                    name="hod"
                    value={hod}
                    onChange={onChangeHod}
                    validations={[required]}
                    className={Styles.formcontrol}
                    as="select"
                  >
                    <option value="">- Select Department Head -</option>
                    {users.map((user) => (
                      <option key={user.userId} value={user.userId}>
                        {user.firstName} {user.lastName}
                      </option>
                    ))}
                  </Select>
                </Form.Group>
              </Col> */}
              <Col sm="12">
                {" "}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Textarea
                    style={{
                      border: " 1px solid  #f3f3f3",
                      backgroundColor: "rgba(59, 122, 254, 0.02)",
                      width: "100%",
                      padding: "6px 10px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="text"
                    placeholder="Enter Description"
                    name="description"
                    value={description}
                    onChange={onChangeDescription}
                    validations={[required, vname]}
                  ></Textarea>
                </Form.Group>
              </Col>
            </Row>
            {message && (
              <span>
                <div className="form-group">
                  <div
                    style={{ fontSize: "12px", padding: "0 3px" }}
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              </span>
            )}
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
                <span className={Styles.alignLoader}>
                  {" "}
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span className="pl-2">Submit</span>
                </span>
              </button>
            </span>

            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form1>
        </Col>
      </Row>
    </>
  );
}

export default Department;
