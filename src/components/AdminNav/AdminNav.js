import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Styles from "./AdminNav.module.css";
import { Avatar, Stack, ThemeProvider } from "@chakra-ui/core";
import kassandah from "../../pages/assets/kassandahwhite.png";
// import kassandahmobile from "../../pages/assets/kassandah.svg";
import AuthService from "../../services/auth.service";

function Navigation() {
  const currentUser = AuthService.getCurrentUser();

  const initialName = `${currentUser.firstName} ${currentUser.lastName}`;
  return (
    <>
      <Navbar className={Styles.navbackground} expand="lg">
        <Navbar.Brand href="#home">
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
            <span style={{ color: "#ffffff", padding: "0 10px" }}>
              Hi {currentUser.roles[0]}{" "}
            </span>
          </Nav.Link>

          <ThemeProvider>
            <Stack>
              <Avatar
                size="sm"
                className={Styles.avatar}
                name={initialName}
                src="https://bit.ly/tioluwani-kolawole"
              />
            </Stack>
            <div className={Styles.desktopmenu}></div>
          </ThemeProvider>
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
