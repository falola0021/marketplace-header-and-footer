import React, { useState, useEffect } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import Styles from "./Requester.module.css";
// import RequesterTable from "./RequesterTable";
import MakeRequest from "./MakeRequest/MakeRequest";
// import { Spring, Transition, animated } from "react-spring/renderprops";
import PreviewRequest from "./PreviewRequest/PreviewRequest";
import Navbar from "../../components/Navbar/Navbar";
import Addrequest from "../../components/ActionButton/Addrequest/Addrequest";
import Card from "../../components/ViewCard/ViewCard";
import Table from "./Table";
import ApproverTable from "../Approver/ApproverTable";
import Profile from "../../components/UserProfile/UserProfile";
import RequestDataService from "../../services/requester.service";
// import {
//   ThemeProvider,
//   Drawer,
//   DrawerBody,
//   DrawerOverlay,
//   DrawerContent,
//   useDisclosure,
// } from "@chakra-ui/core";

// import AuthService from "../../services/auth.service";

function Requester() {
  const [allUserRequest, setAllUserRequest] = useState("");
  const [allUserDeclinedRequest, setAllUserDeclinedRequest] = useState("");
  const [allUserPendingRequest, setAllUserPendingRequest] = useState("");
  const [allUserApprovedRequest, setAllUserApprovedRequest] = useState("");

  const sizes = ["xl"];
  const [modalShow, setModalShow] = useState(false);
  const handleRequest = () => setModalShow(true);
  // const [showTicketInfo, setShowTicketInfo] = useState(false);
  const [previewShow, setPreviewShow] = React.useState(false);
  const handlePreviewShow = () => {
    setPreviewShow(!previewShow);
  };

  const [switchView, setSwitchView] = useState({
    overview: true,
    profile: false,
  });

  const handleProfileClick = () => {
    setSwitchView({ overview: false, profile: true });
  };
  const handleDashboardClick = () => {
    setSwitchView({ overview: true, profile: false });
  };
  // const handleShowTicketInfo = () => {
  //   setShowTicketInfo(!showTicketInfo);
  // };

  const retrieveAllRequestCount = async () => {
    await RequestDataService.getAllCount()
      .then((response) => {
        setAllUserRequest(response.data.data.totalNumberOfTickets);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  const retrieveDeclinedRequestCount = async () => {
    await RequestDataService.getAllDeclined()
      .then((response) => {
        setAllUserDeclinedRequest(
          response.data.data.totalNumberOfRejectedTickets
        );
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  const retrievePendingRequestCount = async () => {
    await RequestDataService.getAllPending()
      .then((response) => {
        setAllUserPendingRequest(
          response.data.data.totalNumberOfPendingTickets
        );
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const retrieveApprovedRequestCount = async () => {
    await RequestDataService.getAllApproved()
      .then((response) => {
        setAllUserApprovedRequest(
          response.data.data.totalNumberOfApprovedTickets
        );
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  useEffect(() => {
    retrieveAllRequestCount();
    retrieveDeclinedRequestCount();
    retrievePendingRequestCount();
    retrieveApprovedRequestCount();
  }, []);

  const [switchUser, setSwitchUser] = useState(false);
  const handleSwitchUser = React.useCallback(() => setSwitchUser(!switchUser));

  return (
    <>
      <div className={Styles.body}>
        <Navbar
          handleSwitchUser={handleSwitchUser}
          handledashboardclick={handleDashboardClick}
          handleprofileclick={handleProfileClick}
        />
        <Row className="mr-0 pr-0 ml-0 pl-0">
          {switchView.overview && (
            <Col>
              <div className={Styles.addrequestmobile}>
                <Addrequest name="Make a request" request={handleRequest} />

                <Addrequest request={handleRequest} />
              </div>

              <div className={Styles.cardcontainer}>
                <Card
                  cardbody={Styles.cardbody1}
                  cardtitle={Styles.cardtitle1}
                  cardsubtitle={Styles.cardsubtitle1}
                  cardiconbody={Styles.cardiconbody1}
                  value={allUserRequest}
                  title="All Requests"
                  cardicon="fa fa-book"
                />
                <Card
                  cardbody={Styles.cardbody2}
                  cardtitle={Styles.cardtitle2}
                  cardsubtitle={Styles.cardsubtitle2}
                  cardiconbody={Styles.cardiconbody2}
                  value={allUserApprovedRequest}
                  title="Approved Requests"
                  cardicon="fa fa-check-circle"
                />
                <Card
                  cardbody={Styles.cardbody3}
                  cardtitle={Styles.cardtitle3}
                  cardsubtitle={Styles.cardsubtitle3}
                  cardiconbody={Styles.cardiconbody3}
                  value={allUserPendingRequest}
                  title="Pending Requests"
                  cardicon="fa fa-hourglass-half"
                />
                <Card
                  cardbody={Styles.cardbody4}
                  cardtitle={Styles.cardtitle4}
                  cardsubtitle={Styles.cardsubtitle4}
                  cardiconbody={Styles.cardiconbody4}
                  value={allUserDeclinedRequest}
                  title="Declined Requests"
                  cardicon="fa fa-times-circle"
                />
              </div>

              <div className={Styles.tablecontainer}>
                <Table preview={handlePreviewShow} />
              </div>
            </Col>
          )}
          {switchView.profile && (
            <Col>
              <Profile />
            </Col>
          )}
        </Row>
      </div>
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
    </>
  );
}

export default Requester;
