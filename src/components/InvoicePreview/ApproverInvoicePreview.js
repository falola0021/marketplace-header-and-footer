import React, { useState, useRef } from "react";
import Styles from "./InvoicePreview.module.css";
import { Row, Col, Carousel } from "react-bootstrap";
import Form1 from "react-validation/build/form";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CheckButton from "react-validation/build/button";
import Textarea from "react-validation/build/textarea";
import moment from "moment";
import TicketDataService from "../../services/ticket.service";
import Placeholder from "../../pages/assets/image-placeholder.png";
import kassandahmobile from "../../pages/assets/kassandahmobilepurple.png";
import PossibleDuplicate from "../PossibleDuplicateTable/PossibleDuplicateTable";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
  ThemeProvider,
  Avatar,
} from "@chakra-ui/core";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        State your reason for deline
      </div>
    );
  }
};

function InvoicePreview({ preview, drawerInfo, sideview }) {
  const {
    description,
    amount,
    dueDate,
    ticketDocuments = [""],
    comments = [""],
    phase = [""],
    status,
    phaseStatus,
    items,
    numberOfItems,
    ref,
    workflow = [""],
  } = sideview || {};

  const { phases = [""] } = workflow || {};
  let phaseIdArray = [];
  for (const fhase of phases) {
    phaseIdArray.push(fhase._id);
  }
  const currentPhaseId = phase._id;

  const positionOfCurrentPhaseId = phaseIdArray.indexOf(currentPhaseId);

  const positivePosition = Math.abs(positionOfCurrentPhaseId);
  const addOneToAll = positivePosition + 1;
  const onePhasePercentage = Number(100 / addOneToAll);

  const form = useRef();
  const checkBtn = useRef();
  const [size, setSize] = React.useState("lg");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [approveComment, setApproveComment] = useState("");
  const [rejectComment, setRejectComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const handlePreview = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const [approveCommentBox, setApproveCommentBox] = useState({
    button: true,
    textBox: false,
  });

  const [declineCommentBox, setDeclineCommentBox] = useState({
    button: true,
    textBox: false,
  });

  const onChangeApproveComment = (e) => {
    const approveComment = e.target.value;
    setApproveComment(approveComment);
  };
  const handleApproveComment = (e) => {
    e.preventDefault();
    console.log("the sideview", sideview);
    setSuccessful(false);
    setLoading(true);

    TicketDataService.approveTicket(sideview._id).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        setLoading(false);
        // retrievePhases();
        setLoading(false);
        setSuccessful(true);

        setTimeout(function () {
          window.location.reload();
        }, 500);
      },
      (error) => {
        const resMessage = error.response.data.message;

        error.toString();
        setSuccessful(false);
        setLoading(false);
        setMessage(error.response.data.message);
      }
    );
  };

  const onChangeRejectComment = (e) => {
    const rejectComment = e.target.value;
    setRejectComment(rejectComment);
  };
  const handleRejectComment = (e) => {
    e.preventDefault();
    TicketDataService.rejectTicket(sideview._id).then(
      (response) => {
        setMessage(response.data.message);
        // retrievePhases();
        setLoading(false);
        setSuccessful(true);
        setTimeout(function () {
          window.location.reload();
        }, 500);
      },
      (error) => {
        const resMessage = error.response.data.message;

        error.toString();
        setSuccessful(false);
        setLoading(false);
        setMessage(error.response.data.message);
        console.log(error.response.data.message);
      }
    );
  };
  return (
    <>
      <div style={{ backgroundColor: "#f8fcfd" }} className={Styles.reviewbox}>
        <div className={Styles.review}>Review</div>
        {description && amount ? (
          <div className={Styles.reviewitems}>
            <p>
              <span className={Styles.invoicelabel}>Request By :</span>
              <span className={Styles.invoicedesc}> Requester Name</span>
            </p>

            <div className={Styles.invoiceimg}>
              <span onClick={() => handlePreview(size)}>
                {/* {ticketDocuments.document ? (
                <img
                  style={{ width: "100%", height: "50%" }}
                  src={
                    ticketDocuments[0].document
                      ? ticketDocuments[0].document
                      : Placeholder
                  }
                  alt="CHECK FOR FILE"
                />
              ) : (
                ""
              )} */}
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
              </span>
              <div className="mt-3">
                <span onClick={() => handlePreview(size)}>
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
                </span>

                {phaseStatus === "pending" ? (
                  <Row className="mt-3">
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
                        marginTop: "10px",
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

                    <button className={Styles.approve}>
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      Approve
                    </button>

                    {message && (
                      <div className="form-group mt-2">
                        <div
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

                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
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
                        marginTop: "10px",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                    >
                      x
                    </span>

                    <Textarea
                      type="text"
                      name="rejectComment"
                      // value={rejectComment}
                      onChange={onChangeRejectComment}
                      validations={[required]}
                      placeholder="Make a  Comment (compulsory)"
                      className={Styles.commentBox}
                    ></Textarea>
                    <button className={Styles.decline}>Decline</button>
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                  </Form1>
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <ThemeProvider>
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerContent>
            <DrawerBody className={Styles.drawerbody}>
              <img
                src={kassandahmobile}
                alt="logo"
                style={{
                  width: "30px",
                  height: "45px",
                  marginTop: "10px",
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
                      <label>Department</label>
                      {/* <div>{user.firstName}</div> */}
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
                      <label>Comment(s): </label>
                      {comments.map((comment) => (
                        <span className="pl-1" key={comment._id}>
                          {comment.comment}
                        </span>
                      ))}
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col sm={7}>
                      <div className={Styles.title}>
                        <span className={Styles.document}>Document(s)</span>
                      </div>{" "}
                      {/* <Carousel>
                        {ticketDocuments.map((docs) => (
                          <Carousel.Item key={docs._id}>
                            <img
                              className="d-block w-100"
                              src={docs.document}
                              alt="First slide"
                            />
                          </Carousel.Item>
                        ))}
                        
                      </Carousel> */}
                      <Carousel className="mt-3">
                        {ticketDocuments.map((docs) => (
                          <Carousel.Item key={docs._id}>
                            <div
                              style={{
                                maxHeight: "250px",
                                overflowY: "scroll",
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
                              ) : positionOfCurrentPhaseId > index ? (
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
                          {addOneToAll == 1 || 0 ? 0 : onePhasePercentage}%
                        </span>
                      </div>
                      <Row className="mt-3">
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
                      </Row>
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
                                <span className="spinner-border spinner-border-sm"></span>
                              )}
                              Approve
                            </button>
                          </div>
                          {message && (
                            <div className="form-group mt-2">
                              <div
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

                          <CheckButton
                            style={{ display: "none" }}
                            ref={checkBtn}
                          />
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
                            // value={rejectComment}
                            onChange={onChangeRejectComment}
                            validations={[required]}
                            placeholder="Make a  Comment (compulsory)"
                            className={Styles.commentBox}
                          ></Textarea>
                          <div style={{ textAlign: "center" }}>
                            <button className={Styles.decline}>Decline</button>
                          </div>
                          <CheckButton
                            style={{ display: "none" }}
                            ref={checkBtn}
                          />
                        </Form1>
                      )}
                    </Col>
                  </Row>
                  <div className={Styles.duplicate}>Possible Duplicate(s) </div>
                  <div>
                    <PossibleDuplicate />
                  </div>
                </div>
              </div>

              <div className={Styles.duplicate}>Comment(s) </div>
              <div>
                <Row className="mt-2">
                  <Col style={{ fontSize: "14px" }} className="pr-0" sm="3">
                    Michael Boniface :
                  </Col>
                  <Col style={{ fontSize: "14px" }} className="pl-0">
                    Please upload a clearer receipt next time
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col style={{ fontSize: "14px" }} className="pr-0" sm="3">
                    Falola Dayo :
                  </Col>
                  <Col style={{ fontSize: "14px" }} className="pl-0">
                    I think you always send more than one receipt
                  </Col>
                </Row>
                <div style={{ marginBottom: "100px" }}></div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </ThemeProvider>
    </>
  );
}

export default InvoicePreview;
