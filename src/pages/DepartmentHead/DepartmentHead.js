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
} from "react-bootstrap";
import Styles from "./DepartmentHead.module.css";
import DepartmentHeadTable from "./DepartmentHeadTable";
import { Spring, Transition, animated } from "react-spring/renderprops";
import PreviewRequest from "./PreviewRequest/PreviewRequest";

function DepartmentHead() {
  // const [modalShow, setModalShow] = React.useState(false);
  const [preview, setPreview] = useState(true);
  const handlePreview = () => setPreview(!preview);
  // const [showFilter, setShowFilter] = useState(false);
  // const handleFilter = () => setShowFilter(!showFilter);
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
                <i className={Styles.name}>Akim Adeyemi</i>
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
            <div>
              <Row className={Styles.row}>
                <Col className={Styles.headtabs} sm="3">
                  <div>All</div>
                  <div>Approval</div>
                  <div>Pending</div>
                  <div>Denied</div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        {/* </div>
          )}
        </Spring> */}
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
                  <div className={Styles.searchfilter}>
                    <Row>
                      <Col sm="9" className={Styles.filterbox}>
                        {" "}
                        <Form inline className={Styles.filterform}>
                          <InputGroup className={Styles.startdate}>
                            <InputGroup.Prepend>
                              <InputGroup.Text>Start</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              className={Styles.formcontrol}
                              size="lg"
                              type="date"
                            />
                          </InputGroup>
                          <InputGroup className={Styles.enddate}>
                            <InputGroup.Prepend>
                              <InputGroup.Text>End</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              styL
                              className={Styles.formcontrol}
                              size="lg"
                              type="text"
                              placeholder="Date"
                              timeFormat="DD-MM-YYYY"
                            />
                          </InputGroup>

                          <Button type="submit">Filter</Button>
                        </Form>
                      </Col>
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
                    </Row>
                  </div>{" "}
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
                            <DepartmentHeadTable
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
                    <Col>
                      <DepartmentHeadTable onClick={handlePreview} />
                    </Col>
                  </Row>
                </div>
              </div>
            )}
          </Spring>
        </div>
      </div>

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

export default DepartmentHead;
