import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { login } from "../../../redux/actions/authActions/auth";

import Styles from "./LoginForm.module.css";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div
        style={{ fontSize: "12px", padding: "0" }}
        className="alert alert-danger"
        role="alert"
      >
        This field is required!
      </div>
    );
  }
};
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div
        style={{ fontSize: "12px", padding: "0" }}
        className="alert alert-danger"
        role="alert"
      >
        This is not a valid email.
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  const { message } = useSelector((state) => state.messageReducer);

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    form.current.validateAll();
    setLoading(true);

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then((response) => {
          setLoading(false);
          setSuccessful(true);
          window.location.reload();
        })
        .catch((error) => {
          setLoading(false);

          setSuccessful(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/user" />;
  }

  return (
    <Form onSubmit={handleLogin} ref={form} className={Styles.form}>
      <div className="form-group">
        <label htmlFor="username" className={Styles.label}>
          Email
        </label>
        <Input
          style={{
            border: " 1px solid #4f26aa",
            backgroundColor: "rgba(59, 122, 254, 0.02)",
          }}
          placeholder="Enter Email"
          type="text"
          className="form-control"
          name="email"
          value={email}
          onChange={onChangeEmail}
          validations={[required, validEmail]}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className={Styles.label}>
          Password
        </label>
        <Input
          style={{
            border: " 1px solid #4f26aa",
            backgroundColor: "rgba(59, 122, 254, 0.02)",
          }}
          placeholder="Enter Password"
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={onChangePassword}
          validations={[required]}
        />
      </div>

      {message && (
        <div className="form-group">
          <div
            style={{ fontSize: "12px", padding: "0 3px" }}
            className="alert alert-danger"
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
      <div className="form-group">
        <button
          style={{
            backgroundColor: "#4f26aa",
            color: "#ffffff",
          }}
          className="btn  btn-block"
          disabled={loading}
        >
          <span className={Styles.alignLoader}>
            {" "}
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span className="pl-2">Submit</span>
          </span>
        </button>
        <Link className="link" to="/change-password">
          <div className={Styles.forgotpas}>Forgot Password ?</div>
        </Link>
      </div>

      <CheckButton style={{ display: "none" }} ref={checkBtn} />
    </Form>
  );
};
export default withRouter(Login);
