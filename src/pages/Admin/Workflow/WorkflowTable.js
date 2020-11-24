import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Styles from "./Workflow.module.css";
import {
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

function WorkflowTable() {
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [workflows, setWorkflows] = useState([]);

  const retrieveWorkflow = async () => {
    await WorkflowDataService.getAll()
      .then((response) => {
        setWorkflows(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveWorkflow();
  }, []);

  const deleteWorkflow = (workflow) => {
    WorkflowDataService.remove(workflow._id).then(
      (response) => {
        setMessage(response.data.message);
        retrieveWorkflow();
        setLoading(false);
        setSuccessful(true);
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
  };

  return (
    <>
      {/* <div className={Styles.title}>Available Workflow</div> */}

      <div className={Styles.tablebox}>
        <Table responsive>
          <thead className={Styles.thead}>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Phases</th>

              <th></th>
            </tr>
          </thead>

          <tbody className={Styles.tbody}>
            {workflows.map((workflow) => (
              <tr key={workflow._id}>
                <td>{workflow.name}</td>
                <td>{workflow.description}</td>
                {/* <td>{workflow.phases}</td> */}
                <td>put the phases here</td>

                <td className={Styles.action}>
                  <div
                    onClick={() => deleteWorkflow(workflow)}
                    className={Styles.delete}
                  >
                    <i className="fa fa-trash"></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default WorkflowTable;
