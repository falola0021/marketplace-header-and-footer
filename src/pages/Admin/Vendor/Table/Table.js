import React, { useState, useRef, useEffect } from "react";
import Form1 from "react-validation/build/form";
import Input from "react-validation/build/input";
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
import VendorDataService from "../../../../services/vendor.service";
import { Row, Col, Form } from "react-bootstrap";
import VendorCreate from "../VendorCreate";
import * as vendorActions from "../../../../redux/actions/vendorActions/vendorActions";
import kassandahmobile from "../../../assets/kassandahmobilepurple.png";
import {
  Drawer,
  DrawerBody,
  // DrawerOverlay,
  DrawerContent,
  useDisclosure,
  ThemeProvider,
} from "@chakra-ui/core";

//for Validation start

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vname = (value) => {
  if (value.length < 3) {
    return (
      <div className="alert alert-danger" role="alert">
        The name of vendor cannot be less than 3 characters.
      </div>
    );
  }
};

const vaddress = (value) => {
  if (value.length < 3) {
    return (
      <div className="alert alert-danger" role="alert">
        input a valid address details.
      </div>
    );
  }
};

const vphone = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The phone must be valid with 11 digits .
      </div>
    );
  }
};
const vstatus = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Status must be selected
      </div>
    );
  }
};
const vaccountName = (value) => {
  if (value.length < 3 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Input a valid Account name .
      </div>
    );
  }
};
const vaccountNumber = (value) => {
  if (value.length < 10 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Input a valid Account number .
      </div>
    );
  }
};
const vemail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vbank = (value) => {
  if (value.length < 3 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Input a valid bank name.
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
    label: "Name",
  },

  { id: "address", numeric: true, disablePadding: false, label: "Address" },
  { id: "city", numeric: true, disablePadding: false, label: "City" },
  { id: "state", numeric: true, disablePadding: false, label: "State" },
  // { id: "bank", numeric: true, disablePadding: false, label: "Bank" },
  // { id: "accountname", numeric: true, disablePadding: false, label: "Account Name" },
  // { id: "accountnumber", numeric: true, disablePadding: false, label: "Account Number" },
  {
    id: "isverified",
    numeric: true,
    disablePadding: false,
    label: "Verification",
  },
  { id: "actions", numeric: true, disablePadding: false, label: "Action" },
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

const EnhancedTableToolbar = (props) => {
  const [size, setSize] = React.useState("lg");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const classes = useToolbarStyles();
  const { numSelected } = props;
  const handleCreateVendor = (newSize) => {
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
                <button onClick={() => handleCreateVendor(size)}>
                  <i className="fa fa-plus pr-2"></i> Create User
                </button>
              </span>{" "}
            </div>
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <i className="fa fa-trash"></i>

              {/* <DeleteIcon /> */}
            </IconButton>
          </Tooltip>
        ) : (
          <span></span>
          // <Tooltip title="Filter list">
          //   <IconButton aria-label="filter list">
          //     {/* <FilterListIcon /> */}
          //   </IconButton>
          // </Tooltip>
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
              <VendorCreate closeDrawer={onClose} />
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
  const vendorStore = useSelector((state) => state.vendorReducer);

  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const checkBtn = useRef();

  const dispatch = useDispatch();
  const form = useRef();

  const size1 = "xs";
  const size2 = "lg";
  //working with API
  const retrieveVendors = async () => {
    setLoading(true);

    await VendorDataService.getAll()
      .then((response) => {
        dispatch({
          type: vendorActions.GET_VENDOR_SUCCESS,
          payload: response.data.data,
        });
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };
  useEffect(() => {
    retrieveVendors();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = vendorStore.vendor.map((n) => n._id);
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

  const handleShowMore = (event, gotvendor, newSize) => {
    setDrawerInfo(gotvendor);
    setSize(newSize);
    onOpen();
  };

  const handleEdIT = (event, gotvendor, newSize) => {
    setDrawerInfo(gotvendor);
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

  const submitVendor = () => {
    form.current.validateAll();
    setSuccessful(false);
    setLoading(true);
    console.log(drawerInfo);
    const {
      address,
      state,
      email,
      phone,
      accountName,
      accountNumber,
      bank,
      city,
      name,
    } = drawerInfo;
    const update = {
      address,
      state,
      email,
      phone,
      accountName,
      accountNumber,
      bank,
      city,
      name,
    };
    //senddrawerInfo payload to your API
    if (checkBtn.current.context._errors.length === 0) {
      VendorDataService.update(drawerInfo._id, update)
        .then((response) => {
          setLoading(false);
          const updatesVendors = vendorStore.vendor.map((vendor) => {
            if (vendor._id == drawerInfo._id) {
              const changes = {
                ...drawerInfo,
              };
              return changes;
            }
            return vendor;
          });
          dispatch({
            type: vendorActions.GET_VENDOR_SUCCESS,
            payload: updatesVendors,
          });
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
        });
    }
  };

  const deleteVendor = (gotvendor) => {
    console.log(gotvendor._id);
    VendorDataService.remove(gotvendor._id)
      .then((response) => {
        const updatesVendors = vendorStore.vendor.filter(
          (vendor) => vendor._id !== gotvendor._id
        );
        dispatch({
          type: vendorActions.GET_VENDOR_SUCCESS,
          payload: updatesVendors,
        });
        // onClose();
      })
      .catch((e) => {
        console.log(e.response);
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
    Math.min(rowsPerPage, vendorStore.vendor.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper>
        <EnhancedTableToolbar numSelected={selected.length} />
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
              rowCount={vendorStore.vendor.length}
            />
            <TableBody>
              {stableSort(vendorStore.vendor, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((gotvendor, index) => {
                  const isItemSelected = isSelected(gotvendor._id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={gotvendor._id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, gotvendor._id)}
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>

                      <TableCell
                        onClick={(event) =>
                          handleShowMore(event, gotvendor, size1)
                        }
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {gotvendor.name}
                      </TableCell>

                      <TableCell
                        align="left"
                        onClick={(event) =>
                          handleShowMore(event, gotvendor, size1)
                        }
                      >
                        {gotvendor.address}
                      </TableCell>
                      <TableCell
                        align="left"
                        onClick={(event) =>
                          handleShowMore(event, gotvendor, size1)
                        }
                      >
                        {gotvendor.city}
                      </TableCell>
                      <TableCell
                        align="left"
                        onClick={(event) =>
                          handleShowMore(event, gotvendor, size1)
                        }
                      >
                        {gotvendor.state}
                      </TableCell>
                      <TableCell
                        align="left"
                        onClick={(event) =>
                          handleShowMore(event, gotvendor, size1)
                        }
                      >
                        {gotvendor.isVerified ? "true" : "false"}
                      </TableCell>
                      <TableCell align="left">
                        {/* {sizes.map((size) => ( */}
                        <button
                          onClick={(event) =>
                            handleEdIT(event, gotvendor, size2)
                          }
                          className={Styles.editbutton}
                        >
                          edit
                        </button>
                        {/* ))} */}
                        <button
                          onClick={() => deleteVendor(gotvendor)}
                          className={Styles.deletebutton}
                        >
                          delete
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
          count={vendorStore.vendor.length}
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
                <div className={Styles.vendortitle}>VENDOR</div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Name: </span>
                  <span className={Styles.vendorname}>{drawerInfo.name}</span>
                </div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Address: </span>
                  <span className={Styles.vendorname}>
                    {drawerInfo.address}
                  </span>
                </div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>City: </span>
                  <span className={Styles.vendorname}>{drawerInfo.city}</span>
                </div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>State: </span>
                  <span className={Styles.vendorname}>{drawerInfo.state}</span>
                </div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Email: </span>
                  <span className={Styles.vendorname}>{drawerInfo.email}</span>
                </div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Phone Number: </span>
                  <span className={Styles.vendorname}>{drawerInfo.phone}</span>
                </div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>
                    Account Number:{" "}
                  </span>
                  <span className={Styles.vendorname}>
                    {drawerInfo.accountNumber}
                  </span>
                </div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Account Name: </span>
                  <span className={Styles.vendorname}>
                    {drawerInfo.accountName}
                  </span>
                </div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Bank: </span>
                  <span className={Styles.vendorname}>{drawerInfo.bank}</span>
                </div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Status: </span>
                  <span className={Styles.vendorname}>
                    {drawerInfo.isVerified}
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
                    onClick={() => deleteVendor(drawerInfo)}
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
                    <div className={Styles.heading}>Edit Vendor</div>
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
                            <Form.Label>Vendor Name</Form.Label>
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
                              // name="name"
                              value={drawerInfo.name}
                              onChange={(event) =>
                                handleInputChange(event, "name")
                              }
                              validations={[required, vname]}
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Input
                              style={{
                                border: " 1px solid #f3f3f3",
                                backgroundColor: "rgba(59, 122, 254, 0.02)",
                                width: "100%",
                                padding: "6px 10px",
                                borderRadius: "3px",
                                outline: "none",
                              }}
                              type="email"
                              value={drawerInfo.email}
                              onChange={(event) =>
                                handleInputChange(event, "email")
                              }
                              // name="email"
                              validations={[required, vemail]}
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Input
                              style={{
                                border: " 1px solid #f3f3f3",
                                backgroundColor: "rgba(59, 122, 254, 0.02)",
                                width: "100%",
                                padding: "6px 10px",
                                borderRadius: "3px",
                                outline: "none",
                              }}
                              type="number"
                              value={drawerInfo.phone}
                              onChange={(event) =>
                                handleInputChange(event, "phone")
                              }
                              // name="phone"
                              validations={[required, vphone]}
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Input
                              style={{
                                border: " 1px solid #f3f3f3",
                                backgroundColor: "rgba(59, 122, 254, 0.02)",
                                width: "100%",
                                padding: "6px 10px",
                                borderRadius: "3px",
                                outline: "none",
                              }}
                              type="text"
                              value={drawerInfo.address}
                              onChange={(event) =>
                                handleInputChange(event, "address")
                              }
                              validations={[required, vaddress]}
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Account Name</Form.Label>
                            <Input
                              style={{
                                border: " 1px solid #f3f3f3",
                                backgroundColor: "rgba(59, 122, 254, 0.02)",
                                width: "100%",
                                padding: "6px 10px",
                                borderRadius: "3px",
                                outline: "none",
                              }}
                              value={drawerInfo.accountName}
                              type="text"
                              onChange={(event) =>
                                handleInputChange(event, "accountName")
                              }
                              validations={[required, vaccountName]}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Verification Status</Form.Label>
                            <Select
                              style={{
                                border: " 1px solid #f3f3f3",
                                backgroundColor: "rgba(59, 122, 254, 0.02)",
                                width: "100%",
                                padding: "6px 10px",
                                borderRadius: "3px",
                                outline: "none",
                              }}
                              value={drawerInfo.isVerified}
                              type="text"
                              validations={[required]}
                              onChange={(event) =>
                                handleInputChange(event, "isVerified")
                              }
                              className={Styles.formcontrol}
                              as="select"
                            >
                              <option value="" selected="selected">
                                - Select State -
                              </option>
                              <option value="true">Verified</option>
                              <option value="false">Not Verified</option>
                            </Select>
                          </Form.Group>

                          <Form.Group>
                            <Form.Label>State</Form.Label>
                            <Select
                              style={{
                                border: " 1px solid #f3f3f3",
                                backgroundColor: "rgba(59, 122, 254, 0.02)",
                                width: "100%",
                                padding: "6px 10px",
                                borderRadius: "3px",
                                outline: "none",
                              }}
                              value={drawerInfo.state}
                              type="text"
                              validations={[required]}
                              onChange={(event) =>
                                handleInputChange(event, "state")
                              }
                            >
                              <option value="" selected="selected">
                                - Select State -
                              </option>
                              <option value="Abuja FCT">Abuja FCT</option>
                              <option value="Abia">Abia</option>
                              <option value="Adamawa">Adamawa</option>
                              <option value="Akwa Ibom">Akwa Ibom</option>
                              <option value="Anambra">Anambra</option>
                              <option value="Bauchi">Bauchi</option>
                              <option value="Bayelsa">Bayelsa</option>
                              <option value="Benue">Benue</option>
                              <option value="Borno">Borno</option>
                              <option value="Cross River">Cross River</option>
                              <option value="Delta">Delta</option>
                              <option value="Ebonyi">Ebonyi</option>
                              <option value="Edo">Edo</option>
                              <option value="Ekiti">Ekiti</option>
                              <option value="Enugu">Enugu</option>
                              <option value="Gombe">Gombe</option>
                              <option value="Imo">Imo</option>
                              <option value="Jigawa">Jigawa</option>
                              <option value="Kaduna">Kaduna</option>
                              <option value="Kano">Kano</option>
                              <option value="Katsina">Katsina</option>
                              <option value="Kebbi">Kebbi</option>
                              <option value="Kogi">Kogi</option>
                              <option value="Kwara">Kwara</option>
                              <option value="Lagos">Lagos</option>
                              <option value="Nassarawa">Nassarawa</option>
                              <option value="Niger">Niger</option>
                              <option value="Ogun">Ogun</option>
                              <option value="Ondo">Ondo</option>
                              <option value="Osun">Osun</option>
                              <option value="Oyo">Oyo</option>
                              <option value="Plateau">Plateau</option>
                              <option value="Rivers">Rivers</option>
                              <option value="Sokoto">Sokoto</option>
                              <option value="Taraba">Taraba</option>
                              <option value="Yobe">Yobe</option>
                              <option value="Zamfara">Zamfara</option>
                              <option value="Outside Nigeria">
                                Outside Nigeria
                              </option>
                            </Select>
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Account Number</Form.Label>
                            <Input
                              style={{
                                border: " 1px solid #f3f3f3",
                                backgroundColor: "rgba(59, 122, 254, 0.02)",
                                width: "100%",
                                padding: "6px 10px",
                                borderRadius: "3px",
                                outline: "none",
                              }}
                              type="number"
                              value={drawerInfo.accountNumber}
                              validations={[required, vaccountNumber]}
                              onChange={(event) =>
                                handleInputChange(event, "accountNumber")
                              }
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Input
                              style={{
                                border: " 1px solid #f3f3f3",
                                backgroundColor: "rgba(59, 122, 254, 0.02)",
                                width: "100%",
                                padding: "6px 10px",
                                borderRadius: "3px",
                                outline: "none",
                              }}
                              type="text"
                              validations={[required]}
                              value={drawerInfo.city}
                              type="text"
                              onChange={(event) =>
                                handleInputChange(event, "city")
                              }
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label>Bank</Form.Label>
                            <Input
                              style={{
                                border: " 1px solid #f3f3f3",
                                backgroundColor: "rgba(59, 122, 254, 0.02)",
                                width: "100%",
                                padding: "6px 10px",
                                borderRadius: "3px",
                                outline: "none",
                              }}
                              type="text"
                              validations={[required, vbank]}
                              value={drawerInfo.bank}
                              type="text"
                              onChange={(event) =>
                                handleInputChange(event, "bank")
                              }
                            />
                          </Form.Group>
                        </Col>
                      </Row>

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
                          onClick={submitVendor}
                        >
                          {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          Update Vendor
                        </button>
                      </span>

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
