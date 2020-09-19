import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  FormControl,
  NavDropdown,
  Navbar,
  Nav,
  Button,
  Dropdown,
  FormGroup,
  InputGroup,
  Modal,
  Card,
} from "react-bootstrap";
import Styles from "./Requester.module.css";
import RequesterTable from "./RequesterTable";
import MakeRequest from "./MakeRequest/MakeRequest";
import { Spring, Transition, animated } from "react-spring/renderprops";
import PreviewRequest from "./PreviewRequest/PreviewRequest";

function Requester() {
  const [modalShow, setModalShow] = React.useState(false);
  const [preview, setPreview] = useState(true);
  const handlePreview = () => setPreview(!preview);

  const [previewShow, setPreviewShow] = React.useState(false);
  const handlePreviewShow = () => {
    setPreviewShow(!previewShow);
  };
  return (
    <>
      <div className={Styles.body}>
        <div className={Styles.sec1}>
          <div className={Styles.mobilenav}>
            <Navbar bg="transparent" expand="lg">
              <Navbar.Brand href="#home">
                {" "}
                <div className={Styles.titlemobile}>KASSANDAH</div>
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
              <Col sm="2">
                <div className={Styles.title}>KASSANDAH</div>
              </Col>
              <Col sm="2"></Col>
              <Col sm="3">
                <Form>
                  <InputGroup inline>
                    <FormControl
                      className={Styles.formcontrol}
                      size="lg"
                      inline
                      id="inlineFormInputGroupUsername2"
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
              <Col sm="2"></Col>
              <Col className={Styles.col2} sm="3">
                <i className="far fa-bell headingicon"></i>

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

        <div>
          <Spring
            from={{
              opacity: 1,
              marginTop: -30,
            }}
            to={{
              opacity: 1,
              marginTop: 0,
            }}
            config={{ delay: 100, duration: 1000 }}
          >
            {(props) => (
              <div style={props}>
                <div className={Styles.sec2}>
                  <div className={Styles.top}>
                    <div className={Styles.overview}>OVERVIEW</div>
                    <div className={Styles.filterbox}>
                      {" "}
                      <Button size="sm" onClick={() => setModalShow(true)}>
                        <i className="fa fa-plus "></i>
                        <span>Make a Request</span>
                      </Button>
                    </div>
                  </div>
                  <div className={Styles.requeststat}>
                    <div className={Styles.cards}>
                      <Card
                        className={Styles.card}
                        style={{ width: "14.5rem" }}
                      >
                        <div className={Styles.cardtitle}>All Users</div>
                        <Row>
                          <Col
                            style={{ color: "#437f97" }}
                            className={Styles.cardsubtitle}
                          >
                            125{" "}
                          </Col>
                          <Col className={Styles.cardicon}>
                            {" "}
                            <i
                              style={{ color: "#3F3047" }}
                              className="fa fa-users"
                            ></i>
                          </Col>
                        </Row>
                      </Card>
                      <Card
                        className={Styles.card}
                        style={{ width: "14.5rem" }}
                      >
                        <div className={Styles.cardtitle}>Departments</div>
                        <Row>
                          <Col
                            style={{ color: "#3F3047" }}
                            className={Styles.cardsubtitle}
                          >
                            12{" "}
                          </Col>
                          <Col className={Styles.cardicon}>
                            {" "}
                            <i
                              style={{ color: "#4ECDC4" }}
                              className="fa fa-building"
                            ></i>
                          </Col>
                        </Row>
                      </Card>
                      <Card
                        className={Styles.card}
                        style={{ width: "14.5rem" }}
                      >
                        <div className={Styles.cardtitle}>
                          Confirmed Requests
                        </div>
                        <Row>
                          <Col
                            style={{ color: "#44AF69" }}
                            className={Styles.cardsubtitle}
                          >
                            125{" "}
                          </Col>
                          <Col className={Styles.cardicon}>
                            {" "}
                            <i
                              style={{ color: "#44AF69" }}
                              className="fa fa-check-circle"
                            ></i>
                          </Col>
                        </Row>
                      </Card>
                      <Card
                        className={Styles.card}
                        style={{ width: "14.5rem" }}
                      >
                        <div className={Styles.cardtitle}>Pending Requests</div>
                        <Row>
                          <Col
                            style={{ color: "#FFB229" }}
                            className={Styles.cardsubtitle}
                          >
                            125{" "}
                          </Col>
                          <Col className={Styles.cardicon}>
                            {" "}
                            <i
                              style={{ color: "#FFB229" }}
                              className="fa fa-hourglass-start"
                            ></i>
                          </Col>
                        </Row>
                      </Card>
                      <Card
                        className={Styles.card}
                        style={{ width: "14.5rem" }}
                      >
                        <div className={Styles.cardtitle}>
                          Declined Requests
                        </div>
                        <Row>
                          <Col
                            style={{ color: "#666565" }}
                            className={Styles.cardsubtitle}
                          >
                            125{" "}
                          </Col>
                          <Col className={Styles.cardicon}>
                            {" "}
                            <i
                              style={{ color: "#E04F5F" }}
                              className="fa fa-times-circle"
                            ></i>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </div>

                  <Row className="m-0">
                    <Col sm="9">
                      <Spring
                        from={{
                          opacity: 0,
                        }}
                        to={{
                          opacity: 1,
                        }}
                        config={{ delay: 800, duration: 1000 }}
                      >
                        {(props) => (
                          <div style={props}>
                            {/* <p className={Styles.tabletitle}>THIS MONTH</p> */}
                            <RequesterTable
                              onClick={handlePreview}
                              handlePreviewShow={handlePreviewShow}
                            />
                          </div>
                        )}
                      </Spring>
                    </Col>
                    <Col sm="3">
                      <Spring
                        from={{
                          opacity: 0,
                          marginLeft: -50,
                        }}
                        to={{
                          opacity: 1,
                          marginLeft: 0,
                        }}
                        config={{ delay: 800, duration: 500 }}
                      >
                        {(props) => (
                          <div style={props}>
                            <div
                              className={Styles.reviewbox}
                              onClick={handlePreviewShow}
                            >
                              <div className={Styles.review}>Review</div>
                              {preview && (
                                <div className={Styles.reviewitems}>
                                  <p>
                                    <span className={Styles.invoicelabel}>
                                      Request By :
                                    </span>
                                    <span className={Styles.invoicedesc}>
                                      {" "}
                                      Anayo Kanayo
                                    </span>
                                  </p>

                                  <div className={Styles.invoiceimg}>
                                    <img
                                      src="https://www.freshbooks.com/wp-content/uploads/2018/05/invoice-hero-full-generic-e1545411829591.png"
                                      alt="invoice"
                                    />
                                    <div className={Styles.download}>
                                      <i
                                        class="fa fa-download"
                                        aria-hidden="true"
                                      >
                                        <span>Download</span>
                                      </i>
                                    </div>
                                    <div className={Styles.details}>
                                      <span className={Styles.invoicelabel}>
                                        Item(s) :
                                      </span>
                                      <span className={Styles.invoicedesc}>
                                        {" "}
                                        Laptop Battery
                                      </span>
                                    </div>
                                    <div className={Styles.details}>
                                      <span className={Styles.invoicelabel}>
                                        Amout :
                                      </span>
                                      <span className={Styles.invoicedesc}>
                                        {" "}
                                        Anayo Kanayo
                                      </span>
                                    </div>
                                    <div className={Styles.details}>
                                      <span className={Styles.invoicelabel}>
                                        Due Date :
                                      </span>
                                      <span className={Styles.invoicedesc}>
                                        {" "}
                                        Anayo Kanayo
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </Spring>
                    </Col>
                  </Row>
                  <p className={Styles.tabletitle}>LAST MONTH</p>
                  <Row className="pl-3 pr-3">
                    <Col sm="9">
                      <RequesterTable onClick={handlePreview} />
                    </Col>
                    <Col sm="3">
                      <Spring
                        from={{
                          opacity: 0,
                          marginLeft: -50,
                        }}
                        to={{
                          opacity: 1,
                          marginLeft: 0,
                        }}
                        config={{ delay: 800, duration: 500 }}
                      >
                        {(props) => (
                          <div style={props}>
                            <div
                              className={Styles.reviewbox}
                              onClick={handlePreviewShow}
                            >
                              <div className={Styles.review}>Review</div>
                              {preview && (
                                <div className={Styles.reviewitems}>
                                  <p>
                                    <span className={Styles.invoicelabel}>
                                      Request By :
                                    </span>
                                    <span className={Styles.invoicedesc}>
                                      {" "}
                                      Anayo Kanayo
                                    </span>
                                  </p>

                                  <div className={Styles.invoiceimg}>
                                    <img
                                      src="https://www.freshbooks.com/wp-content/uploads/2018/05/invoice-hero-full-generic-e1545411829591.png"
                                      alt="invoice"
                                    />
                                    <div className={Styles.download}>
                                      <i
                                        class="fa fa-download"
                                        aria-hidden="true"
                                      >
                                        <span>Download</span>
                                      </i>
                                    </div>
                                    <div className={Styles.details}>
                                      <span className={Styles.invoicelabel}>
                                        Item(s) :
                                      </span>
                                      <span className={Styles.invoicedesc}>
                                        {" "}
                                        Laptop Battery
                                      </span>
                                    </div>
                                    <div className={Styles.details}>
                                      <span className={Styles.invoicelabel}>
                                        Amout :
                                      </span>
                                      <span className={Styles.invoicedesc}>
                                        {" "}
                                        Anayo Kanayo
                                      </span>
                                    </div>
                                    <div className={Styles.details}>
                                      <span className={Styles.invoicelabel}>
                                        Due Date :
                                      </span>
                                      <span className={Styles.invoicedesc}>
                                        {" "}
                                        Anayo Kanayo
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </Spring>
                    </Col>
                  </Row>
                </div>
              </div>
            )}
          </Spring>
        </div>
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
      <Modal
        show={previewShow}
        onHide={() => setPreviewShow(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton style={{ border: "0" }}></Modal.Header>
        <Modal.Body>
          <PreviewRequest />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Requester;
