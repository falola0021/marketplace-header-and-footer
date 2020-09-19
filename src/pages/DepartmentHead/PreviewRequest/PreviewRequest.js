import React, { useState } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import Styles from "./PreviewRequest.module.css";

function ImageView(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ border: "0px" }}></Modal.Header>
      <Modal.Body>
        <div className={Styles.imgrowdiv}>
          <img
            className={Styles.imgpreview}
            src="https://dwdqz3611m4qq.cloudfront.net/templates/Freelance-Writing-Invoice-Template2-G.jpg?mtime=20191122132723&focal=none"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

function PreviewRequest(props) {
  const [imageShow, setImageShow] = React.useState(false);
  return (
    <>
      <div className={Styles.modalbody}>
        <div className={Styles.prevreq}>REQUEST ITEM</div>
        <div className={Styles.prevname}>
          <div>
            Name : <span>Anayo Kanayo</span>
          </div>
          <div>
            {" "}
            Date : <span>20/09/2020</span>
          </div>
        </div>
        <Row className={Styles.previtem}>
          <Col className={Styles.prevcol}>
            <div className={Styles.prevheader}>Vendor</div>
            <div className={Styles.prevtext}>ABD Electronics</div>
          </Col>
          <Col className={Styles.prevcol}>
            {" "}
            <div className={Styles.prevheader}>Product</div>
            <div className={Styles.prevtext}>Hp Laptop Battery</div>
          </Col>
          <Col className={Styles.prevcol}>
            {" "}
            <div className={Styles.prevheader}>Amount</div>
            <div className={Styles.prevtext}>
              <span>₦</span> 38,0000
            </div>
          </Col>
        </Row>
        <Row className={Styles.imgrow}>
          <Col sm="5" className={Styles.imgrowcol}>
            <div
              onClick={() => setImageShow(true)}
              className={Styles.imgrowdiv}
            >
              <img
                className={Styles.imgrowimg}
                src="https://dwdqz3611m4qq.cloudfront.net/templates/Freelance-Writing-Invoice-Template2-G.jpg?mtime=20191122132723&focal=none"
              />
            </div>
            <div className={Styles.imgrowimgdownload}>
              <i className="fas fa-download mr-3"></i>
              <span>Download</span>
            </div>
          </Col>
          <Col sm="7">
            <div className={Styles.approvaltitle}>Approved By :</div>
            <div className={Styles.approval}>
              <i className="fas fa-check mr-3"></i>
              <span>Team lead It</span>
            </div>
            <div className={Styles.approval}>
              <i className="fas fa-check mr-3"></i>
              <span>Team lead It</span>
            </div>
            <div className={Styles.approval}>
              <i className="fas fa-check mr-3"></i>
              <span>Team lead It</span>
            </div>
            <div className={Styles.approval}>
              <i className="fas fa-check mr-3"></i>
              <span>Team lead It</span>
            </div>
          </Col>
        </Row>
        <form className={Styles.comment}>
          <label>Leave a comment</label>
          <div>
            <textarea></textarea>
          </div>
          <Row className={Styles.submitrow}>
            <Col className={Styles.submitcol1}>
              {" "}
              <button>Approve</button>
            </Col>
            <Col className={Styles.submitcol2}>
              {" "}
              <button>Decline</button>
            </Col>
          </Row>
        </form>

        <ImageView show={imageShow} onHide={() => setImageShow(false)} />
      </div>
    </>
  );
}

export default PreviewRequest;
