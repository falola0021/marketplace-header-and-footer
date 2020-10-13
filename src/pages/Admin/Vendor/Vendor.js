import React from "react";
import Styles from "./Vendor.module.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import VendorTable from "./VendorTable";

function Vendor() {
  return (
    <>
      <div className={Styles.body}>
        <p className={Styles.title}>Vendor</p>

        <Row className={Styles.usercontainer}>
          <Col className={Styles.userbox}>
            <div className={Styles.heading}>Create a Vendor</div>
            <Form className={Styles.form}>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Vendor Name</Form.Label>
                    <Form.Control
                      className={Styles.formcontrol}
                      type="text"
                      placeholder="Enter Vendor Name"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Verification Status</Form.Label>
                    <Form.Control className={Styles.formcontrol} as="select">
                      <option>verification status</option>
                      <option>Verified</option>
                      <option>Not Verified</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      className={Styles.formcontrol}
                      type="text"
                      placeholder="Enter Address"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Account Name</Form.Label>
                    <Form.Control
                      className={Styles.formcontrol}
                      type="text"
                      placeholder="Enter Account Name"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      className={Styles.formcontrol}
                      type="email"
                      placeholder="Enter Email"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control
                      className={Styles.formcontrol}
                      type="text"
                      placeholder="Enter Account Number"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      className={Styles.formcontrol}
                      type="text"
                      placeholder="Enter Account Number"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Bank</Form.Label>
                    <Form.Control
                      className={Styles.formcontrol}
                      type="text"
                      placeholder="Enter Bank Name"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button className={Styles.submitbutton} type="submit">
                Create
              </Button>
            </Form>
          </Col>
        </Row>

        <VendorTable />
      </div>
    </>
  );
}

export default Vendor;
