import React, { useState, useRef, useEffect } from "react";
import Form1 from "react-validation/build/form";
import Input from "react-validation/build/input";
import Textarea from "react-validation/build/textarea";
import Select from "react-validation/build/select";
import { isEmail } from "validator";
import CheckButton from "react-validation/build/button";
import Styles from "./Table.module.css";
import SearchFilter from "../../../../components/SearchFilter/SearchFilter";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DepartmentDataService from "../../../../services/department.service";
import { Row, Col, Form } from "react-bootstrap";
import DepartmentCreate from "../DepartmentCreate";
import kassandahmobile from "../../../assets/kassandahmobilepurple.png";
import UserDataService from "../../../../services/user.service";
import swal from "sweetalert";
import {
  Drawer,
  DrawerBody,
  // DrawerOverlay,
  DrawerContent,
  useDisclosure,
  ThemeProvider,
  // Textarea,
} from "@chakra-ui/core";

//for Validation start

const required = (value) => {
  if (!value) {
    return (
      <div
        style={{ fontSize: "12px", padding: "0" }}
        className="alert alert-danger"
        role="alert"
      >
        This field is required!
      </div>
    );
  }
};

const vname = (value) => {
  if (value.length < 3) {
    return (
      <div
        style={{ fontSize: "12px", padding: "0" }}
        className="alert alert-danger"
        role="alert"
      >
        The name of vendor cannot be less than 3 characters.
      </div>
    );
  }
};

//form validation end

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Department Name",
  },

  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "hod name",
  },
  { id: "id", numeric: true, disablePadding: false, label: "Description" },
  { id: "action", numeric: true, disablePadding: false, label: "" },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className={Styles.tablehead}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            className={Styles.tableheader}
            color="red"
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = ({ retrieveDepartments, numSelected }) => {
  const [size, setSize] = React.useState("lg");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const classes = useToolbarStyles();
  // const { departments } = props;

  // const { numSelected } = props;
  const handleCreateRole = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography
            className={classes.title}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            <div className={Styles.tabletop}>
              <span>
                <SearchFilter />
              </span>
              <span className={Styles.tablename}>
                <button onClick={() => handleCreateRole(size)}>
                  <i className="fa fa-plus pr-2"></i> Create Department
                </button>
              </span>{" "}
            </div>
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <i className="fa fa-trash"></i>
            </IconButton>
          </Tooltip>
        ) : (
          <span></span>
        )}
      </Toolbar>

      <ThemeProvider>
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerContent>
            <DrawerBody style={{ paddingTop: "6%" }}>
              <img
                src={kassandahmobile}
                alt="logo"
                style={{ width: "30px", height: "45px" }}
              />
              <DepartmentCreate
                retrieveDepartments={retrieveDepartments}
                closeDrawer={onClose}
              />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </ThemeProvider>
    </>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
    alignItems: "center",
  },
}));

