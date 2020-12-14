import React, { useState, useEffect } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import Styles from "./Approver.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/ViewCard/ViewCard";
import ApproverTable from "./ApproverTable";
import AllApproverTicketTable from "./AllApproverTicketTable";
import ApprovedTicketTable from "./ApprovedTicketTable";
import RejectedTicketTable from "./RejectedTable";
import RequesterTable from "../Requester/TestTable";
import Profile from "../../components/UserProfile/UserProfile";
import RequestDataService from "../../services/requester.service";
import TicketDataService from "../../services/ticket.service";
import Addrequest from "../../components/ActionButton/Addrequest/Addrequest";
import kassandahmobile from "../../pages/assets/kassandahmobilepurple.png";
import MakeRequest from "../Requester/MakeRequest/MakeRequest";

import {
  ThemeProvider,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  Switch,
} from "@chakra-ui/core";

// import AuthService from "../../services/auth.service";

function Approver() {
  //const currentUser = AuthService.getCurrentUser();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [size, setSize] = React.useState("md");

  const [allUserRequest, setAllUserRequest] = useState("");
  const [allUserDeclinedRequest, setAllUserDeclinedRequest] = useState("");
  const [allUserPendingRequest, setAllUserPendingRequest] = useState("");
  const [allUserApprovedRequest, setAllUserApprovedRequest] = useState("");

  const [allApproverTickets, setAllApproverTickets] = useState("");
  const [allApproverDeclinedTickets, setAllApproverDeclinedTickets] = useState(
    ""
  );
  const [allApproverPendingTickets, setAllApproverPendingTickets] = useState(
    ""
  );
  const [allApproverApprovedTickets, setAllApproverApprovedTickets] = useState(
    ""
  );

  const sizes = ["xl"];
  const [modalShow, setModalShow] = useState(false);
  const handleRequest = () => setModalShow(true);
  const [previewShow, setPreviewShow] = React.useState(false);
  const handlePreviewShow = () => {
    setPreviewShow(!previewShow);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const [switchView, setSwitchView] = useState({
    overview: true,
    profile: false,
  });

  //requester
  const handleProfileClick = () => {
    setSwitchView({ overview: false, profile: true });
  };
  const handleDashboardClick = () => {
    setSwitchView({ overview: true, profile: false });
  };

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

  //approver

  const retrieveAllApproverTicketCount = async () => {
    await TicketDataService.countAllApprovedTickets()
      .then((response) => {
        setAllApproverTickets(response.data.data.allApproverTicketsCount);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  const retrieveApproverApprovedTickets = async () => {
    await TicketDataService.countApprovedTicketsByApprover()
      .then((response) => {
        setAllApproverApprovedTickets(response.data.data.approvedTicketsCount);
      })
      .catch((e) => {
        console.log("the error");
        console.log(e.response);
      });
  };
  const retrieveApproverPendingTickets = async () => {
    await TicketDataService.countPendingTicketsByApprover()
      .then((response) => {
        setAllApproverPendingTickets(response.data.data.rejectedTicketsCount);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const retrieveApproverRejectedTickets = async () => {
    await TicketDataService.countRejectedTicketsByApprover()
      .then((response) => {
        setAllApproverDeclinedTickets(response.data.data.rejectedTicketsCount);
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

    retrieveApproverRejectedTickets();
    retrieveApproverPendingTickets();
    retrieveApproverApprovedTickets();
    retrieveAllApproverTicketCount();
  }, []);

  const [switchUser, setSwitchUser] = useState(false);
  const handleSwitchUser = React.useCallback(() => setSwitchUser(!switchUser));

  const [changeTable, setChangeTable] = useState({
    pendingTable: true,
    allApproverTicketTable: false,
    rejectedTable: false,
    approvedTable: false,
  });
  const active = `${Styles.cardactive} `;
  const inactive = `${Styles.cardinactive}  `;

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <div className={Styles.body}>
        <Navbar
          switchUser={switchUser}
          setSwitchUser={setSwitchUser}
          handleSwitchUser={handleSwitchUser}
          handledashboardclick={handleDashboardClick}
          handleprofileclick={handleProfileClick}
        />
        <Row className="mr-0 pr-0 ml-0 pl-0">
          {/* FOR APPROVER */}
          {switchView.overview && (
            <Col>
              {!switchUser && (
                <Col>
                  <div
                    style={{ marginBottom: "20px" }}
                    className={Styles.switch}
                  >
                    <ThemeProvider>
                      <Switch onChange={handleSwitchUser} size="md" />
                    </ThemeProvider>
                  </div>
                  <div className={Styles.cardcontainer}>
                    <span
                      onClick={() => {
                        setChangeTable({
                          pendingTable: false,
                          allApproverTicketTable: true,
                          rejectedTable: false,
                          approvedTable: false,
                        });
                      }}
                    >
                      <Card
                        cardbody={
                          changeTable.allApproverTicketTable
                            ? Styles.active
                            : Styles.cardbody1
                        }
                        cardtitle={
                          changeTable.allApproverTicketTable
                            ? Styles.activeTitle
                            : Styles.cardtitle1
                        }
                        cardsubtitle={
                          changeTable.allApproverTicketTable
                            ? Styles.activesubtitle
                            : Styles.cardsubtitle1
                        }
                        cardiconbody={
                          changeTable.allApproverTicketTable
                            ? Styles.activeiconbody
                            : Styles.cardiconbody1
                        }
                        value={allApproverTickets}
                        title="All Tickets"
                        cardicon="fa fa-book"
                      />
                    </span>
                    <span
                      onClick={() => {
                        setChangeTable({
                          pendingTable: false,
                          allApproverTicketTable: false,
                          rejectedTable: false,
                          approvedTable: true,
                        });
                      }}
                    >
                      <Card
                        cardbody={
                          changeTable.approvedTable
                            ? Styles.active
                            : Styles.cardbody2
                        }
                        cardtitle={
                          changeTable.approvedTable
                            ? Styles.activeTitle
                            : Styles.cardtitle2
                        }
                        cardsubtitle={
                          changeTable.approvedTable
                            ? Styles.activesubtitle
                            : Styles.cardsubtitle2
                        }
                        cardiconbody={
                          changeTable.approvedTable
                            ? Styles.activeiconbody
                            : Styles.cardiconbody2
                        }
                        value={allApproverApprovedTickets}
                        title="Approved Tickets"
                        cardicon="fa fa-check-circle"
                      />
                    </span>
                    <span
                      onClick={() => {
                        setChangeTable({
                          pendingTable: true,
                          allApproverTicketTable: false,
                        });
                      }}
                    >
                      <Card
                        cardbody={
                          changeTable.pendingTable
                            ? Styles.active
                            : Styles.cardbody3
                        }
                        cardtitle={
                          changeTable.pendingTable
                            ? Styles.activeTitle
                            : Styles.cardtitle3
                        }
                        cardsubtitle={
                          changeTable.pendingTable
                            ? Styles.activesubtitle
                            : Styles.cardsubtitle3
                        }
                        cardiconbody={
                          changeTable.pendingTable
                            ? Styles.activeiconbody
                            : Styles.cardiconbody3
                        }
                        value={allApproverPendingTickets}
                        title="Pending Tickets"
                        cardicon="fa fa-hourglass-half"
                      />
                    </span>
                    <span
                      onClick={() => {
                        setChangeTable({
                          pendingTable: false,
                          allApproverTicketTable: false,
                          rejectedTable: true,
                          approvedTable: false,
                        });
                      }}
                    >
                      <Card
                        cardbody={
                          changeTable.rejectedTable
                            ? Styles.active
                            : Styles.cardbody4
                        }
                        cardtitle={
                          changeTable.rejectedTable
                            ? Styles.activeTitle
                            : Styles.cardtitle4
                        }
                        cardsubtitle={
                          changeTable.rejectedTable
                            ? Styles.activesubtitle
                            : Styles.cardsubtitle4
                        }
                        cardiconbody={
                          changeTable.rejectedTable
                            ? Styles.activeiconbody
                            : Styles.cardiconbody4
                        }
                        value={allApproverDeclinedTickets}
                        title="Declined Tickets"
                        cardicon="fa fa-times-circle"
                      />
                    </span>
                  </div>
                </Col>
              )}
              {/* FOR NORMAL USER */}

              {switchUser && (
                <Col>
                  <div
                    style={{ marginBottom: "20px" }}
                    className={Styles.switch}
                  >
                    <ThemeProvider>
                      <Switch onChange={handleSwitchUser} size="md" />
                    </ThemeProvider>
                  </div>
                  <div
                    style={{ marginBottom: "20px" }}
                    className={Styles.addrequestmobile}
                  >
                    <Addrequest onClick={() => handleClick(size)} />
                  </div>

                  <div className={Styles.cardcontainer}>
                    <Card
                      cardbody={Styles.cardbodyA}
                      cardtitle={Styles.cardtitle1}
                      cardsubtitle={Styles.cardsubtitle1}
                      cardiconbody={Styles.cardiconbody1}
                      value={allUserRequest}
                      title="All Requests"
                      cardicon="fa fa-book"
                    />
                    <Card
                      cardbody={Styles.cardbodyB}
                      cardtitle={Styles.cardtitle2}
                      cardsubtitle={Styles.cardsubtitle2}
                      cardiconbody={Styles.cardiconbody2}
                      value={allUserApprovedRequest}
                      title="Approved Requests"
                      cardicon="fa fa-check-circle"
                    />
                    <Card
                      cardbody={Styles.cardbodyC}
                      cardtitle={Styles.cardtitle3}
                      cardsubtitle={Styles.cardsubtitle3}
                      cardiconbody={Styles.cardiconbody3}
                      value={allUserPendingRequest}
                      title="Pending Requests"
                      cardicon="fa fa-hourglass-half"
                    />
                    <Card
                      cardbody={Styles.cardbodyD}
                      cardtitle={Styles.cardtitle4}
                      cardsubtitle={Styles.cardsubtitle4}
                      cardiconbody={Styles.cardiconbody4}
                      value={allUserDeclinedRequest}
                      title="Declined Requests"
                      cardicon="fa fa-times-circle"
                    />
                  </div>
                </Col>
              )}

              <div className={Styles.tablecontainer}>
                {/* FOR NORMAL USER */}
                {switchUser && <RequesterTable preview={handlePreviewShow} />}
                {/* FOR  APPROVER */}
                {/* {!switchUser && <ApproverTable preview={handlePreviewShow} />} */}
                {!switchUser && (
                  <AllApproverTicketTable
                    changeTable={changeTable.allApproverTicketTable}
                    preview={handlePreviewShow}
                  />
                  // <div>
                  //   {changeTable.pendingTable && (
                  //     <ApproverTable preview={handlePreviewShow} />
                  //   )}
                  //   {changeTable.allApproverTicketTable && (
                  //     <AllApproverTicketTable
                  //       changeTable={changeTable.allApproverTicketTable}
                  //       preview={handlePreviewShow}
                  //     />
                  //   )}
                  //   {changeTable.approvedTable && (
                  //     <ApprovedTicketTable
                  //       changeTable2={changeTable.approvedTable}
                  //       preview={handlePreviewShow}
                  //     />
                  //   )}
                  //   {changeTable.rejectedTable && (
                  //     <RejectedTicketTable preview={handlePreviewShow} />
                  //   )}
                  // </div>
                )}
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
                  // retrieveRequests={retrieveRequests}
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

export default Approver;
