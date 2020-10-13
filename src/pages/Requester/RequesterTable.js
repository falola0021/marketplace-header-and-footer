import React from "react";
import { Table } from "react-bootstrap";
import Styles from "./Requester.module.css";
// import PreviewRequest from "./PreviewRequest/PreviewRequest";
import {
  ThemeProvider,
  AvatarGroup,
  Avatar,
  AvatarBadge,
  Progress,
  Select,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/core";

function UserTable({ onClick, handlePreviewShow }) {
  return (
    <>
      <ThemeProvider>
        <div className={Styles.searchfilter}>
          <form className={Styles.tablefilter}>
            <div className={Styles.tablefilterselect}>
              <FormControl>
                <Select
                  style={{ border: "1px solid #e3e5f0", width: "250px" }}
                  placeholder="Filter Selection"
                >
                  <option value="option1">vendor</option>
                  <option value="option2">Status</option>
                  <option value="option3">Phase</option>
                </Select>
              </FormControl>
              <FormControl>
                <Select
                  style={{ border: "1px solid #e3e5f0", width: "250px" }}
                  className={Styles.tableinput}
                  placeholder="Value"
                >
                  <option value="option1">Pending</option>
                  <option value="option2">Approved</option>
                  <option value="option3">Declined</option>
                </Select>
              </FormControl>
              <FormControl>
                <Button
                  style={{
                    border: "1px solid #e3e5f0",
                    backgroundColor: " #8473cf",
                    color: " #ffffff",
                    outline: "none",
                    width: "150px",
                  }}
                  type="submit"
                >
                  <span>Filter</span>
                </Button>
              </FormControl>
            </div>
          </form>

          <form>
            <div className={Styles.tablefilterselect}>
              <FormControl>
                <Input
                  style={{ border: "1px solid #e3e5f0", width: "250px" }}
                  type="text"
                  placeholder="Search..."
                />
              </FormControl>

              <FormControl>
                <Button
                  style={{
                    border: "1px solid #e3e5f0",
                    backgroundColor: " #8473cf",
                    color: " #ffffff",
                    outline: "none",
                    width: "150px",
                  }}
                  type="submit"
                >
                  <span>Search</span>
                </Button>
              </FormControl>
            </div>
          </form>
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      className={Styles.avatarcolor1}
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor2}
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
                      className={Styles.avatarcolor3}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor4}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor5}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor6}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="green"
                    hasStripe
                    isAnimated
                    value={100}
                  />
                </td>
                <td>
                  <div
                    className={Styles.statusbackground}
                    style={{ backgroundColor: "#d2f8d2" }}
                  >
                    <span style={{ color: "green" }} className={Styles.dot}>
                      {" "}
                      Cofirmed
                    </span>
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      className={Styles.avatarcolor1}
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor2}
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
                      className={Styles.avatarcolor3}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="yellow.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor4}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="yellow.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor5}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor6}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                    value={40}
                  />
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      className={Styles.avatarcolor1}
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor2}
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
                      className={Styles.avatarcolor3}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="red.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor4}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="yellow.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor5}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor6}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="red"
                    hasStripe
                    value={70}
                  />
                </td>
                <td>
                  <div
                    style={{ backgroundColor: "#ffcccb" }}
                    className={Styles.statusbackground}
                  >
                    <span style={{ color: "red" }} className={Styles.dot}>
                      Declined
                    </span>
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      className={Styles.avatarcolor1}
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor2}
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
                      className={Styles.avatarcolor3}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor4}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor5}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor6}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      className={Styles.avatarcolor1}
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor2}
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
                      className={Styles.avatarcolor3}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor4}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor5}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor6}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      className={Styles.avatarcolor1}
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor2}
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
                      className={Styles.avatarcolor3}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor4}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor5}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor6}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      className={Styles.avatarcolor1}
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor2}
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
                      className={Styles.avatarcolor3}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor4}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor5}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor6}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      className={Styles.avatarcolor1}
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor2}
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
                      className={Styles.avatarcolor3}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor4}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor5}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor6}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      className={Styles.avatarcolor1}
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor2}
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
                      className={Styles.avatarcolor3}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor4}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor5}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor6}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      className={Styles.avatarcolor1}
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor2}
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
                      className={Styles.avatarcolor3}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor4}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Alabi Jonah"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor5}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      className={Styles.avatarcolor6}
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
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
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
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
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
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
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
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
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
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
                  <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
                    <Avatar
                      style={{
                        fontWeight: "900",
                        padding: "17px",
                      }}
                      name="Ola Kemi"
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
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                    <Avatar
                      style={{ fontWeight: "bold", padding: "17px" }}
                      name="Ola Kemi"
                      src=""
                    >
                      <AvatarBadge size="0.9em" bg="green.500" />
                    </Avatar>
                  </AvatarGroup>
                </td>
                <td>
                  <Progress
                    style={{ height: "4px", width: "150px" }}
                    color="yellow"
                    hasStripe
                  />
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
      </ThemeProvider>
    </>
  );
}

export default UserTable;
