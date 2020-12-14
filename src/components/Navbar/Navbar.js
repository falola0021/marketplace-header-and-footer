import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Styles from "./Navbar.module.css";

import {
  Avatar,
  Stack,
  ThemeProvider,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
  Switch,
} from "@chakra-ui/core";
import kassandah from "../../pages/assets/kassandahwhite.png";
// import kassandahmobile from "../../pages/assets/kassandah.svg";
import AuthService from "../../services/auth.service";
import DepartmentDataService from "../../services/department.service";

function Navigation({
  handleprofileclick,
  handledashboardclick,
  handleSwitchUser,
  switchUser,
  setSwitchUser,
}) {
  const currentUser = AuthService.getCurrentUser();
  const initialName = `${currentUser.firstName} ${currentUser.lastName}`;
  const logOut = () => {
    AuthService.logout();
  };
  const userRole = currentUser.roles;
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

  //for hiding swutch

  return (
    <>
      <Navbar className={Styles.navbackground} expand="lg">
        <Navbar.Brand href="#home" onClick={handledashboardclick}>
          <img
            src={kassandah}
            alt="logo"
            style={{ width: "200px", height: "40px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"> </Nav>
          {userRole.includes("approver") ? (
            <div className={Styles.switchuser}>
              <ThemeProvider>
                <div className={Styles.switch}>
                  <div>
                    {switchUser ? (
                      <span>Switch to approver</span>
                    ) : (
                      <span>Switch to requester</span>
                    )}
                  </div>{" "}
                  <Switch onChange={handleSwitchUser} size="sm" />
                </div>
              </ThemeProvider>
            </div>
          ) : (
            ""
          )}

          <Nav.Link className={Styles.desktopName} onClick={handleprofileclick}>
            <i className="fa fa-bell "> </i>
            <span style={{ color: "#ffffff", padding: "0 10px" }}>
              Hi {currentUser.firstName} ({department ? department.name : ""})
            </span>
          </Nav.Link>
          <div className={Styles.mobileName}>
            <span style={{ color: "#ffffff" }}>
              Hi {currentUser.firstName} ({department ? department.name : ""})
            </span>{" "}
            <i style={{ color: "#ffffff" }} className="fa fa-bell mr-4 ">
              {" "}
            </i>
          </div>

          <ThemeProvider>
            <Stack>
              <Avatar
                style={{ cursor: "pointer" }}
                onClick={handleprofileclick}
                size="sm"
                className={Styles.avatar}
                name={initialName}
                src="https://bit.ly/tioluwani-kolawole"
              />
            </Stack>
            <Nav.Link className={Styles.logout} href="/" onClick={logOut}>
              <span style={{ color: "#ffffff", padding: "0 10px" }}>
                <i className="fa fa-sign-out-alt "></i>
              </span>
            </Nav.Link>
            {/* 
            <div className={Styles.desktopmenu}>
              <Menu>
                <MenuButton
                  className={Styles.chevron}
                  as={Button}
                  rightIcon="chevron-down"
                ></MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={handleprofileclick}
                    className={Styles.menulist}
                  >
                    Profile
                  </MenuItem>
                  <a href="/" onClick={logOut}>
                    <MenuItem className={Styles.menulist}>Log-out</MenuItem>
                  </a>
                </MenuList>
              </Menu>
            </div> */}
          </ThemeProvider>
          <div className={Styles.mobilemenu}>
            <Nav.Link className={Styles.link} onClick={handleprofileclick}>
              Profile
            </Nav.Link>
            <Nav.Link className={Styles.link} href="/" onClick={logOut}>
              Logout
            </Nav.Link>
            {/* <Nav.Link className={Styles.link} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={Styles.link} href="#link">
              Link
            </Nav.Link>
            <Nav.Link className={Styles.link} href="#home">
              Home
            </Nav.Link> */}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
