import React from "react";
import { Col, Row } from "react-bootstrap";
import Styles from "./Footer.module.css";

// import kassandah from "../../pages/assets/kassandahwhite.png";
import kassandahmobile from "../../pages/assets/kassandahwhite.png";

function Footer() {
  return (
    <>
      <footer className={Styles.footer}>
        <Row>
          <Col sm="3">
            <img
              className={Styles.footerimage}
              alt="footer"
              src={kassandahmobile}
            />
          </Col>
          <Col sm="3">
            <div className={Styles.footerheader}>Content Header</div>
            <div>Content 1</div>
            <div>Content 2</div>
            <div>Content 3</div>
          </Col>
          <Col sm="3">
            <div className={Styles.footerheader}>Content Header</div>
            <div>Content 1</div>
            <div>Content 2</div>
            <div>Content 3</div>
          </Col>
          <Col sm="3">
            <div className={Styles.footerheader}>Content Header</div>
            <div>Content 1</div>
            <div>Content 2</div>
            <div>Content 3</div>
          </Col>
        </Row>
      </footer>
    </>
  );
}

export default Footer;
