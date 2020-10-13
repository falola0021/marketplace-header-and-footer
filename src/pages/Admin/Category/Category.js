import React from "react";
import Styles from "./Category.module.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import CategoryTable from "./CategoryTable";

function Category() {
  return (
    <>
      <div className={Styles.body}>
        <p className={Styles.title}>Category</p>

        <Row className={Styles.usercontainer}>
          <Col className={Styles.userbox}>
            <div className={Styles.heading}>Create a Category</div>
            <Form className={Styles.form}>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control
                      className={Styles.formcontrol}
                      type="text"
                      placeholder="Enter Category Name"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Select Workflow</Form.Label>
                    <Form.Control className={Styles.formcontrol} as="select">
                      <option>Workflow1</option>
                      <option>Workflow1</option>
                      <option>Workflow1</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Category Description</Form.Label>
                    <Form.Control
                      className={Styles.formcontrol}
                      as="textarea"
                      rows={5}
                      placeholder="Enter Category Description"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button className={Styles.submitbutton} type="submit">
                Create
              </Button>
            </Form>
          </Col>
        </Row>

        <CategoryTable />
      </div>
    </>
  );
}

export default Category;
