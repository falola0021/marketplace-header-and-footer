import React from "react";
import { Modal } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Styles from "./Category.module.css";
import SearchFilter from "../../../components/SearchFilter/SearchFilter";
import { Row, Col } from "react-bootstrap";

function VendorTable() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <p className={Styles.title}>List of Categories</p>

      <Row className={Styles.tabrow}>
        <Col sm="6"></Col>
        <Col className="pt-4 pb-4">
          <SearchFilter />
        </Col>
      </Row>

      <div className={Styles.tablebox}>
        <Table responsive>
          <thead className={Styles.thead}>
            <tr>
              <th>
                <input className={Styles.checkbox} type="checkbox" />
              </th>
              <th>Name</th>
              <th>Description</th>
              <th>Workflow</th>

              <th></th>
            </tr>
          </thead>

          <tbody className={Styles.tbody}>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>For all kinds of request</td>
              <td>Workflow name</td>

              <td className={Styles.action}>
                <div className={Styles.edit} onClick={() => setModalShow(true)}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>For all kinds of request</td>
              <td>Workflow name</td>
              <td className={Styles.action}>
                <div className={Styles.edit}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>For all kinds of request</td>
              <td>Workflow name</td>
              <td className={Styles.action}>
                <div className={Styles.edit}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Anayo Kamali</td>
              <td>For all kinds of request</td>
              <td>Workflow name</td>
              <td className={Styles.action}>
                <div className={Styles.edit}>
                  <i className="fa fa-edit"></i>
                  <span>Edit</span>
                </div>
                <div className={Styles.delete}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VendorTable;
