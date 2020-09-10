import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Styles from "./LandingPage.module.css";
import landingPageImage from "../assets/landingPageImage.png";
import { Link } from "react-router-dom";

function LandingPage({ onClick }) {
  const [formInputs, setFormInputs] = useState({
    loginInputs: true,
    RegisterInputs: false,
  });

  const registerSwitch = () =>
    setFormInputs({
      loginInputs: false,
      registerInputs: true,
    });

  const active = `${Styles.active}`;

  const loginSwitch = () =>
    setFormInputs({
      loginInputs: true,
      registerInputs: false,
    });

  return (
    <>
      <Row>
        <Col sm="7">
          <div className={Styles.layout1}>
            <Link className="link" to="/">
              <div className={Styles.title}>GIG Payflow</div>
            </Link>
            <img src={landingPageImage} alt="logo" />
          </div>
        </Col>
        <Col sm="5">
          <div className={Styles.mobileimage}>
            <Link className="link" to="/">
              <div className={Styles.mobiletitle}>GIG Payflow</div>
            </Link>
            <div className={Styles.layout2}>
              <Form className={Styles.form}>
                <div className={Styles.loginregister}>
                  <Button
                    className={formInputs.loginInputs ? active : ""}
                    onClick={loginSwitch}
                  >
                    Login
                  </Button>

                  <Button
                    className={formInputs.registerInputs ? active : ""}
                    onClick={registerSwitch}
                  >
                    Register
                  </Button>
                </div>
                {formInputs.registerInputs && (
                  <Form.Group>
                    <Form.Label className={Styles.label}>Full Name</Form.Label>
                    <Form.Control
                      className={Styles.formcontrol}
                      type="text"
                      placeholder="Enter Full Name"
                    />
                  </Form.Group>
                )}
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
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className={Styles.label}>Password</Form.Label>
                  <Form.Control
                    className={Styles.formcontrol}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                {formInputs.loginInputs && (
                  <div className={Styles.belowinput}>
                    <div className={Styles.checkboxes}>
                      <label for="check">
                        <input type="checkbox" id="check" />{" "}
                        <span>Remrmber me</span>
                      </label>
                    </div>
                    <Link className="link" to="/change-password">
                      <div className={Styles.forgotpas}>Forgot password ?</div>
                    </Link>
                  </div>
                )}
                {formInputs.loginInputs && (
                  <Link className="link" to="user-dashboard">
                    <Button className={Styles.submit} type="submit">
                      Login
                    </Button>
                  </Link>
                )}
                {formInputs.registerInputs && (
                  <Link className="link" to="user-dashboard">
                    <Button className={Styles.submit} type="submit">
                      Register
                    </Button>
                  </Link>
                )}
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default LandingPage;
