import React from "react";
import Styles from "./ViewCard.module.css";
import { Card, Row, Col } from "react-bootstrap";

function ViewCard({
  title,
  value,
  cardbody,
  cardtitle,
  cardiconbody,
  cardsubtitle,
  cardicon,
}) {
  return (
    <>
      <Card className={cardbody}>
        <div className={cardtitle}>{title}</div>
        <Row>
          <Col className={cardsubtitle}>{value}</Col>
          <Col className={cardiconbody}>
            {" "}
            <i className={cardicon}></i>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default ViewCard;
