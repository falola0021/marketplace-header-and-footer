import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import Styles from "./InvoicePreview.module.css";
import { Row, Col, Carousel } from "react-bootstrap";
import Placeholder from "../../pages/assets/image-placeholder.png";
import kassandahmobile from "../../pages/assets/kassandahmobilepurple.png";
import Form1 from "react-validation/build/form";
import TicketDataService from "../../services/ticket.service";
import Textarea from "react-validation/build/textarea";
import AuthService from "../../services/auth.service";
import swDev from "../../swDev";

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

const required = (value) => {
  if (!value) {
    return (
      <div
        style={{ fontSize: "12px", padding: "0" }}
        className="alert alert-danger"
        role="alert"
      >
        State your reason for deline
      </div>
    );
  }
};

const InvoicePreview = forwardRef(({ sideview, loading1 }, ref) => {
  const currentUser = AuthService.getCurrentUser();
  let userRoles = currentUser.roles;

  // function InvoicePreview({ sideview, loading1 }) {
  const [size, setSize] = React.useState("lg");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const clickedSideView = { ...sideview };
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const checkBtn = useRef();
  //comment
  const [approverComment, setApproverComment] = useState("");
  const [rejectComment, setRejectComment] = useState("");
  const [approveCommentBox, setApproveCommentBox] = useState({
    button: true,
    textBox: false,
  });

  const newObj = {
    description: clickedSideView[2],
    amount: clickedSideView[4],
    dueDate: clickedSideView[10],
    ticketDocuments: clickedSideView[11],
    items: clickedSideView[3],
    comments: clickedSideView[12],
    workflow: clickedSideView[15],
    ref: clickedSideView[13],
    status: clickedSideView[14],
    phase: clickedSideView[18],
    phaseStatus: clickedSideView[16],
    numberOfItems: clickedSideView[17],
    user: clickedSideView[19],
    ticketId: clickedSideView[20],
  };

  const ticketID = newObj.ticketId;

  let currentPhaseIdClicked = function () {
    if (newObj.phase) {
      return newObj.phase.approver;
    } else {
      return "";
    }
  };

  let clickWorkflow = function () {
    if (newObj.workflow) {
      return newObj.workflow;
    } else {
      return "";
    }
  };
  let gotWorkflow = clickWorkflow();

  let approverComm = function () {
    if (newObj.comments) {
      return newObj.comments
        .filter((comment) => {
          if (comment.user) {
            return comment.user._id !== newObj.user._id;
            // return comment.user._id !== ticketId;
          } else {
            return;
          }
        })
        .map((apprcomment) => {
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
                    <span className="">{apprcomment.user.firstName}</span>
                    <span className="pl-2 pr-1" key={apprcomment._id}>
                      {apprcomment.user.lastName}
                    </span>
                    :
                  </Col>
                  <Col style={{ fontSize: "14px" }} className="pl-0">
                    <span className="pl-1">{apprcomment.comment}</span>
                  </Col>
                </Row>
              }
            </span>
          );
        });
    } else {
      return;
    }
  };

  let requesterComm = function () {
    if (newObj.comments) {
      return newObj.comments
        .filter((comment) => {
          if (comment.user) {
            return comment.user._id === newObj.user._id;
          } else {
            return;
          }
        })
        .map((comment) => {
          return (
            <span style={{ fontSize: "10px" }} className="pl-1">
              {comment.comment}
            </span>
          );
        });
    } else {
      return;
    }
  };

  let phaseIdArrayClick = [];
  if (newObj.workflow) {
    for (const fhases of newObj.workflow.phases) {
      phaseIdArrayClick.push(fhases._id);
    }
  }

  let gottenPhaseId = function () {
    if (newObj.phase) {
      return newObj.phase._id;
    } else {
      return "";
    }
  };
  let currentPhaseIdClick = gottenPhaseId();
  const positionOfCurrentPhaseIdClick = phaseIdArrayClick.indexOf(
    currentPhaseIdClick
  );

  let progressClick = 0;
  let onePhasePercentageClick = Number(100 / phaseIdArrayClick.length);
  for (const fazes of phaseIdArrayClick) {
    // let posOfCurrentPhase = phaseIdArray.indexOf(currentPhaseId);
    let posOffazeClick = phaseIdArrayClick.indexOf(fazes);
    if (positionOfCurrentPhaseIdClick > posOffazeClick) {
      progressClick = progressClick + onePhasePercentageClick;
    }
    if (newObj.phaseStatus == "approved") {
      progressClick = 100;
    }
    if (newObj.phaseStatus == "rejected") {
      progressClick = 100;
    }
  }

  let approverClick = function () {
    if (newObj.workflow) {
      return gotWorkflow.phases.map((phase, index) => (
        <div className={Styles.approveravater}>
          {" "}
          <Row>
            <Col xs="2" sm="2">
              <Avatar
                size="sm"
                name={
                  phase.approver
                    ? phase.approver.firstName + " " + phase.approver.lastName
                    : ""
                }
                src="https://bit.ly/tioluwani-kolawole"
              />
            </Col>
            <Col style={{ fontSize: "14px" }} xs="8" sm="8">
              {phase.approver
                ? phase.approver.firstName + " " + phase.approver.lastName
                : ""}
            </Col>
            <Col xs="1" sm="2">
              {newObj.phaseStatus == "rejected" &&
              positionOfCurrentPhaseIdClick === index ? (
                <div style={{ color: "red" }} className="fa fa-circle"></div>
              ) : positionOfCurrentPhaseIdClick > index ||
                newObj.status == "approved" ? (
                <div style={{ color: "green" }} className="fa fa-circle"></div>
              ) : currentPhaseIdClick === phase._id ? (
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
      ));
    } else {
      return;
    }
  };

  // const refrence = sideview.ref;
  var refrence = function () {
    if (sideview) {
      return sideview.ref;
    } else {
      return;
    }
  };

  //  first ticked and clicked ticked id
  const firstTicketId = function () {
    if (sideview || ticketID) {
      // alert(sideview._id);
      return sideview._id || ticketID;
    } else {
      return;
    }
  };

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
    user,

    workflow = [""],
  } = sideview || {};
  const { _id = [""] } = user || {};
  let userId = _id;

  const { phases = [""] } = workflow || {};

  let phaseIdArray = [];
  for (const fhase of phases) {
    phaseIdArray.push(fhase._id);
  }
  const currentPhaseId = phase._id;
  const currentApprover = phase.approver;

  const positionOfCurrentPhaseId = phaseIdArray.indexOf(currentPhaseId);

  //web push

  // function myFunction() {
  //   if (currentUser.userId == currentApprover) {
  //     return swDev();
  //   }
  // }
  swDev();

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

  let firstTicketClick = function () {
    if (amount) {
      return phases.map((phase, index) => (
        <div className={Styles.approveravater}>
          {" "}
          <Row>
            <Col xs="2" sm="2">
              <Avatar
                size="sm"
                name={
                  phase.approver
                    ? phase.approver.firstName + " " + phase.approver.lastName
                    : ""
                }
                src="https://bit.ly/tioluwani-kolawole"
              />
            </Col>
            <Col style={{ fontSize: "14px" }} xs="8" sm="8">
              {phase.approver
                ? phase.approver.firstName + " " + phase.approver.lastName
                : ""}
            </Col>
            <Col xs="1" sm="2">
              {phaseStatus == "rejected" &&
              positionOfCurrentPhaseId === index ? (
                <div style={{ color: "red" }} className="fa fa-circle"></div>
              ) : positionOfCurrentPhaseId > index || status == "approved" ? (
                <div style={{ color: "green" }} className="fa fa-circle"></div>
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
      ));
    } else {
      return;
    }
  };

  let firstTicketCommReq = function () {
    if (comments) {
      return comments
        .filter((comment) => {
          if (comment.user) {
            return comment.user._id === userId;
          } else {
            return;
          }
        })
        .map((comment) => {
          return (
            <span style={{ fontSize: "10px" }} className="pl-1">
              {comment.comment}
            </span>
          );
        });
    } else {
      return;
    }
  };

  let firstTicketCommAppr = function () {
    if (comments) {
      return comments
        .filter((comment) => {
          if (comment.user) {
            return comment.user._id !== userId;
          } else {
            return;
          }
        })
        .map((apprcomment) => {
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
                    <span className="">{apprcomment.user.firstName}</span>
                    <span className="pl-2 pr-1" key={apprcomment._id}>
                      {apprcomment.user.lastName}
                    </span>
                    :
                  </Col>
                  <Col style={{ fontSize: "14px" }} className="pl-0">
                    <span className="pl-1">{apprcomment.comment}</span>
                  </Col>
                </Row>
              }
            </span>
          );
        });
    } else {
      return;
    }
  };

  const handlePreview = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  useImperativeHandle(ref, () => ({
    childFunction() {
      handlePreview();
    },
  }));

  const onChangeApproveComment = (e) => {
    const approveComment = e.target.value;
    setApproverComment(approveComment);
  };

  const handleApproveComment = (e) => {
    e.preventDefault();

    setSuccessful(false);
    setLoading(true);

    TicketDataService.approveTicket(firstTicketId(), approverComment)
      .then((response) => {
        if (response.data.status) {
          setMessage("sucessfully approved");
          setSuccessful(true);
          setLoading(false);

          setTimeout(function () {
            window.location.reload();
          }, 500);
        } else {
          setMessage("sucessfull");
          // swDev();
        }
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
        setTimeout(function () {
          window.location.reload();
        }, 500);
      });
  };

  const [declineCommentBox, setDeclineCommentBox] = useState({
    button: true,
    textBox: false,
  });
  const onChangeRejectComment = (e) => {
    const rejectComment = e.target.value;
    setRejectComment(rejectComment);
  };

  const handleRejectComment = (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    form.current.validateAll();
    TicketDataService.rejectTicket(firstTicketId(), rejectComment).then(
      (response) => {
        if (response.data.status) {
          setMessage("sucessfully declined");
          setSuccessful(true);
          setLoading(false);
          setTimeout(function () {
            window.location.reload();
          }, 500);
        } else {
          setMessage("sucessfull");
        }
      },
      (error) => {
        setMessage(error.response.data.message);
        setLoading(false);
        setTimeout(function () {
          window.location.reload();
        }, 500);
      }
    );
  };

  return (
    <>
      <div className={Styles.reviewbox}>
        <div className={Styles.review}>Review</div>
        {/* for clicked object */}
        {newObj.user ? (
          <div className={Styles.reviewitems}>
            <p onClick={() => handlePreview(size)}>
              <span
                style={{ fontSize: "10px" }}
                className={Styles.invoicelabel}
              >
                Request By :{" "}
              </span>
              <span style={{ fontSize: "10px" }} className={Styles.invoicedesc}>
                {newObj.user.firstName}{" "}
                <span className="ml-1">{newObj.user.lastName}</span>
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
                <Carousel onClick={() => handlePreview(size)}>
                  {newObj.ticketDocuments.map((docs) => (
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

              <div
                onClick={() => handlePreview(size)}
                className={Styles.download}
              >
                <i className="fa fa-download" aria-hidden="true">
                  <span>Download</span>
                </i>
              </div>
              <div onClick={() => handlePreview(size)} className="mt-3">
                <Row className="mt-2">
                  <Col className={Styles.invoicedesc} sm="4">
                    Item(s):
                  </Col>
                  <Col className={Styles.invoicelabel}>
                    {newObj.description}
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className={Styles.invoicedesc} sm="4">
                    Stutus:
                  </Col>
                  <Col className={Styles.invoicelabel}>{newObj.status}</Col>
                </Row>
                <Row className="mt-2">
                  <Col className={Styles.invoicedesc} sm="4">
                    Due-Date:
                  </Col>
                  <Col className={Styles.invoicelabel}>
                    {moment(newObj.dueDate).format("DD/MM/YYYY")}
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className={Styles.invoicedesc} sm="4">
                    Amount:
                  </Col>
                  <Col className={Styles.invoicelabel}>₦ {newObj.amount}</Col>
                </Row>
              </div>
              {userRoles.includes("approver") ? (
                <Row className="mt-3">
                  {newObj.phaseStatus == "approved" ||
                  newObj.phaseStatus == "rejected" ||
                  currentPhaseIdClicked() !== currentUser.userId ? (
                    ""
                  ) : (
                    <>
                      {declineCommentBox.button && (
                        <Col>
                          {approveCommentBox.button && (
                            <button
                              onClick={() => {
                                setApproveCommentBox({
                                  button: false,
                                  textBox: true,
                                });
                              }}
                              className={Styles.approve}
                            >
                              Approve
                            </button>
                          )}
                        </Col>
                      )}
                      {approveCommentBox.button && (
                        <Col>
                          {declineCommentBox.button && (
                            <button
                              onClick={() => {
                                setDeclineCommentBox({
                                  button: false,
                                  textBox: true,
                                });
                              }}
                              className={Styles.decline}
                            >
                              Decline
                            </button>
                          )}
                        </Col>
                      )}
                    </>
                  )}
                </Row>
              ) : (
                ""
              )}

              {approveCommentBox.textBox && (
                <Form1 onSubmit={handleApproveComment} ref={form}>
                  <span
                    onClick={() => {
                      setApproveCommentBox({
                        button: true,
                        textBox: false,
                      });
                    }}
                    style={{
                      float: "right",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                  >
                    x
                  </span>

                  <textarea
                    type="text"
                    name="approveComment"
                    // value={approveComment}
                    onChange={onChangeApproveComment}
                    placeholder="Make a comment(optional)"
                    className={Styles.commentBox}
                  ></textarea>
                  <div style={{ textAlign: "center" }}>
                    <button className={Styles.approve}>
                      {loading && (
                        <span
                          style={{
                            width: "13px",
                            height: "13px",
                            marginRight: "10px",
                          }}
                          className="spinner-border spinner-border"
                        ></span>
                      )}
                      Approve
                    </button>
                  </div>
                  {message && (
                    <div className="form-group mt-2">
                      <div
                        style={{
                          fontSize: "12px",
                          paddingTop: "0",
                          paddingBottom: "0",
                          textAlign: "center",
                        }}
                        className={
                          successful
                            ? "alert alert-success"
                            : "alert alert-danger"
                        }
                        role="alert"
                      >
                        {message}
                      </div>
                    </div>
                  )}
                </Form1>
              )}
              {declineCommentBox.textBox && (
                <Form1 ref={form} onSubmit={handleRejectComment}>
                  <span
                    onClick={() => {
                      setDeclineCommentBox({
                        button: true,
                        textBox: false,
                      });
                    }}
                    style={{
                      float: "right",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                  >
                    x
                  </span>

                  <Textarea
                    type="text"
                    name="rejectComment"
                    onChange={onChangeRejectComment}
                    validations={[required]}
                    placeholder="Make a  Comment (compulsory)"
                    className={Styles.commentBox}
                    required
                  ></Textarea>
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <button className={Styles.decline}>
                      {loading && (
                        <span
                          style={{
                            width: "13px",
                            height: "13px",
                            marginRight: "10px",
                          }}
                          className="spinner-border spinner-border"
                        ></span>
                      )}
                      decline
                    </button>
                  </div>
                  {message && (
                    <div className="form-group mt-2">
                      <div
                        style={{
                          fontSize: "12px",
                          paddingTop: "0",
                          paddingBottom: "0",
                          textAlign: "center",
                        }}
                        className={
                          successful
                            ? "alert alert-success"
                            : "alert alert-danger"
                        }
                        role="alert"
                      >
                        {message}
                      </div>
                    </div>
                  )}
                </Form1>
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        {/* for first  ticket */}
        {amount && description ? (
          <div className={Styles.reviewitems}>
            <p>
              <span
                style={{ fontSize: "10px" }}
                className={Styles.invoicelabel}
              >
                Request By :{" "}
              </span>
              <span style={{ fontSize: "10px" }} className={Styles.invoicedesc}>
                {/* {user.firstName} <span className="ml-1">{user.lastName}</span> */}
              </span>
            </p>
            <div className={Styles.invoiceimg}>
              <div
                onClick={() => handlePreview(size)}
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
              <div onClick={() => handlePreview(size)} className="mt-3">
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
              {userRoles.includes("approver") ? (
                <Row className="mt-3">
                  {phaseStatus == "approved" ||
                  phaseStatus == "rejected" ||
                  currentApprover !== currentUser.userId ? (
                    ""
                  ) : (
                    <>
                      {declineCommentBox.button && (
                        <Col>
                          {approveCommentBox.button && (
                            <button
                              onClick={() => {
                                setApproveCommentBox({
                                  button: false,
                                  textBox: true,
                                });
                              }}
                              className={Styles.approve}
                            >
                              Approve
                            </button>
                          )}
                        </Col>
                      )}
                      {approveCommentBox.button && (
                        <Col>
                          {declineCommentBox.button && (
                            <button
                              onClick={() => {
                                setDeclineCommentBox({
                                  button: false,
                                  textBox: true,
                                });
                              }}
                              className={Styles.decline}
                            >
                              Decline
                            </button>
                          )}
                        </Col>
                      )}
                    </>
                  )}
                </Row>
              ) : (
                ""
              )}
            </div>

            {approveCommentBox.textBox && (
              <Form1 onSubmit={handleApproveComment} ref={form}>
                <span
                  onClick={() => {
                    setApproveCommentBox({
                      button: true,
                      textBox: false,
                    });
                  }}
                  style={{
                    float: "right",
                    fontSize: "25px",
                    cursor: "pointer",
                  }}
                >
                  x
                </span>

                <textarea
                  type="text"
                  name="approveComment"
                  // value={approveComment}
                  onChange={onChangeApproveComment}
                  placeholder="Make a comment(optional)"
                  className={Styles.commentBox}
                ></textarea>
                <div style={{ textAlign: "center" }}>
                  <button className={Styles.approve}>
                    {loading && (
                      <span
                        style={{
                          width: "13px",
                          height: "13px",
                          marginRight: "10px",
                        }}
                        className="spinner-border spinner-border"
                      ></span>
                    )}
                    Approve
                  </button>
                </div>
                {message && (
                  <div className="form-group mt-2">
                    <div
                      style={{
                        fontSize: "12px",
                        paddingTop: "0",
                        paddingBottom: "0",
                        textAlign: "center",
                      }}
                      className={
                        successful
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
                      {message}
                    </div>
                  </div>
                )}
              </Form1>
            )}
            {declineCommentBox.textBox && (
              <Form1 ref={form} onSubmit={handleRejectComment}>
                <span
                  onClick={() => {
                    setDeclineCommentBox({
                      button: true,
                      textBox: false,
                    });
                  }}
                  style={{
                    float: "right",
                    fontSize: "25px",
                    cursor: "pointer",
                  }}
                >
                  x
                </span>

                <Textarea
                  type="text"
                  name="rejectComment"
                  onChange={onChangeRejectComment}
                  validations={[required]}
                  placeholder="Make a  Comment (compulsory)"
                  className={Styles.commentBox}
                  required
                ></Textarea>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <button className={Styles.decline}>
                    {loading && (
                      <span
                        style={{
                          width: "13px",
                          height: "13px",
                          marginRight: "10px",
                        }}
                        className="spinner-border spinner-border"
                      ></span>
                    )}
                    decline
                  </button>
                </div>
                {message && (
                  <div className="form-group mt-2">
                    <div
                      style={{
                        fontSize: "12px",
                        paddingTop: "0",
                        paddingBottom: "0",
                        textAlign: "center",
                      }}
                      className={
                        successful
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
                      {message}
                    </div>
                  </div>
                )}
              </Form1>
            )}
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
                <span className={Styles.ref}>{refrence() || newObj.ref}</span>
              </div>
              <div>
                <div className={Styles.tablevalues}>
                  <Row>
                    <Col md="4" xs="6" className={Styles.tableInfo}>
                      <label>Item(s)</label>
                      <div>{items || newObj.items}</div>
                    </Col>
                    <Col md="4" xs="6" className={Styles.tableInfo}>
                      {" "}
                      <label>Description</label>
                      <div>{description || newObj.description}</div>
                    </Col>
                    <Col md="4" xs="6" className={Styles.tableInfo}>
                      <label>(₦) Amount</label>
                      <div>{amount || newObj.amount}</div>
                    </Col>

                    <Col md="4" xs="6" className={Styles.tableInfo}>
                      <label>Status</label>
                      <div>{status || newObj.status}</div>
                    </Col>
                    <Col md="4" xs="6" className={Styles.tableInfo}>
                      {" "}
                      <label>Number of Item(s)</label>
                      <div>{numberOfItems || newObj.numberOfItems}</div>
                    </Col>
                    <Col md="4" xs="6" className={Styles.tableInfo}>
                      <label>Due-Date</label>
                      <div>
                        {moment(dueDate || newObj.dueDate).format("DD/MM/YYYY")}
                      </div>
                    </Col>

                    <Col md="4" xs="12" className={Styles.tableInfo}>
                      <label>Requester's Remark: </label>
                      <div>
                        {" "}
                        {requesterComm()}
                        {firstTicketCommReq()}
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col sm={7}>
                      <div className={Styles.title}>
                        <span className={Styles.document}>Document(s)</span>
                      </div>{" "}
                      <Carousel className="mt-3">
                        {/* clicked document */}
                        {newObj.ticketDocuments
                          ? newObj.ticketDocuments.map((docs) => (
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
                            ))
                          : ""}

                        {/* first document */}
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
                      {/* click value */}
                      {approverClick()}
                      {firstTicketClick()}
                      <div style={{ textAlign: "center" }} className="mt-3">
                        <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                          Progress:
                        </span>
                        {amount ? (
                          <span
                            style={{ fontSize: "14px", paddingLeft: "5px" }}
                          >
                            {Math.round(progress)}%
                          </span>
                        ) : (
                          ""
                        )}
                        {newObj.phaseStatus ? (
                          <span
                            style={{ fontSize: "14px", paddingLeft: "5px" }}
                          >
                            {Math.round(progressClick)}%
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      {userRoles.includes("approver") ? (
                        <Row className="mt-3">
                          {phaseStatus == "approve" ||
                          phaseStatus == "rejected" ||
                          newObj.phaseStatus == "approved" ||
                          newObj.phaseStatus == "rejected" ||
                          // currentApprover !== currentUser.userId
                          currentPhaseIdClicked() !== currentUser.userId ? (
                            ""
                          ) : (
                            <>
                              {declineCommentBox.button && (
                                <Col>
                                  {approveCommentBox.button && (
                                    <button
                                      onClick={() => {
                                        setApproveCommentBox({
                                          button: false,
                                          textBox: true,
                                        });
                                      }}
                                      className={Styles.approve}
                                    >
                                      Approve
                                    </button>
                                  )}
                                </Col>
                              )}
                              {approveCommentBox.button && (
                                <Col>
                                  {declineCommentBox.button && (
                                    <button
                                      onClick={() => {
                                        setDeclineCommentBox({
                                          button: false,
                                          textBox: true,
                                        });
                                      }}
                                      className={Styles.decline}
                                    >
                                      Decline
                                    </button>
                                  )}
                                </Col>
                              )}
                            </>
                          )}
                        </Row>
                      ) : (
                        ""
                      )}
                      {userRoles.includes("approver") ? (
                        <Row className="mt-3">
                          {phaseStatus == "approve" ||
                          phaseStatus == "rejected" ||
                          newObj.phaseStatus == "approved" ||
                          newObj.phaseStatus == "rejected" ||
                          currentApprover !== currentUser.userId ? (
                            ""
                          ) : (
                            <>
                              {declineCommentBox.button && (
                                <Col>
                                  {approveCommentBox.button && (
                                    <button
                                      onClick={() => {
                                        setApproveCommentBox({
                                          button: false,
                                          textBox: true,
                                        });
                                      }}
                                      className={Styles.approve}
                                    >
                                      Approve
                                    </button>
                                  )}
                                </Col>
                              )}
                              {approveCommentBox.button && (
                                <Col>
                                  {declineCommentBox.button && (
                                    <button
                                      onClick={() => {
                                        setDeclineCommentBox({
                                          button: false,
                                          textBox: true,
                                        });
                                      }}
                                      className={Styles.decline}
                                    >
                                      Decline
                                    </button>
                                  )}
                                </Col>
                              )}
                            </>
                          )}
                        </Row>
                      ) : (
                        ""
                      )}
                      {approveCommentBox.textBox && (
                        <Form1 onSubmit={handleApproveComment} ref={form}>
                          <span
                            onClick={() => {
                              setApproveCommentBox({
                                button: true,
                                textBox: false,
                              });
                            }}
                            style={{
                              float: "right",
                              fontSize: "25px",
                              cursor: "pointer",
                            }}
                          >
                            x
                          </span>

                          <textarea
                            type="text"
                            name="approveComment"
                            // value={approveComment}
                            onChange={onChangeApproveComment}
                            placeholder="Make a comment(optional)"
                            className={Styles.commentBox}
                          ></textarea>
                          <div style={{ textAlign: "center" }}>
                            <button className={Styles.approve}>
                              {loading && (
                                <span
                                  style={{
                                    width: "13px",
                                    height: "13px",
                                    marginRight: "10px",
                                  }}
                                  className="spinner-border spinner-border"
                                ></span>
                              )}
                              Approve
                            </button>
                          </div>
                          {message && (
                            <div className="form-group mt-2">
                              <div
                                style={{
                                  fontSize: "12px",
                                  paddingTop: "0",
                                  paddingBottom: "0",
                                  textAlign: "center",
                                }}
                                className={
                                  successful
                                    ? "alert alert-success"
                                    : "alert alert-danger"
                                }
                                role="alert"
                              >
                                {message}
                              </div>
                            </div>
                          )}
                        </Form1>
                      )}
                      {declineCommentBox.textBox && (
                        <Form1 ref={form} onSubmit={handleRejectComment}>
                          <span
                            onClick={() => {
                              setDeclineCommentBox({
                                button: true,
                                textBox: false,
                              });
                            }}
                            style={{
                              float: "right",
                              fontSize: "25px",
                              cursor: "pointer",
                            }}
                          >
                            x
                          </span>

                          <Textarea
                            type="text"
                            name="rejectComment"
                            onChange={onChangeRejectComment}
                            validations={[required]}
                            placeholder="Make a  Comment (compulsory)"
                            className={Styles.commentBox}
                            required
                          ></Textarea>
                          <div
                            style={{
                              textAlign: "center",
                            }}
                          >
                            <button className={Styles.decline}>
                              {loading && (
                                <span
                                  style={{
                                    width: "13px",
                                    height: "13px",
                                    marginRight: "10px",
                                  }}
                                  className="spinner-border spinner-border"
                                ></span>
                              )}
                              decline
                            </button>
                          </div>
                          {message && (
                            <div className="form-group mt-2">
                              <div
                                style={{
                                  fontSize: "12px",
                                  paddingTop: "0",
                                  paddingBottom: "0",
                                  textAlign: "center",
                                }}
                                className={
                                  successful
                                    ? "alert alert-success"
                                    : "alert alert-danger"
                                }
                                role="alert"
                              >
                                {message}
                              </div>
                            </div>
                          )}
                        </Form1>
                      )}
                    </Col>
                  </Row>
                </div>
                <div className={Styles.duplicate}>Comment(s) </div>
                <div>
                  {approverComm()}
                  {firstTicketCommAppr()}
                  <div style={{ marginBottom: "100px" }}></div>
                </div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </ThemeProvider>
    </>
  );
});

export default InvoicePreview;
