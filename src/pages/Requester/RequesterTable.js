import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  Table,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import Styles from "./Requester.module.css";
import PreviewRequest from "./PreviewRequest/PreviewRequest";
import { Spring, Transition, animated } from "react-spring/renderprops";
import {
  ThemeProvider,
  AvatarGroup,
  Avatar,
  AvatarBadge,
  Progress,
} from "@chakra-ui/core";

function UserTable({ onClick, handlePreviewShow }) {
  const [showFilter, setShowFilter] = useState(false);
  const handleFilter = () => setShowFilter(!showFilter);
  return (
    <>
      <div>
        <Row className={Styles.tabrow}>
          <Col className={Styles.headtabs} sm="4">
            <div>All</div>
            <div>Approval</div>
            <div>Pending</div>
            <div>Denied</div>
          </Col>
          <Col>
            <Button size="sm" onClick={handleFilter}>
              <i className="fa fa-filter "></i>
              <span>Filter</span>
            </Button>
            <Transition
              native
              items={showFilter}
              from={{ opacity: 0, marginLeft: -30 }}
              enter={{ opacity: 1, marginLeft: 0 }}
              leave={{ opacity: 0, marginLeft: -30 }}
              config={{ delay: 100, duration: 100 }}
            >
              {(show) =>
                show &&
                ((props) => (
                  <animated.div style={props}>
                    <Form inline className={Styles.filterform}>
                      <InputGroup className={Styles.startdate}>
                        <InputGroup.Prepend>
                          <InputGroup.Text>Start</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          className={Styles.formcontrol}
                          size="lg"
                          type="date"
                        />
                      </InputGroup>
                      <InputGroup className={Styles.enddate}>
                        <InputGroup.Prepend>
                          <InputGroup.Text>End</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          className={Styles.formcontrol}
                          size="lg"
                          type="date"
                          timeFormat="DD-MM-YYYY"
                        />
                      </InputGroup>

                      <Button type="submit">Find</Button>
                    </Form>
                  </animated.div>
                ))
              }
            </Transition>
          </Col>
        </Row>
      </div>
      <div className={Styles.tablebox}>
        <Table responsive>
          <thead className={Styles.thead}>
            <tr>
              <th>
                <input className={Styles.checkbox} type="checkbox" />
              </th>
              <th>Vendor</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Invoice N0.</th>
              <th>Due Date</th>
              <th>Approval</th>
              <th>Progress</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className={Styles.tbody}>
            <tr onClick={onClick}>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="red"
                    hasStripe
                    isAnimated
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span
                  onClick={handlePreviewShow}
                  className={Styles.previewbutton}
                >
                  Preview
                </span>{" "}
              </td>
            </tr>
            <tr onClick={onClick}>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                    value={80}
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
            <tr onClick={onClick}>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="green"
                    hasStripe
                    value={100}
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
            <tr onClick={onClick}>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
            <tr onClick={onClick}>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
            <tr onClick={onClick}>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
            <tr onClick={onClick}>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
            <tr onClick={onClick}>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input className={Styles.checkbox} type="checkbox" />
              </td>
              <td>Jumia</td>
              <td>Laptop Charger</td>
              <td>N 32,000</td>
              <td>180213-001</td>
              <td>15/10/2020</td>
              <td>
                <ThemeProvider>
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="james Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Olamide"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </ThemeProvider>
              </td>
              <td>
                <ThemeProvider>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
                </ThemeProvider>
              </td>
              <td>
                <div className={Styles.statusbackground}>
                  <span className={Styles.dot}></span>Pending
                </div>
              </td>
              <td>
                <span className={Styles.previewbutton}>Preview</span>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default UserTable;
