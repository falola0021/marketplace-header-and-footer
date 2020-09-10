import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Styles from "./UpdatePasswordPage.module.css";
import forgotPasswordPageImage from "../assets/forgotPasswordImage.png";
import { Link } from "react-router-dom";

function UpdatePasswordPage() {
  return (
    <>
      <Row>
        <Col sm="7">
          <div className={Styles.layout1}>
            <Link className="link" to="/">
              <div className={Styles.title}>GIG Payflow</div>
            </Link>
            <img src={forgotPasswordPageImage} alt="logo" />
          </div>
        </Col>
        <Col sm="5">
          <div className={Styles.mobileimage}>
            <Link className="link" to="/">
              <div className={Styles.mobiletitle}>GIG Payflow</div>
            </Link>
            <div className={Styles.layout2}>
              <Form className={Styles.form}>
                <div className={Styles.forgotheading}>
                  <i className="fa fa-arrow-left pr-2"> </i>
                  <span className={Styles.forgotheadtitle}>
                    Update Password
                  </span>
                </div>

                <div className={Styles.subtitle}>
                  Enter your prefered new password
                </div>

                <Form.Group>
                  <Form.Label className={Styles.label}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    className={Styles.formcontrol}
                    type="password"
                    placeholder="Enter New Password"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className={Styles.label}>
                    Confirm New Password
                  </Form.Label>
                  <Form.Control
                    className={Styles.formcontrol}
                    type="password"
                    placeholder="Confirm New Password"
                  />
                </Form.Group>

                <Button className={Styles.submit} type="submit">
                  Update Password
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default UpdatePasswordPage;
