import React from "react";
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
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      {/* <div className={Styles.title}>Available Workflow</div> */}

      <div className={Styles.tablebox}>
        <Table responsive>
          <thead className={Styles.thead}>
            <tr>
              <th>Name</th>
              <th>Phases</th>

              <th></th>
            </tr>
          </thead>

          <tbody className={Styles.tbody}>
            <tr>
              <td>Anayo Kamali</td>
              <td>anayo.kamali@thegiggroupng.com</td>

              <td className={Styles.action}>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>Anayo Kamali</td>
              <td>
                anayo.kamali@thegiggroupng.com F DFFFFFFFFV DDDDDDDDD FFFFFFFF
              </td>

              <td className={Styles.action}>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default WorkflowTable;
