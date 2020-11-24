import React, { useState, useRef } from "react";
import Form1 from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import { isEmail } from "validator";
import CheckButton from "react-validation/build/button";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../../../redux/actions/vendorActions/vendor";
import VendorDataService from "../../../services/vendor.service";
import * as vendorActions from "../../../redux/actions/vendorActions/vendorActions";

import Styles from "./Vendor.module.css";
import { Row, Col, Form } from "react-bootstrap";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vname = (value) => {
  if (value.length < 3) {
    return (
      <div className="alert alert-danger" role="alert">
        The name of vendor cannot be less than 3 characters.
      </div>
    );
  }
};

const vaddress = (value) => {
  if (value.length < 3) {
    return (
      <div className="alert alert-danger" role="alert">
        input a valid address details.
      </div>
    );
  }
};

const vphone = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The phone must be valid with 11 digits .
      </div>
    );
  }
};
const vstatus = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Status must be selected
      </div>
    );
  }
};
const vaccountName = (value) => {
  if (value.length < 3 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Input a valid Account name .
      </div>
    );
  }
};
const vaccountNumber = (value) => {
  if (value.length < 10 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Input a valid Account number .
      </div>
    );
  }
};
const vemail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vbank = (value) => {
  if (value.length < 3 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Input a valid bank name.
      </div>
    );
  }
};

