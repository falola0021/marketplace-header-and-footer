import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Styles from "./Requester.module.css";
import MakeRequest from "./MakeRequest/MakeRequest";
import Navbar from "../../components/Navbar/Navbar";
import Addrequest from "../../components/ActionButton/Addrequest/Addrequest";
import Card from "../../components/ViewCard/ViewCard";
import Profile from "../../components/UserProfile/UserProfile";
import RequestDataService from "../../services/requester.service";
import TestTable from "./TestTable";
import kassandahmobile from "../../pages/assets/kassandahmobilepurple.png";
import swDev from "../../swDev";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  ThemeProvider,
  DrawerCloseButton,
} from "@chakra-ui/core";

function Requester() {
  swDev();
  const [allUserRequest, setAllUserRequest] = useState("");
  const [allUserDeclinedRequest, setAllUserDeclinedRequest] = useState("");
  const [allUserPendingRequest, setAllUserPendingRequest] = useState("");
  const [allUserApprovedRequest, setAllUserApprovedRequest] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  // const [requests, setRequests] = React.useState([]);
  // const [loading, setLoading] = React.useState(false);
  const sizes = ["md"];

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
  retrieveAllRequestCount();
  retrieveDeclinedRequestCount();
  retrievePendingRequestCount();
  retrieveApprovedRequestCount();

  // const retrieveRequests = async () => {
  //   setLoading(true);
  //   await RequestDataService.getUserTicketList()
  //     .then((response) => {
  //       let resData = response.data.data.ticketList.sort((a, b) =>
  //         new Date(a) < new Date(b) ? 1 : -1
  //       );
  //       setRequests(resData);
  //       let firstTicket = resData[0];

  //       // handleSideview(firstTicket);
  //       setLoading(false);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       console.log("wrong", e.response);
  //       setLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   retrieveAllRequestCount();
  //   retrieveDeclinedRequestCount();
  //   retrievePendingRequestCount();
  //   retrieveApprovedRequestCount();
  // }, []);

  const [switchUser, setSwitchUser] = useState(false);
  const handleSwitchUser = React.useCallback(() => setSwitchUser(!switchUser));

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

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
              <div
                style={{ marginBottom: "20px" }}
                className={Styles.addrequestmobile}
              >
                <Addrequest onClick={() => handleClick(size)} />
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
                <TestTable retrieveAllRequestCount={retrieveAllRequestCount} />
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

      <ThemeProvider>
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay
            style={{ backgroundColor: "rgba(255, 255, 255,0.2)" }}
          />

          <DrawerContent>
            <DrawerCloseButton />
            <div className={Styles.requestform}>
              <DrawerBody>
                <img
                  src={kassandahmobile}
                  alt="logo"
                  style={{
                    width: "30px",
                    height: "45px",
                    marginTop: "10px",
                    cursor: "pointer",
                  }}
                />{" "}
                <MakeRequest
                  retrieveAllRequestCount={retrieveAllRequestCount}
                  closeDrawer={onClose}
                />
              </DrawerBody>
            </div>
          </DrawerContent>
        </Drawer>
      </ThemeProvider>
    </>
  );
}

export default Requester;
