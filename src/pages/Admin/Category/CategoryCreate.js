import React, { useState, useRef, useEffect } from "react";
import Form1 from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import UserDataService from "../../../services/user.service";
import WorkflowDataService from "../../../services/workflow.service";
import CategoryDataService from "../../../services/category.service";

import Styles from "./Category.module.css";

import { Row, Col, Form } from "react-bootstrap";
import { Textarea } from "@chakra-ui/core";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

function Category({ closeDrawer }) {
  const form = useRef();
  const checkBtn = useRef();
  const [workflows, setWorkflows] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [workflow, setWorkflow] = useState("");

  const [Category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };
  const onChangeWorkflow = (e) => {
    const workflow = e.target.value;
    setWorkflow(workflow);
  };

  const handleCreateCategory = (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    setMessage("");

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      CategoryDataService.create(name, description, workflow).then(
        (response) => {
          setMessage(response.data.message);
          // retrievePhases();
          setLoading(false);
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

  const retrieveWorkflows = async () => {
    await WorkflowDataService.getAll()
      .then((response) => {
        setWorkflows(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveWorkflows();
  }, []);

  return (
    <>
      <Row>
        <Col>
          <div className={Styles.heading}>Create Category</div>
          <Form1
            onSubmit={handleCreateCategory}
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
                    placeholder="Enter Category Namwe"
                    name="name"
                    value={name}
                    onChange={onChangeName}
                    validations={[required]}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Workflow</Form.Label>
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
                    value={workflow}
                    onChange={onChangeWorkflow}
                    validations={[required]}
                    className={Styles.formcontrol}
                    as="select"
                  >
                    <option value="">- Select Workflow -</option>
                    {workflows.map((workflow) => (
                      <option key={workflow._id} value={workflow._id}>
                        {workflow.name}
                      </option>
                    ))}
                  </Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Label>Description</Form.Label>
                <Textarea
                  style={{
                    border: " 1px solid  #f3f3f3",
                    backgroundColor: "rgba(59, 122, 254, 0.02)",
                    width: "100%",
                    padding: "6px 10px",
                    borderRadius: "3px",
                    outline: "none",
                    minHeight: "120px",
                  }}
                  type="text"
                  name="description"
                  value={description}
                  onChange={onChangeDescription}
                  validations={[required]}
                ></Textarea>
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
                Create Category
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

export default Category;
