import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Styles from "./LandingPage.module.css";
import landingPageImage from "../assets/landingPageImage.png";
import kassandah from "../assets/kassandah.PNG";
import kassandahmobile from "../assets/kassandahmobilepurple.png";
import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import RegistrationForm from "../../components/Forms/RegistrationForm/RegistrationForm";

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
              <div className={Styles.title}>
                <img
                  src={kassandah}
                  alt="logo"
                  style={{ width: "200px", height: "50px" }}
                />
              </div>
            </Link>
            <img src={landingPageImage} alt="logo" />
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

              {formInputs.registerInputs && <RegistrationForm />}
              {formInputs.loginInputs && <LoginForm />}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default LandingPage;
