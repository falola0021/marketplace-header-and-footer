import React, { useState, useEffect, useRef } from "react";
import Styles from "./Table.module.css";
import MUIDataTable from "mui-datatables";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import UserCreate from "../UserCreate";
import kassandahmobile from "../../../assets/kassandahmobilepurple.png";
import UserDataService from "../../../../services/user.service";
import RoleDataService from "../../../../services/role.service";
import { isEmail } from "validator";
import CheckButton from "react-validation/build/button";
import Form1 from "react-validation/build/form";
import { Form } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  ThemeProvider,
  Spinner,
} from "@chakra-ui/core";

import moment from "moment";
import { Row, Col } from "react-bootstrap";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const name = (value) => {
  if (value.length < 3) {
    return (
      <div className="alert alert-danger" role="alert">
        The name of vendor cannot be less than 3 characters.
      </div>
    );
  }
};

function TestTable() {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");

  const [loading, setLoading] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [roles, setRoles] = React.useState([]);
  const checkBtn = useRef();
  const form = useRef();
  const [drawerInfo, setDrawerInfo] = React.useState({});
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("");

  const [roleId, setRoleId] = useState("");

  const handleCreateUser = () => {
    setSize("lg");
    onOpen();
  };
  const retrieveUsers = async () => {
    await UserDataService.getAll()
      .then((response) => {
        setUsers(response.data.data.userList);
        console.log("got here", response.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  const retrieveRoles = async () => {
    await RoleDataService.getAll()
      .then((response) => {
        setRoles(response.data.data);
        console.log(roles);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  useEffect(() => {
    retrieveUsers();
    retrieveRoles();
  }, []);

  const activateUser = (userId) => {
    setLoading(true);
    UserDataService.activateUser(userId)
      .then((response) => {
        setSuccessful(true);
        setMessage(response.data.message);
        retrieveUsers();
        setLoading(false);
      })
      .catch((e) => {
        console.log("hiiiii");
        setMessage(e.response.data.message);
        setSuccessful(false);
        setLoading(false);
      });
  };

  const deactivateUser = (userId) => {
    setLoading(true);
    UserDataService.deactivateUser(userId)
      .then((response) => {
        setSuccessful(true);
        setMessage(response.data.message);
        retrieveUsers();
        setLoading(false);
      })
      .catch((e) => {
        console.log("hiiiii");
        setMessage(e.response.data.message);
        setSuccessful(false);
        setLoading(false);
      });
  };

  const handleShowMore = (rowData) => {
    setDrawerInfo(rowData);
    setSize("xs");
    onOpen();
  };
  const changeRole = (e) => {
    const gotId = e.target.value;
    setRoleId(gotId);
  };

  const attachRoleToUser = (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    setMessage("");

    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      UserDataService.attachRoleToUser(roleId, drawerInfo[8])
        .then((response) => {
          setSuccessful(true);
          setMessage(response.data.message);
          retrieveUsers();
          setLoading(false);

          setTimeout(function () {
            onClose();
            setMessage("");
          }, 1000);
        })
        .catch((e) => {
          setMessage(e.response.data.message);
          setSuccessful(false);
          setLoading(false);
        });
    }
  };

  const detachRoleFromUser = (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    setMessage("");
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      UserDataService.detachRoleToUser(roleId, drawerInfo[8])
        .then((response) => {
          setSuccessful(true);
          setMessage(response.data.message);
          retrieveUsers();
          setLoading(false);

          setTimeout(function () {
            onClose();
          }, 1000);
        })
        .catch((e) => {
          setMessage(e.response.data.message);
          setSuccessful(false);
          setLoading(false);
        });
    }
  };

  const columns = [
    {
      name: "firstName",
      label: "firstName",
      options: {
        filter: false,
        sort: false,
        display: false,
      },
    },
    {
      name: "lastName",
      label: "lastName",
      options: {
        filter: false,
        sort: false,
        display: false,
      },
    },
    {
      name: "firstName",
      label: "Name",

      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          console.log(tableMeta.rowData, "......");
          return (
            <div>
              {tableMeta.rowData[0]} {tableMeta.rowData[1]}
            </div>
          );
        },
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: true,
      },
    },

    {
      name: "department",
      label: "Department",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (department) => <>{department.name}</>,
      },
    },
    {
      name: "status",
      label: "status",
      options: {
        filter: false,
        sort: false,
        display: false,
      },
    },
    {
      name: "roles",
      label: "Role",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (roles) => (
          <>
            {roles.map(function (role) {
              return <span className="mr-2">{role.role}</span>;
            })}
          </>
        ),
      },
    },
    {
      name: "userId",
      label: "Action",

      options: {
        filter: true,
        sort: true,
        // onCellClick: () => {
        //   alert("hello");
        // },

        customBodyRender: (userId, tableMeta) => (
          <>
            <button
              onClick={
                tableMeta.rowData[5] === "inactive"
                  ? () => activateUser(userId)
                  : () => deactivateUser(userId)
              }
              className={
                tableMeta.rowData[5] === "inactive"
                  ? Styles.editbutton
                  : Styles.deletebutton
              }
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              {tableMeta.rowData[5] === "inactive" ? (
                <span>Activate User</span>
              ) : (
                <span>Deactivate User</span>
              )}
            </button>
          </>
        ),
      },
    },
    {
      name: "userId",
      label: "userId",
      options: {
        filter: false,
        sort: false,
        display: false,
      },
    },
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
  };

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const parentRef = useRef();
  const childRef = useRef();

  const myTheme = createMuiTheme({
    overrides: {
      // MUIDataTable: {
      //          responsiveScroll: {
      //     backgroundColor: "red !important",
      //     maxHeight: "none !important",
      //      overflowY: "scroll",
      //   },
      // },
      MuiIconButton: {
        root: {
          "&:hover": {
            backgroundColor: "transparent !important",
            border: "none !important",
            outline: "none !important",
          },

          "&:focus": {
            backgroundColor: "transparent !important",
            border: "none !important",
            outline: "none !important",
          },
        },
      },
    },
  });

  return (
    <React.Fragment>
      <Row className="mt-5 mb-5">
        <Col>
          <MuiThemeProvider theme={myTheme}>
            <MUIDataTable
              title={
                <div className={Styles.tabletop}>
                  <span className={Styles.tablename}>
                    <button onClick={() => handleCreateUser(size)}>
                      <i className="fa fa-plus pr-2"></i> Create User
                    </button>
                  </span>{" "}
                </div>
              }
              data={users}
              columns={columns}
              options={{
                filterType: "select",
                selectableRows: "multiple",
                onRowsSelect: (data) => {
                  console.log(data);
                },
                textLabels: {},
                customToolbarSelect: (selectedRows) => (
                  // <Tooltip title="edit">
                  <IconButton
                    onClick={() => {
                      alert("This feature is comming soon");
                      // setTest(!test);
                      // console.log(test);
                      // console.log(rows[selectedRows.data[0].dataIndex]);
                    }}
                    // style={{
                    //   display: "block",
                    // }}
                  >
                    <button
                      style={{
                        fontSize: "14px",
                        backgroundColor: " #4f26aa",
                        color: "#ffffff",
                        borderRadius: "4px",
                        padding: "5px 10px",
                      }}
                    >
                      Close Ticket
                    </button>
                    {/* <EditIcon /> */}
                  </IconButton>
                  // </Tooltip>
                ),

                rowsPerPage: 15,
                textLabels: {
                  body: {
                    noMatch: loading ? (
                      <ThemeProvider>
                        <Spinner
                          thickness="4px"
                          speed="0.65s"
                          emptyColor="gray.200"
                          color="blue.500"
                          size="lg"
                        />
                      </ThemeProvider>
                    ) : (
                      "Sorry, there is no matching data to display"
                    ),
                  },
                },

                // onCellClick: (cellData) => {
                //   console.log(cellData);
                // },
                onRowClick: (rowData, size, column) => {
                  handleShowMore(rowData, size);
                },
              }}

              // options={{
              //   rowsPerPage: 15,
              //   rowsPerPageOptions: [10, 20, 30],
              //   count: 10,
              // }}
            />
          </MuiThemeProvider>
        </Col>
      </Row>
      <ThemeProvider>
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerContent>
            <DrawerBody style={{ paddingTop: "6%" }}>
              {size == "lg" ? (
                <>
                  <img
                    src={kassandahmobile}
                    alt="logo"
                    style={{ width: "30px", height: "45px" }}
                  />
                  <UserCreate closeDrawer={onClose} />
                </>
              ) : (
                <>
                  <img
                    src={kassandahmobile}
                    alt="logo"
                    style={{
                      width: "25px",
                      height: "35px",
                      marginTop: "20px",
                    }}
                  />

                  <div className={Styles.vendortitle}>User Details</div>
                  <div className={Styles.vendor}>
                    <span className={Styles.vendornamelabel}>Name: </span>
                    <span className={Styles.vendorname}>
                      {drawerInfo[0]} {drawerInfo[1]}
                    </span>
                  </div>

                  <div className={Styles.vendor}>
                    <span className={Styles.vendornamelabel}>Department: </span>
                    <span className={Styles.vendorname}>{drawerInfo[4]}</span>
                  </div>
                  <div className={Styles.vendor}>
                    <span className={Styles.vendornamelabel}>Role: </span>
                    <span className={Styles.vendorname}>{drawerInfo[6]}</span>
                  </div>
                  <div className={Styles.vendor}>
                    <span className={Styles.vendornamelabel}>Email: </span>
                    <span className={Styles.vendorname}>{drawerInfo[3]}</span>
                  </div>
                  <div className={Styles.vendor}>
                    <span className={Styles.vendornamelabel}>Status: </span>
                    <span className={Styles.vendorname}>{drawerInfo[5]}</span>
                  </div>

                  <div className={Styles.vendortitle}>Attach Role</div>

                  <Form1
                    onSubmit={attachRoleToUser}
                    ref={form}
                    className={Styles.form}
                  >
                    <Form.Group>
                      <Select
                        style={{
                          border: " 1px solid #f3f3f3",
                          backgroundColor: "rgba(59, 122, 254, 0.02)",
                          width: "100%",
                          padding: "6px 10px",
                          borderRadius: "3px",
                          outline: "none",
                          marginBottom: "0",
                        }}
                        type="text"
                        name="roleId"
                        value={roleId}
                        onChange={changeRole}
                        validations={[required]}
                        className={Styles.formcontrol}
                        as="select"
                      >
                        <option value="">- Select role -</option>
                        {roles.map((role) => (
                          <option key={role._id} value={role._id}>
                            {role.role}
                          </option>
                        ))}
                      </Select>
                    </Form.Group>
                    <Input
                      style={{
                        visibility: "hidden",
                        margin: "0",
                        position: "absolute",
                      }}
                      type="text"
                      name="drawerInfo[8]"
                      value={drawerInfo[8]}
                      onChange={drawerInfo[8]}
                      validations={[required, name]}
                    />

                    <span>
                      <button
                        style={{
                          paddingTop: "6px",
                          paddingBottom: "6px",
                          borderRadius: "3px",
                          color: "#ffffff",
                          border: " 1px solid #cdd0d3",
                          outline: "none",
                          width: "100%",
                          backgroundColor: " #4f26aa",
                          fontWeight: "bold",
                        }}
                      >
                        {loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                        Add
                      </button>
                    </span>
                    {successful && (
                      <span>
                        {message && (
                          <div className="form-group">
                            <div
                              className={
                                successful
                                  ? "alert alert-success"
                                  : "alert alert-danger"
                              }
                              role="alert"
                            >
                              {message}
                            </div>
                          </div>
                        )}
                      </span>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                  </Form1>

                  <div
                    style={{ marginTop: "30px" }}
                    className={Styles.vendortitle}
                  >
                    Detach Role
                  </div>
                  <Form1
                    onSubmit={detachRoleFromUser}
                    ref={form}
                    className={Styles.form}
                  >
                    <Form.Group>
                      <Select
                        style={{
                          border: " 1px solid #f3f3f3",
                          backgroundColor: "rgba(59, 122, 254, 0.02)",
                          width: "100%",
                          padding: "6px 10px",
                          borderRadius: "3px",
                          outline: "none",
                          marginBottom: "0",
                        }}
                        type="text"
                        name="roleId"
                        value={roleId}
                        onChange={changeRole}
                        validations={[required]}
                        className={Styles.formcontrol}
                        as="select"
                      >
                        <option value="">- Select role -</option>
                        {roles.map((role) => (
                          <option key={role._id} value={role._id}>
                            {role.role}
                          </option>
                        ))}
                      </Select>
                    </Form.Group>
                    <Input
                      style={{
                        visibility: "hidden",
                        margin: "0",
                        position: "absolute",
                      }}
                      type="text"
                      name="drawerInfo[8]"
                      value={drawerInfo[8]}
                      onChange={drawerInfo[8]}
                      validations={[required, name]}
                    />

                    <span>
                      <button
                        style={{
                          paddingTop: "6px",
                          paddingBottom: "6px",
                          borderRadius: "3px",
                          color: "#ffffff",
                          border: " 1px solid #cdd0d3",
                          outline: "none",
                          width: "100%",
                          backgroundColor: " #4f26aa",
                          fontWeight: "bold",
                        }}
                      >
                        {loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                        Remove
                      </button>
                    </span>
                    {successful && (
                      <span>
                        {message && (
                          <div className="form-group">
                            <div
                              className={
                                successful
                                  ? "alert alert-success"
                                  : "alert alert-danger"
                              }
                              role="alert"
                            >
                              {message}
                            </div>
                          </div>
                        )}
                      </span>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                  </Form1>
                </>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default TestTable;
