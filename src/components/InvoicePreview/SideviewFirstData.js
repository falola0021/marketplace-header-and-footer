import React, { useState, useEffect } from "react";
import Styles from "./InvoicePreview.module.css";
import { Row, Col, Carousel } from "react-bootstrap";
import Placeholder from "../../pages/assets/image-placeholder.png";
import kassandahmobile from "../../pages/assets/kassandahmobilepurple.png";

import moment from "moment";

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
  ThemeProvider,
  Avatar,
  DrawerCloseButton,
  Spinner,
} from "@chakra-ui/core";

function InvoicePreview({ sideview, loading1 }) {
  const [size, setSize] = React.useState("lg");
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log("sideviewvvv", sideview);

  const {
    description,
    amount,
    dueDate,
    ticketDocuments = [""],
    comments = [""],
    status,
    phase = [""],
    phaseStatus,
    items,
    numberOfItems,
    ref,
    user,

    workflow = [""],
  } = sideview || {};
  const { _id = [""] } = user || {};
  let ticketId = _id;

  const { phases = [""] } = workflow || {};
  let phaseIdArray = [];
  for (const fhase of phases) {
    phaseIdArray.push(fhase._id);
  }
  const currentPhaseId = phase._id;

  const positionOfCurrentPhaseId = phaseIdArray.indexOf(currentPhaseId);

  let progress = 0;
  let onePhasePercentage = Number(100 / phaseIdArray.length);
  for (const faze of phaseIdArray) {
    let posOfCurrentPhase = phaseIdArray.indexOf(currentPhaseId);
    let posOffaze = phaseIdArray.indexOf(faze);
    if (posOfCurrentPhase > posOffaze) {
      progress = progress + onePhasePercentage;
    }
    if (phaseStatus == "approved") {
      progress = 100;
    }
    if (phaseStatus == "rejected") {
      progress = 100;
    }
  }

  const handlePreview = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <div className={Styles.reviewbox}>
        <div className={Styles.review}>Review</div>
        {amount && description ? (
          <div
            className={Styles.reviewitems}
            onClick={() => handlePreview(size)}
          >
            <p>
              <span
                style={{ fontSize: "10px" }}
                className={Styles.invoicelabel}
              >
                Request By :{" "}
              </span>
              <span style={{ fontSize: "10px" }} className={Styles.invoicedesc}>
                {user.firstName} <span className="ml-1">{user.lastName}</span>
              </span>
            </p>
            <div className={Styles.invoiceimg}>
              <div
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  overflowY: "scroll",
                }}
              >
                <Carousel>
                  {ticketDocuments.map((docs) => (
                    <Carousel.Item key={docs._id}>
                      <div
                        style={{
                          width: "100%",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          className="d-block w-100"
                          src={docs.document}
                          alt="CHECK FOR FILE"
                        />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

              <div className={Styles.download}>
                <i className="fa fa-download" aria-hidden="true">
                  <span>Download</span>
                </i>
              </div>
              <div className="mt-3">
                <Row className="mt-2">
                  <Col className={Styles.invoicedesc} sm="4">
                    Item(s):
                  </Col>
                  <Col className={Styles.invoicelabel}>{description}</Col>
                </Row>
                <Row className="mt-2">
                  <Col className={Styles.invoicedesc} sm="4">
                    Stutus:
                  </Col>
                  <Col className={Styles.invoicelabel}>{status}</Col>
                </Row>
                <Row className="mt-2">
                  <Col className={Styles.invoicedesc} sm="4">
                    Due-Date:
                  </Col>
                  <Col className={Styles.invoicelabel}>
                    {moment(dueDate).format("DD/MM/YYYY")}
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className={Styles.invoicedesc} sm="4">
                    Amount:
                  </Col>
                  <Col className={Styles.invoicelabel}>₦ {amount}</Col>
                </Row>
              </div>
            </div>
          </div>
        ) : (
          <div className={Styles.centered}>
            {loading1 ? (
              <ThemeProvider>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="lg"
                />
              </ThemeProvider>
            ) : (
              ""
            )}
          </div>
        )}
      </div>

      <ThemeProvider>
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody className={Styles.drawerbody}>
              <img
                src={kassandahmobile}
                alt="logo"
                style={{
                  width: "30px",
                  height: "45px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              />
              <div className={Styles.title}>
                <span className={Styles.ticket}>Ticket</span>
                <span className={Styles.ref}>{ref}</span>
              </div>
              <div>
                <div className={Styles.tablevalues}>
                  <Row>
                    <Col className={Styles.tableInfo}>
                      <label>Item(s)</label>
                      <div>{items}</div>
                    </Col>
                    <Col className={Styles.tableInfo}>
                      {" "}
                      <label>Description</label>
                      <div>{description}</div>
                    </Col>
                    <Col className={Styles.tableInfo}>
                      <label>(₦) Amount</label>
                      <div>{amount}</div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col className={Styles.tableInfo}>
                      <label>Status</label>
                      <div>{status}</div>
                    </Col>
                    <Col className={Styles.tableInfo}>
                      {" "}
                      <label>Number of Item(s)</label>
                      <div>{numberOfItems}</div>
                    </Col>
                    <Col className={Styles.tableInfo}>
                      <label>Due-Date</label>
                      <div>{moment(dueDate).format("DD/MM/YYYY")}</div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col className={Styles.tableInfo}>
                      <label>Requester's Remark: </label>

                      {comments
                        .filter((comment) => {
                          if (comment.user) {
                            return comment.user._id === ticketId;
                          } else {
                            return;
                          }
                          // return comment.user._id === ticketId;
                        })
                        .map((comment) => {
                          return (
                            <span style={{ fontSize: "10px" }} className="pl-1">
                              {comment.comment}
                            </span>
                          );
                        })}
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col sm={7}>
                      <div className={Styles.title}>
                        <span className={Styles.document}>Document(s)</span>
                      </div>{" "}
                      <Carousel className="mt-3">
                        {ticketDocuments.map((docs) => (
                          <Carousel.Item key={docs._id}>
                            <div
                              style={{
                                maxHeight: "250px",
                                overflowY: "scroll",
                                minHeight: "250px",
                                cursor: "pointer",
                              }}
                            >
                              <img
                                className="d-block w-100"
                                src={docs.document}
                                alt="First slide"
                              />
                            </div>
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </Col>
                    <Col>
                      {" "}
                      <div className={Styles.title}>
                        <span className={Styles.document}>Approvers</span>
                      </div>{" "}
                      {phases.map((phase, index) => (
                        <div className={Styles.approveravater}>
                          {" "}
                          <Row>
                            <Col sm="2">
                              <Avatar
                                size="sm"
                                name={
                                  phase.approver
                                    ? phase.approver.firstName +
                                      " " +
                                      phase.approver.lastName
                                    : ""
                                }
                                src="https://bit.ly/tioluwani-kolawole"
                              />
                            </Col>
                            <Col style={{ fontSize: "14px" }} sm="8">
                              {phase.approver
                                ? phase.approver.firstName +
                                  " " +
                                  phase.approver.lastName
                                : ""}
                            </Col>
                            <Col sm="2">
                              {phaseStatus == "rejected" &&
                              positionOfCurrentPhaseId === index ? (
                                <div
                                  style={{ color: "red" }}
                                  className="fa fa-circle"
                                ></div>
                              ) : positionOfCurrentPhaseId > index ||
                                status == "approved" ? (
                                <div
                                  style={{ color: "green" }}
                                  className="fa fa-circle"
                                ></div>
                              ) : currentPhaseId === phase._id ? (
                                <div
                                  style={{ color: "rgb(255, 208, 0)" }}
                                  className="fa fa-circle"
                                ></div>
                              ) : (
                                <div
                                  style={{ color: "#f3f3f3" }}
                                  className="fa fa-circle"
                                ></div>
                              )}
                            </Col>
                          </Row>
                        </div>
                      ))}
                      <div style={{ textAlign: "center" }} className="mt-3">
                        <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                          Progress:
                        </span>
                        <span style={{ fontSize: "14px", paddingLeft: "5px" }}>
                          {Math.round(progress)}%
                        </span>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className={Styles.duplicate}>Comment(s) </div>
                <div>
                  {comments
                    .filter((comment) => {
                      if (comment.user) {
                        return comment.user._id !== ticketId;
                      } else {
                        return;
                      }
                    })
                    .map((comment) => {
                      return (
                        <span>
                          {
                            <Row className="mt-2">
                              <Col
                                style={{
                                  fontSize: "15px",
                                  transform: "initial",
                                }}
                                // className=""
                                sm="4"
                              >
                                <span className="">
                                  {comment.user.firstName}
                                </span>
                                <span className="pl-2 pr-1" key={comment._id}>
                                  {comment.user.lastName}
                                </span>
                                :
                              </Col>
                              <Col
                                style={{ fontSize: "14px" }}
                                className="pl-0"
                              >
                                <span className="pl-1">{comment.comment}</span>
                              </Col>
                            </Row>
                          }
                        </span>
                      );
                    })}

                  <div style={{ marginBottom: "100px" }}></div>
                </div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </ThemeProvider>
    </>
  );
}

export default InvoicePreview;
