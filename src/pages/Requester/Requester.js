import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import Styles from "./Requester.module.css";
// import RequesterTable from "./RequesterTable";
import MakeRequest from "./MakeRequest/MakeRequest";
// import { Spring, Transition, animated } from "react-spring/renderprops";
import PreviewRequest from "./PreviewRequest/PreviewRequest";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Addrequest from "../../components/ActionButton/Addrequest/Addrequest";
import Card from "../../components/ViewCard/ViewCard";
import Table from "../../components/Table/Table";
import InvoicePreview from "../../components/InvoicePreview/InvoicePreview";
import Profile from "../../components/UserProfile/UserProfile";
import {
  ThemeProvider,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/core";

// import AuthService from "../../services/auth.service";

function Requester() {
  //const currentUser = AuthService.getCurrentUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  // const btnRef = React.useRef();
  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xl"];
  const [modalShow, setModalShow] = useState(false);
  const handleRequest = () => setModalShow(true);
  //{currentUser.details.firstName}

  // const [preview, setPreview] = useState(true);
  // const handlePreview = () => setPreview(!preview);
  const [previewShow, setPreviewShow] = React.useState(false);
  const handlePreviewShow = () => {
    setPreviewShow(!previewShow);
  };

  const [switchView, setSwitchView] = useState({
    overview: true,
    profile: false,
    // settings: false,
    // page2: false,
  });

  // const handleOverviewClick = () => {
  //   setSwitchView({ overview: true, profile: false });
  // };
  const handleProfileClick = () => {
    setSwitchView({ overview: false, profile: true });
  };
  const handleDashboardClick = () => {
    setSwitchView({ overview: true, profile: false });
  };

  return (
    <>
      <div className={Styles.body}>
        <Navbar
          handledashboardclick={handleDashboardClick}
          handleprofileclick={handleProfileClick}
        />
        <Row className="mr-0 pr-0 ml-0 pl-0">
          {switchView.overview && (
            <Col>
              <div className={Styles.addrequest}>
                {sizes.map((size) => (
                  <Addrequest
                    name="Make a request"
                    onClick={() => handleClick(size)}
                    type="button"
                    key={size}
                  />
                ))}
              </div>
              <div className={Styles.addrequestmobile}>
                <Addrequest name="Make a request" request={handleRequest} />

                {/* <Addrequest request={handleRequest} /> */}
              </div>

              <div className={Styles.cardcontainer}>
                <Card
                  cardbody={Styles.cardbody1}
                  cardtitle={Styles.cardtitle1}
                  cardsubtitle={Styles.cardsubtitle1}
                  cardiconbody={Styles.cardiconbody1}
                  value="100"
                  title="All Requests"
                  cardicon="fa fa-book"
                />
                <Card
                  cardbody={Styles.cardbody2}
                  cardtitle={Styles.cardtitle2}
                  cardsubtitle={Styles.cardsubtitle2}
                  cardiconbody={Styles.cardiconbody2}
                  value="300"
                  title="Confirmed Requests"
                  cardicon="fa fa-check-circle"
                />
                <Card
                  cardbody={Styles.cardbody3}
                  cardtitle={Styles.cardtitle3}
                  cardsubtitle={Styles.cardsubtitle3}
                  cardiconbody={Styles.cardiconbody3}
                  value="450"
                  title="Pending Requests"
                  cardicon="fa fa-hourglass-half"
                />
                <Card
                  cardbody={Styles.cardbody4}
                  cardtitle={Styles.cardtitle4}
                  cardsubtitle={Styles.cardsubtitle4}
                  cardiconbody={Styles.cardiconbody4}
                  value="450"
                  title="Declined Requests"
                  cardicon="fa fa-times-circle"
                />
              </div>
              <Row>
                <Col sm="9">
                  <div className={Styles.tablecontainer}>
                    <Table preview={handlePreviewShow} />
                  </div>
                </Col>
                <Col>
                  <div className={Styles.invoicecontainer}>
                    <InvoicePreview preview={handlePreviewShow} />
                  </div>
                </Col>
              </Row>
            </Col>
          )}
          {switchView.profile && (
            <Col>
              <Profile />
            </Col>
          )}
        </Row>
      </div>
      <ThemeProvider>
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <span className={Styles.requestform}>
            <DrawerOverlay
              style={{ backgroundColor: "rgba(255, 255, 255,0.2)" }}
            />

            <DrawerContent>
              <DrawerBody>
                {" "}
                <MakeRequest />
              </DrawerBody>
            </DrawerContent>
          </span>
        </Drawer>
      </ThemeProvider>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        centered
      >
        <Modal.Header
          closeButton
          style={{ border: "0", marginBottom: "0", paddingBottom: "0" }}
        ></Modal.Header>
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
      </Modal>{" "}
      <Footer />
      {/* <div>
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
                    <div className={Styles.sec2}> */}
      {/* */}
      {/* <Row className="m-0">
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
                      </Row> */}
      {/* </div>
                  </div>
                )}
              </Spring> */}
      {/* </div> */}
      {/* <Modal
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
      </Modal> */}
    </>
  );
}

export default Requester;
