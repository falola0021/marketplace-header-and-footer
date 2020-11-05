import React, { useState, useRef, useEffect } from "react";
import Form1 from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import { useDispatch, useSelector } from "react-redux";
import { isEmail } from "validator";
// import { create } from "../../../redux/actions/userActions/user";
import UserDataService from "../../../services/user.service";
// import * as userActions from "../../../redux/actions/userActions/userActions";
import DepartmentDataService from "../../../services/department.service";
import RoleDataService from "../../../services/role.service";

import Styles from "./UserManagement.module.css";
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
const vemail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const name = (value) => {
  if (value.length < 3) {
    return (
      <div className="alert alert-danger" role="alert">
        The name of vendor cannot be less than 3 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be atleast 6 characters.
      </div>
    );
  }
};

function User({ closeDrawer }) {
  const form = useRef();
  const checkBtn = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [departments, setDepartments] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };

  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeDepartment = (e) => {
    const department = e.target.value;
    setDepartment(department);
  };

  const onChangeRole = (e) => {
    const role = e.target.value;
    setRole(role);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();

    setSuccessful(false);
    setLoading(true);
    setMessage("");

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      UserDataService.create(
        firstName,
        lastName,
        email,
        password,
        department,
        role
      ).then(
        (response) => {
          setMessage(response.data.message);
          setLoading(false);
          setSuccessful(true);
          setTimeout(function () {
            closeDrawer();
          }, 1000);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.error) ||
            error.message ||
            error.toString();
          setSuccessful(false);
          setLoading(false);
          setMessage(resMessage);
          console.log(error.response);
        }
      );
    } else {
      setLoading(false);
    }
  };

  const retrieveDepartments = async () => {
    await DepartmentDataService.getAll()
      .then((response) => {
        setDepartments(response.data.data);
        console.log(departments);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  useEffect(() => {
    retrieveDepartments();
  }, []);

  const retrieveRoles = async () => {
    await RoleDataService.getAll()
      .then((response) => {
        setRoles(response.data.data);
        console.log(roles);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  useEffect(() => {
    retrieveRoles();
  }, []);

  return (
    <>
      <Row>
        <Col>
          <div className={Styles.heading}>Create a User</div>
          <Form1 onSubmit={handleCreateUser} ref={form} className={Styles.form}>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Firstname</Form.Label>
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
                    placeholder="Enter Firstname"
                    name="firstName"
                    value={firstName}
                    onChange={onChangeFirstName}
                    validations={[required, name]}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Lastname</Form.Label>
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
                    placeholder="Enter LastName"
                    name="lastName"
                    value={lastName}
                    onChange={onChangeLastName}
                    validations={[required, name]}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Department</Form.Label>
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
                    name="department"
                    value={department}
                    onChange={onChangeDepartment}
                    validations={[required]}
                    className={Styles.formcontrol}
                    as="select"
                  >
                    <option value="">- Select departmant -</option>
                    {departments.map((department) => (
                      <option key={department._id} value={department._id}>
                        {department.name}
                      </option>
                    ))}
                  </Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
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
                    placeholder="Enter Email Address"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, vemail]}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Input
                    style={{
                      border: " 1px solid  #f3f3f3",
                      backgroundColor: "rgba(59, 122, 254, 0.02)",
                      width: "100%",
                      padding: "6px 10px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Role</Form.Label>
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
                    name="role"
                    value={role}
                    onChange={onChangeRole}
                    validations={[required]}
                    className={Styles.formcontrol}
                    as="select"
                  >
                    <option value="">- Select user role -</option>
                    {roles.map((role) => (
                      <option key={role._id} value={role._id}>
                        {role.role}
                      </option>
                    ))}
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
                Create User
              </button>
            </span>
            {/* {successful && ( */}
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
            {/* )} */}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form1>
        </Col>
      </Row>
    </>
  );
}

export default User;
