import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Styles from "./Overview.module.css";
import { Row, Col } from "react-bootstrap";
import Chart from "./Chart";
import TicketDataService from "../../../services/ticket.service";
import PhaseDataService from "../../../services/phase.service";
import WorkflowDataService from "../../../services/workflow.service";
import CategoryDataService from "../../../services/category.service";
// import AuthDataService from "../../../services/auth.service";

function Overview() {
  const [allUsers, setAllUsers] = useState("");
  const [countDepartment, setCountDepartments] = useState("");
  const [countConfirmedRequests, setCountConfirmedRequests] = useState("");
  const [countPendingRequests, setCountPendingRequests] = useState("");
  const [countRejectedRequests, setCountRejectedRequests] = useState("");
  const [countPhase, setCountPhase] = useState("");
  const [countWorkflow, setCountWorkflow] = useState("");
  const [countCategory, setCountCategory] = useState("");

  // const refreshToken = (error) => {
  //   const currentUser = JSON.parse(localStorage.getItem("user"));
  //   const refreshToken = currentUser.refreshToken;
  //   if (error.response.status === 401) {
  //     AuthDataService.refreshToken({ header: refreshToken })
  //       .then((response) => {
  //         console.log("refreshData", response.data);

  //       })
  //       .catch((e) => {
  //         console.log(e.response);
  //       });
  //   }
  // };

  const countAllUsers = async () => {
    //header
    //url
    //method

    await TicketDataService.countAllUsers()
      .then((response) => {
        setAllUsers(response.data.data.userCount);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const countAllDepartments = async () => {
    await TicketDataService.countDepartments()
      .then((response) => {
        setCountDepartments(response.data.data.departmentCount);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  const confirmedRequests = async () => {
    await TicketDataService.countConfirmedRequests()
      .then((response) => {
        setCountConfirmedRequests(response.data.data.ticketCount);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const pendingRequests = async () => {
    await TicketDataService.countPendingRequests()
      .then((response) => {
        setCountPendingRequests(response.data.data.ticketCount);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  const declinedRequests = async () => {
    await TicketDataService.countRejectedRequests()
      .then((response) => {
        setCountRejectedRequests(response.data.data.ticketCount);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const phase = async () => {
    await PhaseDataService.getAll()
      .then((response) => {
        setCountPhase(response.data.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  const workflow = async () => {
    await WorkflowDataService.getAll()
      .then((response) => {
        setCountWorkflow(response.data.data);
      })
      .catch((e) => {
        // refreshToken();
        console.log(e.response);
      });
  };
  const category = async () => {
    await CategoryDataService.getAll()
      .then((response) => {
        setCountCategory(response.data.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  useEffect(() => {
    countAllUsers();
    countAllDepartments();
    confirmedRequests();
    pendingRequests();
    declinedRequests();
    phase();
    workflow();
    category();
  }, []);

  return (
    <>
      <div className={Styles.body}>
        <p className={Styles.title}>Overview</p>
        <div className={Styles.cards}>
          <Card className={Styles.card} style={{ width: "14.5rem" }}>
            <div className={Styles.cardtitle}>All Users</div>
            <Row>
              <Col style={{ color: "#437f97" }} className={Styles.cardsubtitle}>
                {allUsers}
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
                {countDepartment}
              </Col>
              <Col className={Styles.cardicon}>
                {" "}
                <i style={{ color: "#4ECDC4" }} className="fa fa-building"></i>
              </Col>
            </Row>
          </Card>
          <Card className={Styles.card} style={{ width: "14.5rem" }}>
            <div className={Styles.cardtitle}>Phases</div>
            <Row>
              <Col style={{ color: "#44AF69" }} className={Styles.cardsubtitle}>
                {countPhase.length}
              </Col>
              <Col className={Styles.cardicon}>
                {" "}
                <i style={{ color: "#44AF69" }} className="	fas fa-stream"></i>
              </Col>
            </Row>
          </Card>
          <Card className={Styles.card} style={{ width: "14.5rem" }}>
            <div className={Styles.cardtitle}>Workflows</div>
            <Row>
              <Col style={{ color: "#FFB229" }} className={Styles.cardsubtitle}>
                {countWorkflow.length}
              </Col>
              <Col className={Styles.cardicon}>
                {" "}
                <i style={{ color: "#FFB229" }} className="fas fa-sync-alt"></i>
              </Col>
            </Row>
          </Card>
          <Card className={Styles.card} style={{ width: "14.5rem" }}>
            <div className={Styles.cardtitle}>Categories</div>
            <Row>
              <Col style={{ color: "#666565" }} className={Styles.cardsubtitle}>
                {countCategory.length}
              </Col>
              <Col className={Styles.cardicon}>
                {" "}
                <i style={{ color: "#E04F5F" }} className="fa fa-list-alt"></i>
              </Col>
            </Row>
          </Card>
        </div>
        <div
          style={{
            minHeight: "700px",
            padding: "30px",
            marginBottom: "100px",
          }}
        >
          <Chart
            countPendingRequests={countPendingRequests}
            countRejectedRequests={countRejectedRequests}
            countConfirmedRequests={countConfirmedRequests}
          />
        </div>
      </div>
    </>
  );
}

export default Overview;
