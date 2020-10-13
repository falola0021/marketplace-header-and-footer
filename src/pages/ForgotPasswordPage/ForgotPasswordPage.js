import React, { useState, useRef } from "react";
import {  Button, Row, Col } from "react-bootstrap";
import Styles from "./ForgotPasswordPage.module.css";
import forgotPasswordPageImage from "../assets/forgotPasswordImage.png";
import { Link } from "react-router-dom";
import kassandah from "../assets/kassandah.PNG";
import kassandahmobile from "../assets/kassandahmobilepurple.png";
import PasswordDataService from "../../services/forgotpassword.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";







const ForgotPasswordPage = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("")
   const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
 
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
       setMessage("");
    setSuccessful(false);
   
    if (checkBtn.current.context._errors.length === 0) {
      PasswordDataService.forgotpassword(email).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };
  return (
    <div>
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
           
              <div  ref={form} className={Styles.form}>
                <div className={Styles.forgotheading}>
                  <i className="fa fa-arrow-left pr-2"> </i>
                  <span className={Styles.forgotheadtitle}>
                    Forgot Password
                  </span>
                </div>

                <div className={Styles.subtitle}>
                  Enter your Email address for password recovery
                </div>
                {!successful && (
                  <Form onSubmit={handleChangePassword} ref={form} >
           
                  <label className={Styles.label}>
                    Email address
                  </label>
                  <Input
              style={{
                border: " 1px solid #4f26aa",
                backgroundColor: "rgba(59, 122, 254, 0.02)",
              }}
              required
              placeholder="Enter Email"
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={onChangeEmail}
        
            />
                
                {loading && (
            <span className="spinner-border spinner-border-sm"></span>
          )}
                <Button className={Styles.submit} type="submit">
                  Reset Password
                </Button>
              
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
                
              </Form>
              )}
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
            </div>
               
          </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ForgotPasswordPage;
