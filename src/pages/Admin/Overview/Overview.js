import React from "react";
import { Card } from "react-bootstrap";
import Styles from "./Overview.module.css";
import { Row, Col } from "react-bootstrap";
import Table from "./Table";

function Overview() {
  // const retrieveAllApproverTicketCount = async () => {
  //   await TicketDataService.countAllApprovedTickets()
  //     .then((response) => {
  //       setAllApproverTickets(response.data.data.allApproverTicketsCount);
  //     })
  //     .catch((e) => {
  //       console.log(e.response);
  //     });
  // };
  // const retrieveApproverApprovedTickets = async () => {
  //   await TicketDataService.countApprovedTicketsByApprover()
  //     .then((response) => {
  //       setAllApproverApprovedTickets(response.data.data.approvedTicketsCount);
  //     })
  //     .catch((e) => {
  //       console.log("the error");
  //       console.log(e.response);
  //     });
  // };
  // const retrieveApproverPendingTickets = async () => {
  //   await TicketDataService.countPendingTicketsByApprover()
  //     .then((response) => {
  //       setAllApproverPendingTickets(response.data.data.rejectedTicketsCount);
  //     })
  //     .catch((e) => {
  //       console.log(e.response);
  //     });
  // };

  // const retrieveApproverRejectedTickets = async () => {
  //   await TicketDataService.countRejectedTicketsByApprover()
  //     .then((response) => {
  //       setAllApproverDeclinedTickets(response.data.data.rejectedTicketsCount);
  //     })
  //     .catch((e) => {
  //       console.log(e.response);
  //     });
  // };

  // useEffect(() => {
  //   retrieveAllRequestCount();
  //   retrieveDeclinedRequestCount();
  //   retrievePendingRequestCount();
  //   retrieveApprovedRequestCount();

  // }, []);

  return (
    <>
      <div className={Styles.body}>
        <p className={Styles.title}>Overview</p>
        <div className={Styles.cards}>
          <Card className={Styles.card} style={{ width: "14.5rem" }}>
            <div className={Styles.cardtitle}>All Users</div>
            <Row>
              <Col style={{ color: "#437f97" }} className={Styles.cardsubtitle}>
                125{" "}
              </Col>
              <Col className={Styles.cardicon}>
                {" "}
                <i style={{ color: "#3F3047" }} className="fa fa-users"></i>
              </Col>
            </Row>
          </Card>
          <Card className={Styles.card} style={{ width: "14.5rem" }}>
            <div className={Styles.cardtitle}>Departments</div>
            <Row>
              <Col style={{ color: "#3F3047" }} className={Styles.cardsubtitle}>
                12{" "}
              </Col>
              <Col className={Styles.cardicon}>
                {" "}
                <i style={{ color: "#4ECDC4" }} className="fa fa-building"></i>
              </Col>
            </Row>
          </Card>
          <Card className={Styles.card} style={{ width: "14.5rem" }}>
            <div className={Styles.cardtitle}>Confirmed Requests</div>
            <Row>
              <Col style={{ color: "#44AF69" }} className={Styles.cardsubtitle}>
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
          <Card className={Styles.card} style={{ width: "14.5rem" }}>
            <div className={Styles.cardtitle}>Pending Requests</div>
            <Row>
              <Col style={{ color: "#FFB229" }} className={Styles.cardsubtitle}>
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
          <Card className={Styles.card} style={{ width: "14.5rem" }}>
            <div className={Styles.cardtitle}>Declined Requests</div>
            <Row>
              <Col style={{ color: "#666565" }} className={Styles.cardsubtitle}>
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
        <div>
          <Table />
        </div>
      </div>
    </>
  );
}

export default Overview;