export default function EnhancedTable(props, { preview }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [size, setSize] = React.useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawerInfo, setDrawerInfo] = React.useState({});
  const roleStore = useSelector((state) => state.roleReducer);
  const [departments, setDepartments] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  //delete confirmation
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkBtn = useRef();

  const dispatch = useDispatch();
  const form = useRef();

  const size1 = "xs";
  const size2 = "lg";
  //working with API
  const retrieveDepartments = () => {
    DepartmentDataService.getAll()
      .then((response) => {
        setDepartments(response.data.data);
        console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
        console.log("cannot get department");
      });
  };

  useEffect(() => {
    retrieveDepartments();
  }, []);

  const retrieveUsers = () => {
    UserDataService.getAll()
      .then((response) => {
        setUsers(response.data.data.userList);
        console.log(response.data.data.userList);
      })
      .catch((e) => {
        console.log(e);
        console.log("cannot get user");
      });
  };

  useEffect(() => {
    retrieveUsers();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = departments.map((n) => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, _id) => {
    const selectedIndex = selected.indexOf(_id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, _id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleShowMore = (event, department, newSize) => {
    setDrawerInfo(department);
    setSize(newSize);
    onOpen();
  };

  const handleEdIT = (event, department, newSize) => {
    setDrawerInfo(department);
    setMessage("");
    setSize(newSize);
    onOpen();
  };
  const handleInputChange = (event, objKey, validation) => {
    const { name, value } = event.target;

    let drawerInfoCopy = { ...drawerInfo };
    drawerInfoCopy[objKey] = value;
    setDrawerInfo({ ...drawerInfoCopy });
  };

  const submitDepartment = () => {
    form.current.validateAll();
    setSuccessful(false);
    setLoading(true);

    const { name, hod, description } = drawerInfo;
    const departmentHod = drawerInfo.hod;

    const update = {
      name,
      hod,
      description,
    };
    //senddrawerInfo payload to your API
    if (checkBtn.current.context._errors.length === 0) {
      DepartmentDataService.update(drawerInfo._id, update)
        .then((response) => {
          setLoading(false);
          retrieveDepartments();
          setMessage(response.data.message);
          setSuccessful(true);
          setTimeout(function () {
            onClose();
          }, 1000);
        })
        .catch((e) => {
          console.log(e.response);
          setSuccessful(false);
          setLoading(false);
          setMessage(e.response.data.message);
        });
    }
  };

  const deleteDepartment = (department) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover ",
      // icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        DepartmentDataService.remove(department._id)
          .then((response) => {
            retrieveDepartments();
          })
          .catch((e) => {
            console.log("error deleting");
          });
        swal("Department has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Department is safe!");
      }
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (_id) => selected.indexOf(_id) !== -1;

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, roleStore.role.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper>
        <EnhancedTableToolbar
          numSelected={selected.length}
          retrieveDepartments={retrieveDepartments}
        />
        <TableContainer>
          <Table
            className={Styles.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={roleStore.role.length}
            />
            <TableBody>
              {stableSort(departments, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((department, index) => {
                  const isItemSelected = isSelected(department._id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  const departmentHod = department.hod;
                  const { firstName = "", lastName = "" } = departmentHod || {};

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={department._id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) =>
                            handleClick(event, department._id)
                          }
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>

                      <TableCell
                        align="left"
                        onClick={(event) =>
                          handleShowMore(event, department, size1)
                        }
                      >
                        {department.name}
                      </TableCell>

                      <TableCell
                        align="left"
                        onClick={(event) =>
                          handleShowMore(event, department, size1)
                        }
                      >
                        {firstName} {lastName}
                      </TableCell>
                      <TableCell
                        align="left"
                        onClick={(event) =>
                          handleShowMore(event, department, size1)
                        }
                      >
                        {department.description}
                      </TableCell>

                      <TableCell align="left">
                        <button
                          onClick={(event) =>
                            handleEdIT(event, department, size2)
                          }
                          className={Styles.editbutton}
                        >
                          Edit
                        </button>
                        {/* ))} */}
                        <button
                          onClick={() => deleteDepartment(department)}
                          className={Styles.deletebutton}
                        >
                          {" "}
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={10} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={roleStore.role.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />

      <ThemeProvider>
        {size === "xs" ? (
          <Drawer onClose={onClose} isOpen={isOpen} size={size}>
            <DrawerContent>
              <DrawerBody>
                <img
                  src={kassandahmobile}
                  alt="logo"
                  style={{
                    width: "25px",
                    height: "35px",
                    marginTop: "20px",
                  }}
                />
                <div className={Styles.vendortitle}>Department Details</div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Name: </span>
                  <span className={Styles.vendorname}>{drawerInfo.name}</span>
                </div>

                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>HOD: </span>
                  {drawerInfo.hod ? (
                    <span className={Styles.vendorname}>
                      {drawerInfo.hod.firstName} {drawerInfo.hod.lastName}
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Description: </span>
                  <span className={Styles.vendorname}>
                    {drawerInfo.description}
                  </span>
                </div>

                <div className={Styles.actionbutton2}>
                  <button
                    onClick={(event) => handleEdIT(event, drawerInfo, size2)}
                    className={Styles.edit2}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteDepartment(drawerInfo)}
                    className={Styles.delete2}
                  >
                    Delete
                  </button>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        ) : (
          <Drawer onClose={onClose} isOpen={isOpen} size={size}>
            <DrawerContent>
              <DrawerBody>
                <Row>
                  <Col>
                    <img
                      src={kassandahmobile}
                      alt="logo"
                      style={{
                        width: "30px",
                        height: "45px",
                        marginTop: "20px",
                      }}
                    />
                    <div className={Styles.heading}>Edit Department</div>
                    <Form1
                      ref={form}
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                      className={Styles.form}
                    >
                      <Row>
                        <Col>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Department Name</Form.Label>
                            <Input
                              style={{
                                border: " 1px solid  #f3f3f3",
                                backgroundColor: "rgba(59, 122, 254, 0.02)",
                                width: "100%",
                                padding: "6px 10px",
                                borderRadius: "3px",
                                outline: "none",
                              }}
                              type="text"
                              value={drawerInfo.name}
                              onChange={(event) =>
                                handleInputChange(event, "name")
                              }
                              validations={[required, vname]}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>HOD</Form.Label>
                            <Select
                              style={{
                                border: " 1px solid #f3f3f3",
                                backgroundColor: "rgba(59, 122, 254, 0.02)",
                                width: "100%",
                                padding: "6px 10px",
                                borderRadius: "3px",
                                outline: "none",
                              }}
                              //value={drawerInfo.userId}
                              type="text"
                              onChange={(event) =>
                                handleInputChange(event, "hod")
                              }
                            >
                              {drawerInfo.hod ? (
                                <option value={""}>
                                  {drawerInfo.hod.firstName}{" "}
                                  {drawerInfo.hod.lastName}
                                </option>
                              ) : (
                                <option value={""}>Select HOD</option>
                              )}
                              {users.map((user) => (
                                <option key={user.userId} value={user.userId}>
                                  {user.firstName} {user.lastName}
                                </option>
                              ))}
                            </Select>
                          </Form.Group>
                        </Col>
                        <Col sm="12">
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Textarea
                              style={{
                                border: " 1px solid  #f3f3f3",
                                backgroundColor: "rgba(59, 122, 254, 0.02)",
                                width: "100%",
                                padding: "6px 10px",
                                borderRadius: "3px",
                                outline: "none",
                              }}
                              type="text"
                              onChange={(event) =>
                                handleInputChange(event, "description")
                              }
                              validations={[required, vname]}
                              value={drawerInfo.description}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      {message && (
                        <div className="form-group">
                          <div
                            style={{ fontSize: "12px", padding: "0 3px" }}
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
                      <span>
                        <button
                          type="submit"
                          // disabled={loading}
                          style={{
                            paddingTop: "6px",
                            paddingBottom: "6px",
                            borderRadius: "3px",
                            color: "#ffffff",
                            border: " 1px solid #cdd0d3",
                            outline: "none",
                          }}
                          className={Styles.submitbutton}
                          onClick={submitDepartment}
                        >
                          <span className={Styles.alignLoader}>
                            {" "}
                            {loading && (
                              <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span className="pl-2">Update</span>
                          </span>
                        </button>
                      </span>

                      <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </Form1>
                  </Col>
                </Row>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        )}
      </ThemeProvider>
    </div>
  );
}
