import React from "react";
import Styles from "./InvoicePreview.module.css";
import { Row, Col } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import moment from "moment";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
  ThemeProvider,
} from "@chakra-ui/core";

function InvoicePreview({ preview, drawerInfo }) {
  const [size, setSize] = React.useState("lg");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePreview = (newSize) => {
    setSize(newSize);
    onOpen();
  };
  const workflow = drawerInfo.workflow;
  console.log("this are the phases", workflow);

  return (
    <>
      <div className={Styles.reviewbox}>
        <div className={Styles.review}>Review</div>
        <div className={Styles.reviewitems} onClick={() => handlePreview(size)}>
          <p>
            <span className={Styles.invoicelabel}>Request By :</span>
            <span className={Styles.invoicedesc}> Requester Name</span>
          </p>

          <div className={Styles.invoiceimg}>
            <img
              src="https://www.freshbooks.com/wp-content/uploads/2018/05/invoice-hero-full-generic-e1545411829591.png"
              alt="invoice"
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
                <Col className={Styles.invoicelabel}>
                  {drawerInfo.description}
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className={Styles.invoicedesc} sm="4">
                  Stutus:
                </Col>
                <Col className={Styles.invoicelabel}>{drawerInfo.status}</Col>
              </Row>
              <Row className="mt-2">
                <Col className={Styles.invoicedesc} sm="4">
                  Due-Date:
                </Col>
                <Col className={Styles.invoicelabel}>
                  {moment(drawerInfo.dueDate).format("DD/MM/YYYY")}
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className={Styles.invoicedesc} sm="4">
                  Amount:
                </Col>
                <Col className={Styles.invoicelabel}>₦ {drawerInfo.amount}</Col>
              </Row>

              {/* <textarea
                placeholder="Make a  Comment"
                className={Styles.commentBox}
              ></textarea>
              <Row className="mt-2">
                <Col>
                  <button className={Styles.approve}>Approve</button>
                </Col>
                <Col>
                  {" "}
                  <button className={Styles.decline}>Decline</button>
                </Col>
              </Row> */}
            </div>
          </div>
        </div>
      </div>
      <ThemeProvider>
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerContent>
            <DrawerBody>
              <div className={Styles.title}>
                <span className={Styles.ticket}>Ticket</span>
                <span className={Styles.ref}>{drawerInfo.ref}</span>
              </div>
              <div>
                <div className={Styles.tablevalues}>
                  <Row>
                    <Col className={Styles.tableInfo}>
                      <label>Item(s)</label>
                      <div>{drawerInfo.item}</div>
                    </Col>
                    <Col className={Styles.tableInfo}>
                      {" "}
                      <label>Description</label>
                      <div>{drawerInfo.description}</div>
                    </Col>
                    <Col className={Styles.tableInfo}>
                      <label>(₦) Amount</label>
                      <div>{drawerInfo.amount}</div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col className={Styles.tableInfo}>
                      <label>Status</label>
                      <div>{drawerInfo.status}</div>
                    </Col>
                    <Col className={Styles.tableInfo}>
                      {" "}
                      <label>Number of Item(s)</label>
                      <div>{drawerInfo.numberOfItems}</div>
                    </Col>
                    <Col className={Styles.tableInfo}>
                      <label>Due-Date</label>
                      <div>
                        {moment(drawerInfo.dueDate).format("DD/MM/YYYY")}
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={7}>
                      <div className={Styles.title}>
                        <span className={Styles.document}>Document(s)</span>
                      </div>{" "}
                      <Carousel autoPlay>
                        <div>
                          <img
                            height="100"
                            alt=""
                            src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg"
                          />
                        </div>
                        <div>
                          <img
                            height="100"
                            alt=""
                            src="data:image/png;base64,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"
                          />
                        </div>
                        <div>
                          <img
                            height="20j0"
                            alt=""
                            src="https://www.freshbooks.com/wp-content/uploads/2018/05/invoice-hero-full-generic-e1545411829591.png"
                          />
                        </div>
                      </Carousel>
                    </Col>
                    <Col>
                      {" "}
                      <div className={Styles.title}>
                        <span className={Styles.document}>Approvers</span>
                      </div>{" "}
                      {
                        /* {workflow.map(({ phases }, index) => {
                        <span Key={index}>
                          {workflow.map((phase, index) => {
                            <div>hello</div>;
                          })}
                        </span>;
                      })} */
                        console.log(workflow)
                      }
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
