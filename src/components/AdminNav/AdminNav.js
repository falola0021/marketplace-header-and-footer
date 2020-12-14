import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Styles from "./AdminNav.module.css";
import { Avatar, Stack, ThemeProvider } from "@chakra-ui/core";
import kassandah from "../../pages/assets/kassandahwhite.png";
// import kassandahmobile from "../../pages/assets/kassandah.svg";
import AuthService from "../../services/auth.service";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions/auth";
import DepartmentDataService from "../../services/department.service";

import { useSelector } from "react-redux";

function Navigation({ showProfile }) {
  const dispatch = useDispatch();
  const currentUser = AuthService.getCurrentUser();

  const logOut = () => {
    dispatch(logout());
  };

  const initialName = `${currentUser.firstName} ${currentUser.lastName}`;

  const [department, setDepartment] = React.useState("");

  const getDepartment = (e) => {
    DepartmentDataService.get(currentUser.department)
      .then((response) => {
        setDepartment(response.data.data);
      })
      .catch((e) => {
        console.log("the ee", e.response);
      });
  };

  useEffect(() => {
    getDepartment();
  }, []);

  return (
    <>
      <Navbar className={Styles.navbackground} expand="lg">
        <Navbar.Brand href="/">
          <img
            src={kassandah}
            alt="logo"
            style={{ width: "200px", height: "40px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav.Link href="#link">
            <i className="fa fa-bell "></i>
            <span
              onClick={showProfile}
              style={{ color: "#ffffff", padding: "0 10px" }}
            >
              Hi {currentUser.roles[0]} ({department ? department.name : ""})
            </span>
          </Nav.Link>

          <ThemeProvider>
            <Stack>
              <Avatar
                style={{ cursor: "pointer" }}
                onClick={showProfile}
                size="sm"
                className={Styles.avatar}
                name={initialName}
                src="https://bit.ly/tioluwani-kolawole"
              />
            </Stack>
            <div className={Styles.desktopmenu}></div>
          </ThemeProvider>
          <Nav.Link href="/" onClick={logOut}>
            <span
              onClick={showProfile}
              style={{ color: "#ffffff", padding: "0 10px" }}
            >
              <i className="fa fa-sign-out-alt "></i>
            </span>
          </Nav.Link>
          <div className={Styles.mobilemenu}>
            <Nav.Link className={Styles.link} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={Styles.link} href="#link">
              Link
            </Nav.Link>
            <Nav.Link className={Styles.link} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={Styles.link} href="#link">
              Link
            </Nav.Link>
            <Nav.Link className={Styles.link} href="#home">
              Home
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
