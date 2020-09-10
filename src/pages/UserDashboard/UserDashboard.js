import React from "react";
import {
  Row,
  Col,
  Container,
  Form,
  InputGroup,
  FormControl,
  Button,
  Modal,
  NavDropdown,
  Navbar,
  Nav,
  Dropdown,
} from "react-bootstrap";
import Styles from "./UserDashboard.module.css";
import UserTable from "./UserTable";
import MakeRequest from "./MakeRequest/MakeRequest";

function UserDashboard() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className={Styles.body}>
        <div className={Styles.sec1}>
          <div className={Styles.mobilenav}>
            <Navbar bg="transparent" expand="lg">
              <Navbar.Brand href="#home">
                {" "}
                <div className={Styles.titlemobile}>GIG Payflow</div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">
                    {" "}
                    <i className="far fa-bell headingicon"></i>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    {" "}
                    <i className={Styles.name}>Anayo Adeolu</i>
                  </Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">
                    {" "}
                    <i className={Styles.name}>Logout</i>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className={Styles.layout1}>
            <Row className={Styles.desktopnav}>
              <Col sm="9">
                <div className={Styles.title}>GIG Payflow</div>
              </Col>
              <Col className={Styles.col2} sm="3">
                <i className="far fa-bell headingicon"></i>
                <i className="fa fa-sign-out-alt headingicon"></i>
                <i className={Styles.initials}>IA</i>
                <i className={Styles.name}>Anayo Adeolu</i>
                {/* <i className="fa fa-chevron-down headingicon"> */}
                <Dropdown>
                  <Dropdown.Toggle
                    className={Styles.toggle}
                    // variant="light"
                  ></Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* </i> */}
              </Col>
            </Row>
            <Container className={Styles.container}>
              <Row className={Styles.row}>
                <Col className={Styles.headtabs} sm="3">
                  <div>All</div>
                  <div>Approval</div>
                  <div>Pending</div>
                  <div>Denied</div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Container className={Styles.container}>
          <div className={Styles.sec2}>
            <div onClick={() => setModalShow(true)} className={Styles.plusicon}>
              <i className="fa fa-plus"></i>
            </div>
            <div className={Styles.secheading}>
              <div className={Styles.searchfilter}>
                <span className={Styles.filterbox}>
                  <i className="fa filtericon fa-filter">
                    <span className="pl-2">Filter</span>
                  </i>
                </span>{" "}
                <Form inline>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text className={Styles.searchicon}>
                        <i className="fa fa-search"></i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className={Styles.searchinput}
                      placeholder="Search requisition by Name, Amount, Dat"
                    />
                  </InputGroup>
                </Form>
              </div>

              <div>
                <Button
                  onClick={() => setModalShow(true)}
                  className={Styles.request}
                >
                  Make a Request
                </Button>
              </div>
            </div>

            <UserTable />
          </div>

          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            centered
          >
            <Modal.Header closeButton style={{ border: "0" }}></Modal.Header>
            <Modal.Body>
              <div className={Styles.modalbox}>
                <MakeRequest />
              </div>
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    </>
  );
}

export default UserDashboard;
