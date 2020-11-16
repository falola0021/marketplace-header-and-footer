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
} from "@chakra-ui/core";

function InvoicePreview({ sideview }) {
  // const [docs, setDocs] = useState({});
  const [size, setSize] = React.useState("lg");
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  // let workflow = sideview.workflow;
  // console.log("this are d info", workflows);

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
            <img
              style={{ width: "100%", height: "50%" }}
              src={
                ticketDocuments[0].document
                  ? ticketDocuments[0].document
                  : Placeholder
              }
              alt="CHECK FOR FILE"
            />

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
            <DrawerBody>
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
                      <label>Comment(s): </label>
                      {comments.map((comment) => (
                        <span className="pl-1" key={comment._id}>
                          {comment.comment}
                        </span>
                      ))}
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={7}>
                      <div className={Styles.title}>
                        <span className={Styles.document}>Document(s)</span>
                      </div>{" "}
                      <Carousel>
                        {ticketDocuments.map((docs) => (
                          <Carousel.Item key={docs._id}>
                            <img
                              className="d-block w-100"
                              src={docs.document}
                              alt="First slide"
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </Col>
                    <Col>
                      {" "}
                      <div className={Styles.title}>
                        <span className={Styles.document}>Approvers</span>
                      </div>{" "}
                      {/* {sideview.workflow.map((innerView) => (
                        <div>
                          <h3>hello</h3>
                          <ul>
                            {innerView.workflow.map((phasess) => (
                              <h1>
                                {" "}
                                {phasess.phases.map((phase) => (
                                  <h1>ccccccc</h1>
                                ))}
                              </h1>
                            ))}
                          </ul>
                        </div>
                      ))} */}
                      {/* {console.log("this is the worlflow", sideview.workflow)} */}
                    </Col>
                  </Row>
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
