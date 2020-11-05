import React from "react";
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

function Navigation({
  handleprofileclick,
  handledashboardclick,
  handleSwitchUser,
}) {
  const currentUser = AuthService.getCurrentUser();
  const initialName = `${currentUser.firstName} ${currentUser.lastName}`;
  console.log(currentUser);
  const logOut = () => {
    AuthService.logout();
  };
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
          <div>
            <ThemeProvider>
              <div className={Styles.switch}>
                <div>Switch Role</div>{" "}
                <Switch onChange={handleSwitchUser} size="sm" />
              </div>
            </ThemeProvider>
          </div>

          <Nav.Link href="#link">
            <i className="fa fa-bell "> </i>
            <span style={{ color: "#ffffff", padding: "0 10px" }}>
              Hi {currentUser.firstName}{" "}
            </span>
            {/* <span style={{ color: "#ffffff" }}>Role : {currentUser.roles}</span> */}
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
            </div>
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
