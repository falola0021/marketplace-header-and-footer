import React, { useState, useRef,useEffect } from "react";
import Styles from "../../pages/Admin/UserManagement/UserManagement.module.css";
import { Row, Col,  Form } from "react-bootstrap";
import Form1 from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import RoleDataService from "../../services/role.service";
import UserDataService from "../../services/user.service";
import { isEmail } from "validator";



const vemail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vfirstname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The firstname must be atleast 3 characters.
      </div>
    );
  }
};

const vlastname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The lastnmae must must be atleast 3 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
       Password must be atleast 6 characters.
      </div>
    );
  }
};

// const vrole = (value) => {
//     if (value.length < 6 || value.length > 40) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           The password must be atleast 6  characters.
//         </div>
//       );
//     }
//   };


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const User = (props) => {


const form = useRef();
const checkBtn = useRef();
const [loading, setLoading] = useState(false);
const [successful, setSuccessful] = useState(false);
const [message, setMessage] = useState("");

//create users

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("");

const onChangeFirstName = (e) => {
  const firstName = e.target.value;
  setFirstName(firstName);
};
const onChangeLastName= (e) => {
  const lastName = e.target.value;
  setLastName(lastName);
};

const onChangeEmail= (e) => {
  const email = e.target.value;
  setEmail(email);
};
const onChangePassword= (e) => {
  const password = e.target.value;
  setPassword(password);
};
const onChangeRole= (e) => {
    const role = e.target.value;
    setRole(role);
  };
  

const handleCreateUser = (e) => {
  e.preventDefault();
console.log("got here")
  setMessage("");
  setSuccessful(false);

  form.current.validateAll();

  if (checkBtn.current.context._errors.length === 0) {
    UserDataService.create(firstName, lastName, email, password,role).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        
      },
      (error) => {
        console.log(error);
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



  //get all users
  // const [roles, setRoles] = useState([]);
  
  // const retrieveRoles = () => {
  // RoleDataService.getAll()
  //     .then(response => {
  //       setRoles(response.data.data);
  //       console.log("this are the rolesa");
  //       console.log(response.data.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  //   };

    //create users
  
    //get all roles
  const [roles, setRoles] = useState([]);
  
  const retrieveRoles = () => {
  RoleDataService.getAll()
      .then(response => {
        setRoles(response.data.data);
        console.log("this are the rolesa");
        console.log(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
    };

    useEffect(() => {
      retrieveRoles();
    }, []);
    

    

  return (
    <>
            <div className={Styles.heading}>Create User</div>
            <Form1
              onSubmit={handleCreateUser}
              ref={form}
              className={Styles.form}>
              <Row>
                <Col>
                  <Form.Group >
                    <Form.Label>First Name</Form.Label>
                    <Input
                      style={{
                        border: " 1px solid #cdd0d3",
                        backgroundColor: "rgba(59, 122, 254, 0.02)",
                        width: "100%",
                        padding: "6px 10px",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                      placeholder="Enter Role Title"
                      type="text"
                      // className={Styles.formcontrol}
                      name="firstName"
                      value={firstName}
                      onChange={onChangeFirstName}
                      validations={[required, vfirstname]}
                    />
                  </Form.Group>
                  <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Input
                      style={{
                        border: " 1px solid #cdd0d3",
                        backgroundColor: "rgba(59, 122, 254, 0.02)",
                        width: "100%",
                        padding: "6px 10px",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                      placeholder="Enter Email"
                      type="email"
                      // className={Styles.formcontrol}
                      name="email"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required, vemail]}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Select Role</Form.Label>
                    <Form.Control
                     name="role"
                     value={role}
                     required
                     onChange={onChangeRole}
                     validations={[required]}
                    className={Styles.formcontrol} as="select">
                        {roles &&
                    roles.map((role) => (
                      <option key={role._id}>{role.role}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
              
                </Col>
                <Col>
                <Form.Group >
                    <Form.Label>Last Name</Form.Label>
                    <Input
                      style={{
                        border: " 1px solid #cdd0d3",
                        backgroundColor: "rgba(59, 122, 254, 0.02)",
                        width: "100%",
                        padding: "6px 10px",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                      placeholder="Enter Role Title"
                      type="text"
                      // className={Styles.formcontrol}
                      name="lastName"
                      value={lastName}
                      onChange={onChangeLastName}
                      validations={[required, vlastname]}
                    />
                  </Form.Group>
                  

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Input
                      style={{
                        border: " 1px solid #cdd0d3",
                        backgroundColor: "rgba(59, 122, 254, 0.02)",
                        width: "100%",
                        padding: "6px 10px",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                      placeholder="Enter Password"
                      type="password"
                      // className={Styles.formcontrol}
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required, vpassword]}
                    />
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
            <span  className="spinner-border spinner-border-sm"></span>
          )}
                      Create User
                    </button>
                  </span>
            
              {/* )} */}
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
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form1>
          
   
    </>
  );
};

export default User;