function Vendor({ closeDrawer }) {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bank, setBank] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [isVerified, setIsVerified] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.messageReducer);

  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeAccountName = (e) => {
    const accountName = e.target.value;
    setAccountName(accountName);
  };
  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };
  const onChangeState = (e) => {
    const state = e.target.value;
    setState(state);
  };
  const onChangeCity = (e) => {
    const city = e.target.value;
    setCity(city);
  };

  const onChangeBank = (e) => {
    const bank = e.target.value;
    setBank(bank);
  };
  const onChangeAccountNumber = (e) => {
    const accountNumber = e.target.value;
    setAccountNumber(accountNumber);
  };

  const onChangeIsVerified = (e) => {
    const isVerified = e.target.value;
    setIsVerified(isVerified);
  };

  const handleCreateVendor = (e) => {
    e.preventDefault();

    setSuccessful(false);
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(
        create(
          name,
          address,
          city,
          state,
          email,
          phone,
          bank,
          accountName,
          accountNumber,
          isVerified.toString
        )
      )
        .then((response) => {
          setSuccessful(true);
          VendorDataService.getAll()
            .then((response) => {
              dispatch({
                type: vendorActions.GET_VENDOR_SUCCESS,
                payload: response.data.data,
              });
              console.log(response);
            })
            .catch((e) => {
              console.log(e);
              setLoading(false);
            });
          setLoading(false);

          setTimeout(function () {
            closeDrawer();
          }, 1000);
        })
        .catch(() => {
          setSuccessful(false);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <Row>
        <Col>
          <div className={Styles.heading}>Create A Vendor</div>
          <Form1
            onSubmit={handleCreateVendor}
            ref={form}
            className={Styles.form}
          >
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Company Name</Form.Label>
                  <Input
                    style={{
                      border: " 1px solid  #f3f3f3",
                      backgroundColor: "rgba(59, 122, 254, 0.02)",
                      width: "100%",
                      padding: "6px 10px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="text"
                    placeholder="Enter Vendor Name"
                    name="name"
                    value={name}
                    onChange={onChangeName}
                    validations={[required, vname]}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Input
                    style={{
                      border: " 1px solid #f3f3f3",
                      backgroundColor: "rgba(59, 122, 254, 0.02)",
                      width: "100%",
                      padding: "6px 10px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="number"
                    placeholder="Enter Phone Number"
                    name="phone"
                    value={phone}
                    onChange={onChangePhone}
                    validations={[required, vphone]}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Input
                    style={{
                      border: " 1px solid #f3f3f3",
                      backgroundColor: "rgba(59, 122, 254, 0.02)",
                      width: "100%",
                      padding: "6px 10px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="email"
                    placeholder="Enter Vendor Name"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, vemail]}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Company Address</Form.Label>
                  <Input
                    style={{
                      border: " 1px solid #f3f3f3",
                      backgroundColor: "rgba(59, 122, 254, 0.02)",
                      width: "100%",
                      padding: "6px 10px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="text"
                    placeholder="Enter Vendor Address"
                    name="address"
                    value={address}
                    onChange={onChangeAddress}
                    validations={[required, vaddress]}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Input
                    style={{
                      border: " 1px solid #f3f3f3",
                      backgroundColor: "rgba(59, 122, 254, 0.02)",
                      width: "100%",
                      padding: "6px 10px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="text"
                    placeholder="Enter Vendor city"
                    name="city"
                    value={city}
                    onChange={onChangeCity}
                    validations={[required]}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Select
                    style={{
                      border: " 1px solid #f3f3f3",
                      backgroundColor: "rgba(59, 122, 254, 0.02)",
                      width: "100%",
                      padding: "6px 10px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="text"
                    name="state"
                    value={state}
                    onChange={onChangeState}
                    validations={[required]}
                    className={Styles.formcontrol}
                    as="select"
                  >
                    <option value="">- Select State -</option>
                    <option value="Abuja FCT">Abuja FCT</option>
                    <option value="Abia">Abia</option>
                    <option value="Adamawa">Adamawa</option>
                    <option value="Akwa Ibom">Akwa Ibom</option>
                    <option value="Anambra">Anambra</option>
                    <option value="Bauchi">Bauchi</option>
                    <option value="Bayelsa">Bayelsa</option>
                    <option value="Benue">Benue</option>
                    <option value="Borno">Borno</option>
                    <option value="Cross River">Cross River</option>
                    <option value="Delta">Delta</option>
                    <option value="Ebonyi">Ebonyi</option>
                    <option value="Edo">Edo</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Gombe">Gombe</option>
                    <option value="Imo">Imo</option>
                    <option value="Jigawa">Jigawa</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Katsina">Katsina</option>
                    <option value="Kebbi">Kebbi</option>
                    <option value="Kogi">Kogi</option>
                    <option value="Kwara">Kwara</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Nassarawa">Nassarawa</option>
                    <option value="Niger">Niger</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Osun">Osun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Sokoto">Sokoto</option>
                    <option value="Taraba">Taraba</option>
                    <option value="Yobe">Yobe</option>
                    <option value="Zamfara">Zamfara</option>
                    <option value="Outside Nigeria">Outside Nigeria</option>
                  </Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Bank</Form.Label>
                  <Input
                    style={{
                      border: " 1px solid #f3f3f3",
                      backgroundColor: "rgba(59, 122, 254, 0.02)",
                      width: "100%",
                      padding: "6px 10px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="text"
                    placeholder="Enter Bank Name"
                    name="bank"
                    value={bank}
                    onChange={onChangeBank}
                    validations={[required, vbank]}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Account Name</Form.Label>
                  <Input
                    style={{
                      border: " 1px solid #f3f3f3",
                      backgroundColor: "rgba(59, 122, 254, 0.02)",
                      width: "100%",
                      padding: "6px 10px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="text"
                    placeholder="Enter Account Name"
                    name="accountName"
                    value={accountName}
                    onChange={onChangeAccountName}
                    validations={[required, vaccountName]}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Account Number</Form.Label>
                  <Input
                    style={{
                      border: " 1px solid #f3f3f3",
                      backgroundColor: "rgba(59, 122, 254, 0.02)",
                      width: "100%",
                      padding: "6px 10px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="number"
                    placeholder="Enter Account Number"
                    name="accountNumber"
                    value={accountNumber}
                    onChange={onChangeAccountNumber}
                    validations={[required, vaccountNumber]}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Select
                    style={{
                      border: " 1px solid #f3f3f3",
                      backgroundColor: "rgba(59, 122, 254, 0.02)",
                      width: "100%",
                      padding: "6px 10px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="text"
                    name="isVerified"
                    value={isVerified}
                    onChange={onChangeIsVerified}
                    validations={[required]}
                    className={Styles.formcontrol}
                    as="select"
                  >
                    <option value="">- Select Status -</option>
                    <option value="true">Verified</option>
                    <option value="false">Not Verified</option>
                  </Select>
                </Form.Group>
              </Col>
            </Row>

            <span>
              <button
                style={{
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  borderRadius: "3px",
                  color: "#ffffff",
                  border: " 1px solid #cdd0d3",
                  outline: "none",
                }}
                className={Styles.submitbutton}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                Submit
              </button>
            </span>
            {successful && (
              <span>
                {message && (
                  <div className="form-group">
                    <div
                      className={
                        successful
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
                      {message}
                    </div>
                  </div>
                )}
              </span>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form1>
        </Col>
      </Row>
    </>
  );
}

export default Vendor;
