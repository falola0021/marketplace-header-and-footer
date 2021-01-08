import React, { useEffect } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Row, Col } from "react-bootstrap";
import VendorDataService from "../../../services/vendor.service";
import UserDataService from "../../../services/user.service";

function MyChart({
  countConfirmedRequests,
  countPendingRequests,
  countRejectedRequests,
}) {
  const [users, setUsers] = React.useState([]);
  const [vendorVerification, setVendorVerification] = React.useState([]);

  const retrieveUsers = async () => {
    await UserDataService.getAll()
      .then((response) => {
        setUsers(response.data.data.userList);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  const retrieveVendors = async () => {
    await VendorDataService.getAll()
      .then((response) => {
        setVendorVerification(response.data.data);
        console.log("got here", response.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  useEffect(() => {
    retrieveUsers();
    retrieveVendors();
  }, []);

  let allUsers = users.length;
  let verifiedUsers = [];
  let unverifiedUsers = [];
  let activeUsers = [];
  let inActiveUsers = [];
  users.map(function (user) {
    if (user.isVerified) {
      return verifiedUsers.push(users);
    } else {
      return unverifiedUsers.push(users);
    }
  });

  users.map(function (user) {
    if (user.status == "active") {
      return activeUsers.push(users);
    } else {
      return inActiveUsers.push(users);
    }
  });

  let verifiedVendors = [];
  let unverifiedVendors = [];
  vendorVerification.map(function (vendor) {
    if (vendor.isVerified) {
      return verifiedVendors.push(vendor);
    } else {
      return unverifiedVendors.push(vendor);
    }
  });

  const state = {
    labels: [
      "All Users",
      "Active Users",
      "Inactive Users",
      "Verified Users",
      "Unverified Users",
    ],
    datasets: [
      {
        // label: "chart11",
        backgroundColor: [
          "#85C1E9",
          "rgb(255, 99, 132)",
          "#E8DAEF",
          "rgb(255, 205, 86)",
          // "rgb(75, 192, 192)",

          // "rgb(153, 102, 255)",
          // "rgb(201, 203, 207)",
        ],
        borderColor: "rgba(0,0,0,1)",
        // borderWidth: 1,
        borderWidth: 0,
        barPercentage: 0.8,
        data: [
          allUsers,
          activeUsers.length,
          inActiveUsers.length,
          verifiedUsers.length,
          unverifiedUsers.length,
        ],
      },
    ],
  };

  const vendors = {
    labels: ["Verified", "Unverified"],
    datasets: [
      {
        // label: "chart11",
        backgroundColor: ["#85C1E9", "#EBF5FB"],
        borderColor: "rgba(0,0,0,1)",
        // borderWidth: 1,
        borderWidth: 0,

        data: [verifiedVendors.length, unverifiedVendors.length],
      },
    ],
  };

  let allRequests =
    countPendingRequests + countConfirmedRequests + countRejectedRequests;
  const requests = {
    labels: ["", "All", "Pending", "Confirmed", "Declined"],
    datasets: [
      {
        borderColor: "#2874A6",
        borderWidth: 2,
        backgroundColor: "#F8F9F9",
        data: [
          0,
          allRequests,
          countPendingRequests,
          countConfirmedRequests,
          countRejectedRequests,
        ],
      },
    ],
  };

  let admin = [];
  let basicUser = [];
  let approver = [];

  var roles = users.map(function (gotuser) {
    const roles = gotuser.roles;
    roles.map((role) => {
      if (role.role === "user") {
        basicUser.push(role.role);
      } else if (role.role == "approver") {
        approver.push(role.role);
      } else {
        admin.push(role.role);
      }
    });
  });

  const userRoles = {
    labels: ["Basic User", "Approver", "Admin"],
    datasets: [
      {
        backgroundColor: ["#E56AB3", "#c0cbff", "#88j5FB"],
        borderColor: "rgba(0,0,0,1)",
        // borderWidth: 1,
        borderWidth: 0,

        data: [basicUser.length, approver.length, admin.length],
      },
    ],
  };

  return (
    <>
      <Row>
        <Col
          style={{
            backgroundColor: "#ffffff",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #EAF2F8",
          }}
        >
          {" "}
          <div>
            <Bar
              data={state}
              options={{
                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        drawOnChartArea: false,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        drawOnChartArea: false,
                      },
                    },
                  ],
                },
                title: {
                  display: true,
                  text: "Users",
                  fontSize: 20,
                },
                legend: {
                  display: false,
                  position: "right",
                },
              }}
            />
          </div>
        </Col>
        <Col
          style={{
            backgroundColor: "#ffffff",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #EAF2F8",
          }}
        >
          <div>
            <Doughnut
              data={userRoles}
              options={{
                cutoutPercentage: 20,
                title: {
                  display: true,
                  text: "User Roles",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            backgroundColor: "#ffffff",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #EAF2F8",
          }}
        >
          <div>
            <Doughnut
              data={vendors}
              options={{
                cutoutPercentage: 20,
                title: {
                  display: true,
                  text: "Vendors",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </Col>
        <Col
          style={{
            backgroundColor: "#ffffff",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #EAF2F8",
          }}
        >
          {" "}
          <div>
            <Line
              data={requests}
              options={{
                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        drawOnChartArea: false,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        drawOnChartArea: false,
                      },
                    },
                  ],
                },
                title: {
                  display: true,
                  text: "Requests",
                  fontSize: 20,
                },
                legend: {
                  display: false,
                  position: "right",
                },
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default MyChart;
