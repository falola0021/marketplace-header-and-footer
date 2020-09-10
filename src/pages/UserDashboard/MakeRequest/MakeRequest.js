import React, { useState } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import Styles from "./MakeRequest.module.css";
import DropZone from "../../../components/DropZone/DropZone";

function MakeRequest() {
  return (
    <>
      <Form>
        <div className={Styles.title}>Make a Request</div>
        <Row>
          <Col sm="6">
            <Form.Group>
              <Form.Label>vendor</Form.Label>
              <Form.Control type="text" placeholder="Enter vendor name" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Item(s)</Form.Label>
              <Form.Control type="text" placeholder="Enter name of Item(s)" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ref No.</Form.Label>
              <Form.Control type="text" placeholder="Enter Refrence Number" />
            </Form.Group>
          </Col>

          <Col sm="6">
            <Form.Group>
              <Form.Label>Amount</Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text> ₦</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control placeholder="Enter Amount" />
              </InputGroup>
            </Form.Group>

            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control as="select" defaultValue="Select Quantity">
                <option>Select Quantity</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>Above 10</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>
        <div className="mt-5">
          <Form.Label>Upload Invoice</Form.Label>
          <DropZone />
        </div>
        <div className={Styles.sendreqbox}>
          <Button className={Styles.sendreq} type="submit">
            Send Request
          </Button>
        </div>
      </Form>
    </>
  );
}

export default MakeRequest;
