import React, { useState, useRef, useEffect } from "react";
import Form1 from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import UserDataService from "../../../services/user.service";
import PhaseDataService from "../../../services/phase.service";

import Styles from "./Phase.module.css";
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

function Phase({ closeDrawer, retrievePhases }) {
  const form = useRef();
  const checkBtn = useRef();
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [sla, setSla] = useState("");
  const [approver, setApprover] = useState("");
  const [isDynamic, setIsDynamic] = useState("");
  const [phaseType, setPhaseType] = useState("");
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangePhaseType = (e) => {
    const phaseType = e.target.value;
    setPhaseType(phaseType);
  };
  const onChangeSla = (e) => {
    const sla = e.target.value;
    setSla(sla);
  };

  const onChangeIsDynamic = (e) => {
    const isDynamic = e.target.value;
    setIsDynamic(isDynamic);
  };
  const onChangeApprover = (e) => {
    const approver = e.target.value;
    setApprover(approver);
  };

  const handleCreatePhase = (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    setMessage("");

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      PhaseDataService.create(name, phaseType, approver, sla, isDynamic).then(
        (response) => {
          setMessage(response.data.message);
          retrievePhases();
          setLoading(false);
          retrievePhases();
          setSuccessful(true);

          setTimeout(function () {
            closeDrawer();
          }, 1000);
        },
        (error) => {
          const resMessage = error.response.data.message;

          error.toString();
          setSuccessful(false);
          setLoading(false);
          setMessage(error.response.data.message);
          console.log(error.response.data.message);
        }
      );
    } else {
      setLoading(false);
    }
  };

  const retrieveUsers = async () => {
    await UserDataService.getAll()
      .then((response) => {
        setUsers(response.data.data.userList);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveUsers();
  }, []);

  return (
    <>
      <Row>
        <Col>
          <div className={Styles.heading}>Create A Phase</div>
          <Form1
            onSubmit={handleCreatePhase}
            ref={form}
            className={Styles.form}
          >
            <Row>
              <Col>
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
                    placeholder="Enter Phase Namwe"
                    name="name"
                    value={name}
                    onChange={onChangeName}
                    validations={[required]}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phase Status</Form.Label>
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
                    name="isDynamic"
                    value={isDynamic}
                    onChange={onChangeIsDynamic}
                    validations={[required]}
                    className={Styles.formcontrol}
                    as="select"
                  >
                    <option value="">-Choose Status -</option>
                    <option value="true">Static</option>
                    <option value="false">Dynamic</option>
                  </Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Approver</Form.Label>
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
                    name="approver"
                    value={approver}
                    onChange={onChangeApprover}
                    validations={[required]}
                    className={Styles.formcontrol}
                    as="select"
                  >
                    <option value="">-Choose Approver -</option>
                    {users.map((user) => (
                      <option key={user.userId} value={user.userId}>
                        {user.firstName} {user.lastName}
                      </option>
                    ))}
                  </Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Phase Type</Form.Label>
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
                    name="phaseType"
                    value={phaseType}
                    onChange={onChangePhaseType}
                    validations={[required]}
                    className={Styles.formcontrol}
                    as="select"
                  >
                    <option value="">-Choose Phase Type -</option>
                    <option value="transit">Transit Phase</option>
                    <option value="end">End Phase</option>
                  </Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>SLA</Form.Label>
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
                    name="sla"
                    value={sla}
                    onChange={onChangeSla}
                    validations={[required]}
                    className={Styles.formcontrol}
                    as="select"
                  >
                    <option value="">-Choose SLA -</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
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
                Submit
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

export default Phase;
