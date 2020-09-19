import React, { useState } from "react";
import Overview from "./Overview/Overview";
import UserManangement from "./UserManagement/UserManagement";

import {
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  NavDropdown,
  Navbar,
  Nav,
  Button,
  Dropdown,
} from "react-bootstrap";
import Styles from "./Admin.module.css";

function Admin() {
  const [changeView, setChangeView] = useState({
    overview: true,
    usermanagement: false,
    requestflow: false,
    request: false,
    settings: false,
  });

  const active = `${Styles.sidebaractive}`;
  const inactive = `${Styles.sidebarinactive}`;

  return (
    <>
      <div className={Styles.body}>
        <div className={Styles.sec1}>
          <div className={Styles.layout1}>
            <Row className={Styles.desktopnav}>
              <Col sm="2">
                <div className={Styles.title}>KASSANDAH</div>
              </Col>
              <Col sm="7">
                <Form className={Styles.searchform}>
                  <InputGroup inline>
                    <FormControl
                      className={Styles.formcontrol}
                      size="lg"
                      inline
                      type="text"
                      placeholder="Search By Item name"
                    />
                    <InputGroup.Prepend className={Styles.searchicon}>
                      <Button
                        size="lg"
                        type="submit"
                        className="fa fa-search"
                      ></Button>
                    </InputGroup.Prepend>
                  </InputGroup>
                </Form>
              </Col>

              <Col className={Styles.col2} sm="3">
                <i className="far fa-bell headingicon"></i>
                <i className="fa fa-sign-out-alt headingicon"></i>
                <i className={Styles.initials}>IA</i>
                <i className={Styles.name}>Anayo Adeolu</i>
                <Dropdown>
                  <Dropdown.Toggle
                    className={Styles.toggle}
                    variant="none"
                  ></Dropdown.Toggle>

                  <Dropdown.Menu className={Styles.menu}>
                    <Dropdown.Item className={Styles.menu} href="#/action-1">
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item className={Styles.menu} href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item className={Styles.menu} href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </div>
        </div>

        <Row>
          <Col sm="2" className="p-0">
            <div className={Styles.sidebarcontainer}>
              <div className={Styles.sidebarmenu}>
                <div
                  onClick={() => {
                    setChangeView({
                      overview: true,
                      usermanagement: false,
                      requestflow: false,
                      request: false,
                      settings: false,
                    });
                  }}
                  className={changeView.overview ? active : inactive}
                >
                  <div className="fa fa-qrcode"> </div>
                  <span>Overview</span>
                </div>
                <div
                  onClick={() => {
                    setChangeView({
                      overview: false,
                      usermanagement: true,
                      requestflow: false,
                      request: false,
                      settings: false,
                    });
                  }}
                  className={changeView.usermanagement ? active : inactive}
                >
                  <div className="fa fa-user"> </div>{" "}
                  <span>User Management</span>
                </div>{" "}
                <div className={changeView.requestflow ? active : inactive}>
                  <div className="fas fa-sync-alt"> </div>{" "}
                  <span>Request Flow</span>
                </div>
                <div className={changeView.request ? active : inactive}>
                  <div className="fa fa-table"></div> <span>Request</span>
                </div>
                <div className={changeView.settings ? active : inactive}>
                  <div className="fa fa-cog"> </div> <span>Settings</span>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            {changeView.overview && (
              <div className={Styles.overviewbody}>
                <Overview />
              </div>
            )}
            {changeView.usermanagement && (
              <div className={Styles.overviewbody}>
                <UserManangement />
              </div>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Admin;
