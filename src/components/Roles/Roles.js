import React, { useState, useRef, } from "react";
import Styles from "../../pages/Admin/UserManagement/UserManagement.module.css";
import { Row, Col,  Form } from "react-bootstrap";
import Form1 from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import RoleDataService from "../../services/role.service";


const vrole = (value) => {
  if (value.length < 1 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        This field cannot be empty
      </div>
    );
  }
};

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Roles = (props) => {


const form = useRef();
const checkBtn = useRef();
const [loading, setLoading] = useState(false);

//create user roles
const [role, setRole] = useState("");
const [status, setStatus] = useState("");
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
   setMessage("");
   setLoading(true);
  setSuccessful(false);

  form.current.validateAll();

  if (checkBtn.current.context._errors.length === 0) {
    RoleDataService.create(role, status).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
          window.location.reload();
      },
      (error) => {
        console.log(error);
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          setLoading(false);
        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  }else {
    setLoading(false);
  }
};


  
  return (
    <>
          
            <div className={Styles.heading}>Create Role</div>
            <Form1
              onSubmit={handleCreateRole}
              ref={form}
              className={Styles.form}
            >
              {!successful && (
                <div>
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Input
                      style={{
                        border: " 1px solid #cdd0d3",
                        backgroundColor: "rgba(59, 122, 254, 0.02)",
                        width: "100%",
                        padding: "6px 10px",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                      placeholder="Enter Role Title"
                      type="text"
                       name="role"
                      value={role}
                      onChange={onChangeRole}
                      validations={[required, vrole]}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Row className={Styles.radiobuttonrow}>
                      <Col>
                        <Form.Check
                          className={Styles.radiobutton}
                          type="radio"
                          label="active"
                          value="active"
                          name="role"
                          onChange={onChangeStatus}
                        />
                      </Col>
                      <Col>
                        <Form.Check
                          className={Styles.radiobutton}
                          type="radio"
                          label="inactive"
                          name="role"
                          value="inactive"
                          onChange={onChangeStatus}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
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
            <span  className="spinner-border spinner-border-sm"></span>
          )}
                      Create Role
                    </button>
                  </span>
                </div>
              )}
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
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form1>
         
      
    </>
  );
};

export default Roles;
