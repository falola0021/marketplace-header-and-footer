import React, { useState } from "react";
import Overview from "./Overview/Overview";
import UserManangement from "./UserManagement/UserManagement";
import Vendor from "./Vendor/Vendor";
import Workflow from "./Workflow/Workflow";
import Category from "./Category/Category";
import Footer from "../../components/Footer/Footer";
import AminNav from "../../components/AdminNav/AdminNav";
import Profile from "../../components/UserProfile/UserProfile";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions/auth";
// import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { Row, Col } from "react-bootstrap";
import Styles from "./Admin.module.css";

function Admin() {
  const dispatch = useDispatch();
  const [changeView, setChangeView] = useState({
    overview: true,
    usermanagement: false,
    profile: false,
    vendor: false,
    category: false,
    requestphase: false,
    workflow: false,
  });
  // const { user: currentUser } = useSelector((state) => state.auth);
  // if (!currentUser) {
  //   return <Redirect to="/" />;
  // }

  const active = `${Styles.sidebaractive} `;
  const inactive = `${Styles.sidebarinactive}  `;

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className={Styles.body}>
        <AminNav />

        <Row>
          <Col sm="2" className="p-0">
            <div className={Styles.sidebarcontainer}>
              <div className={Styles.sidebarmenu}>
                <div
                  onClick={() => {
                    setChangeView({
                      overview: true,
                      usermanagement: false,
                      requestflow: false,
                      vendor: false,
                      category: false,
                      requestphase: false,
                      workflow: false,
                    });
                  }}
                  className={changeView.overview ? active : inactive}
                >
                  <div style={{ color: "#ffd500" }} className="fa fa-qrcode">
                    {" "}
                  </div>
                  <span>Overview</span>
                </div>
                <div
                  onClick={() => {
                    setChangeView({
                      overview: false,
                      usermanagement: true,
                      requestflow: false,
                      vendor: false,
                      category: false,
                      requestphase: false,
                      workflow: false,
                    });
                  }}
                  className={changeView.usermanagement ? active : inactive}
                >
                  <div style={{ color: "#90e0ef" }} className="fa fa-user">
                    {" "}
                  </div>{" "}
                  <span>User Management</span>
                </div>{" "}
                <div
                  onClick={() => {
                    setChangeView({
                      vendor: true,
                      overview: false,
                      usermanagement: false,
                      requestflow: false,
                      category: false,
                      requestphase: false,
                      workflow: false,
                    });
                  }}
                  className={changeView.vendor ? active : inactive}
                >
                  <div style={{ color: "#ee2677" }} className=" fa fa-user-md">
                    {" "}
                  </div>{" "}
                  <span>Vendor</span>
                </div>{" "}
                <div
                  onClick={() => {
                    setChangeView({
                      overview: false,
                      usermanagement: false,
                      requestflow: false,
                      vendor: false,
                      category: true,
                      requestphase: false,
                      workflow: false,
                    });
                  }}
                  className={changeView.category ? active : inactive}
                >
                  <div style={{ color: "#88d498" }} className="fa fa-list-alt">
                    {" "}
                  </div>{" "}
                  <span>Category</span>
                </div>{" "}
                <div
                  onClick={() => {
                    setChangeView({
                      vendor: false,
                      overview: false,
                      usermanagement: false,
                      requestflow: false,
                      category: false,
                      requestphase: true,
                      workflow: false,
                    });
                  }}
                  className={changeView.requestphase ? active : inactive}
                >
                  <div
                    onClick={() => {
                      setChangeView({
                        vendor: false,
                        overview: false,
                        usermanagement: false,
                        requestflow: false,
                        category: false,
                        requestphase: false,
                        workflow: true,
                      });
                    }}
                    style={{ color: "#7161ef" }}
                    className="fa fa-spinner"
                  >
                    {" "}
                  </div>{" "}
                  <span>Request Phase</span>
                </div>{" "}
                <div
                  onClick={() => {
                    setChangeView({
                      vendor: false,
                      overview: false,
                      usermanagement: false,
                      requestflow: false,
                      category: false,
                      requestphase: false,
                      workflow: true,
                    });
                  }}
                  className={changeView.workflow ? active : inactive}
                >
                  <div style={{ color: "#f4acb7" }} className="fas fa-sync-alt">
                    {" "}
                  </div>{" "}
                  <span>Work Flow</span>
                </div>
                <div
                  onClick={() => {
                    setChangeView({
                      vendor: false,
                      overview: false,
                      usermanagement: false,
                      requestflow: false,
                      category: false,
                      requestphase: false,
                      workflow: false,
                      profile: true,
                    });
                  }}
                  className={changeView.profile ? active : inactive}
                >
                  <div
                    style={{ color: "#3b28cc" }}
                    className="fa fa-user-circle"
                  ></div>{" "}
                  <span>Profile</span>
                </div>
                <a href="/" className="nav-link" onClick={logOut}>
                  <div
                    style={{ marginTop: "50px", cursor: "pointer" }}
                    className={inactive}
                  >
                    <div
                      style={{ color: "#eb14c4" }}
                      className="fa fa-sign-out-alt"
                    ></div>{" "}
                    <span>Logout</span>
                  </div>
                </a>
              </div>
            </div>
          </Col>
          <Col>
            {changeView.overview && (
              <div className={Styles.overviewbody}>
                <Overview />
              </div>
            )}
            {changeView.usermanagement && (
              <div className={Styles.overviewbody}>
                <UserManangement />
              </div>
            )}
            {changeView.vendor && (
              <div className={Styles.overviewbody}>
                <Vendor />
              </div>
            )}
            {changeView.category && (
              <div className={Styles.overviewbody}>
                <Category />
              </div>
            )}
            {changeView.workflow && (
              <div className={Styles.overviewbody}>
                <Workflow />
              </div>
            )}
            {changeView.profile && (
              <div className={Styles.overviewbody}>
                <Profile />
              </div>
            )}
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
