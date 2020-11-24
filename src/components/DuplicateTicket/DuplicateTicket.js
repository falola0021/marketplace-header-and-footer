import React, { useState, useEffect } from "react";
import Styles from "./DuplicateTicket.module.css";
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
  AvatarBadge,
} from "@chakra-ui/core";

function InvoicePreview({ sideview }) {
  const [size, setSize] = React.useState("lg");
  const { isOpen, onOpen, onClose } = useDisclosure();
   const [duplicate, setDuplicate] = useState({
    originalPage=true,
    duplicatePage=false

   });
   

  const {
    description,
    amount,
    dueDate,
    ticketDocuments = [""],
    comments = [""],
    status,
    items,
    numberOfItems,
    ref,
  } = sideview || {};

  const handlePreview = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <div className={Styles.reviewbox}>
        <div className={Styles.review}>Review</div>
        {console.log("sideview", sideview)}

        <div className={Styles.reviewitems} onClick={() => handlePreview(size)}>
          <p>
            <span className={Styles.invoicelabel}>Ticket Details</span>
          </p>
          <div className={Styles.invoiceimg}>
            {/* {ticketDocuments.document ? ( */}
            <div
              style={{ width: "100%", maxHeight: "300px", overflowY: "scroll" }}
            >
              {/* {ticketDocuments.map((docs) => (
                <img
                  key={docs._id}
                  style={{ width: "100%" }}
                  src={docs.document}
                  alt="CHECK FOR FILE"
                />
              ))} */}
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

            {/* ) : (
              ""
            )} */}

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
        {/* ))} */}
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
                      {comments.map((comment) => (
                        <span
                          style={{ fontSize: "10px" }}
                          className="pl-1"
                          key={comment._id}
                        >
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
                      <Carousel className="mt-3">
                        {ticketDocuments.map((docs) => (
                          <Carousel.Item key={docs._id}>
                            <div
                              style={{
                                maxHeight: "250px",
                                overflowY: "scroll",
                                minHeight: "250px",
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
                      <div className={Styles.approveravater}>
                        {" "}
                        <Row>
                          <Col sm="2">
                            <Avatar
                              size="sm"
                              name="Kola Tioluwani"
                              src="https://bit.ly/tioluwani-kolawole"
                            />
                          </Col>
                          <Col style={{ fontSize: "14px" }} sm="8">
                            Kola Teni
                          </Col>
                          <Col sm="2">
                            <div
                              style={{ color: "green" }}
                              className="fa fa-circle"
                            ></div>
                          </Col>
                        </Row>
                      </div>
                      <div className={Styles.approveravater}>
                        {" "}
                        <Row>
                          <Col sm="2">
                            <Avatar
                              size="sm"
                              name="Mich Boniface"
                              src="https://bit.ly/tioluwani-kolawole"
                            />
                          </Col>
                          <Col style={{ fontSize: "14px" }} sm="8">
                            Michael Boniface
                          </Col>
                          <Col sm="2">
                            <div
                              style={{ color: " rgb(236, 142, 33)" }}
                              className="fa fa-circle"
                            ></div>
                          </Col>
                        </Row>
                      </div>
                      <div className={Styles.approveravater}>
                        {" "}
                        <Row>
                          <Col sm="2">
                            <Avatar
                              size="sm"
                              name="Ola Oni"
                              src="https://bit.ly/tioluwani-kolawole"
                            />
                          </Col>
                          <Col style={{ fontSize: "14px" }} sm="8">
                            Ola One
                          </Col>
                          <Col sm="2">
                            <div
                              style={{ color: "red" }}
                              className="fa fa-circle"
                            ></div>
                          </Col>
                        </Row>
                        <div className={Styles.action}>
                          <button className={Styles.b1}>Approve</button>
                          <button className={Styles.b2}> Decline</button>
                        </div>
                      </div>
                    </Col>
                  </Row>
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
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </ThemeProvider>
    </>
  );
}

export default InvoicePreview;
