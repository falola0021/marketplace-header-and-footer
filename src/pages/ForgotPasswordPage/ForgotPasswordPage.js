import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Styles from "./ForgotPasswordPage.module.css";
import forgotPasswordPageImage from "../assets/forgotPasswordImage.png";
import { Link } from "react-router-dom";
import kassandah from "../assets/kassandah.PNG";
import kassandahmobile from "../assets/kassandahmobilepurple.png";

function ForgotPasswordPage() {
  return (
    <>
      <Row>
        <Col sm="7">
          <div className={Styles.layout1}>
            <Link className="link" to="/">
              <div className={Styles.title}>
                {" "}
                <img
                  src={kassandah}
                  alt="logo"
                  style={{ width: "200px", height: "50px" }}
                />
              </div>
            </Link>
            <img src={forgotPasswordPageImage} alt="logo" />
          </div>
        </Col>
        <Col sm="5">
          <div className={Styles.mobileimage}>
            <Link className="link" to="/">
              <div className={Styles.mobiletitle}>
                {" "}
                <img
                  src={kassandahmobile}
                  alt="logo"
                  style={{ width: "50px", height: "70px" }}
                />
              </div>
            </Link>
            <div className={Styles.layout2}>
              <Form className={Styles.form}>
                <div className={Styles.forgotheading}>
                  <i className="fa fa-arrow-left pr-2"> </i>
                  <span className={Styles.forgotheadtitle}>
                    Forgot Password
                  </span>
                </div>

                <div className={Styles.subtitle}>
                  Enter your Email address for password recovery
                </div>

                <Form.Group>
                  <Form.Label className={Styles.label}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    className={Styles.formcontrol}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Button className={Styles.submit} type="submit">
                  Reset Password
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ForgotPasswordPage;
