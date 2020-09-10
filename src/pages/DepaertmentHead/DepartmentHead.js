import React, { useState } from "react";
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
} from "react-bootstrap";
import Styles from "./DepartmentHead.module.css";
import DepartmentHeadTable from "./DepartmentHeadTable";

function DepartmentHead() {
  const [preview, setPreview] = useState(false);
  const handlePreview = () => setPreview(!preview);
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
                <i className="fa fa-chevron-down headingicon"></i>
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
        <div>
          <div className={Styles.sec2}>
            <Row>
              <Col sm="9">
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
                </div>{" "}
                <DepartmentHeadTable onClick={handlePreview} />
              </Col>
              <Col sm="3">
                <div className={Styles.reviewbox}>
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
                      <p>
                        <span className={Styles.invoicelabel}>Product :</span>
                        <span className={Styles.invoicedesc}>
                          {" "}
                          Laptop Battery
                        </span>
                      </p>
                      <img
                        className={Styles.invoiceimg}
                        src="https://www.freshbooks.com/wp-content/uploads/2018/05/invoice-hero-full-generic-e1545411829591.png"
                        alt="invoice"
                      />
                      <div className={Styles.download}>
                        <i class="fa fa-download" aria-hidden="true">
                          <span>Download</span>
                        </i>
                      </div>
                      <p className={Styles.details}>
                        <span className={Styles.invoicelabel}>AMOUNT :</span>
                        <span className={Styles.invoicedesc}>
                          {" "}
                          Anayo Kanayo
                        </span>
                      </p>
                      <p className={Styles.details}>
                        <span className={Styles.invoicelabel}>DATE :</span>
                        <span className={Styles.invoicedesc}>
                          {" "}
                          Anayo Kanayo
                        </span>
                      </p>
                      <p className={Styles.details}>
                        <span className={Styles.invoicelabel}>DATE :</span>
                        <span className={Styles.invoicedesc}>
                          {" "}
                          Anayo Kanayo
                        </span>
                      </p>
                      <Form className="pt-3">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Leave a comment</Form.Label>
                          <div>
                            <textarea className={Styles.textarea}></textarea>
                          </div>
                        </Form.Group>

                        <Button className={Styles.approve} type="submit">
                          Approve
                        </Button>
                        <Button className={Styles.decline} type="submit">
                          Decline
                        </Button>
                      </Form>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default DepartmentHead;
