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
import RoleDataService from "../../../../services/role.service";
import { Row, Col, Form } from "react-bootstrap";
import CategoryDataService from "../../../../services/category.service";
import WorkflowDataService from "../../../../services/workflow.service";

import CategoryCreate from "../CategoryCreate";

import kassandahmobile from "../../../assets/kassandahmobilepurple.png";
import {
  Drawer,
  DrawerBody,
  // DrawerOverlay,
  DrawerContent,
  useDisclosure,
  ThemeProvider,
} from "@chakra-ui/core";
import { Textarea } from "@chakra-ui/core";

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

  {
    id: "description",
    numeric: true,
    disablePadding: false,
    label: "Description",
  },
  { id: "workflow", numeric: true, disablePadding: false, label: "Workflow" },

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

const EnhancedTableToolbar = (props) => {
  const [size, setSize] = React.useState("lg");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const classes = useToolbarStyles();
  const { numSelected } = props;
  const handleCreateCategory = (newSize) => {
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
                <button onClick={() => handleCreateCategory(size)}>
                  <i className="fa fa-plus pr-2"></i> Create Category
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
              <CategoryCreate closeDrawer={onClose} />
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
  const [categories, setCategories] = React.useState([]);
  const [workflows, setWorkflows] = React.useState([]);
  const [drawerInfo, setDrawerInfo] = React.useState({});

  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const checkBtn = useRef();

  const dispatch = useDispatch();
  const form = useRef();

  const size1 = "xs";
  const size2 = "lg";
  //working with API

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = categories.map((n) => n._id);
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

  const retrieveCategories = async () => {
    await CategoryDataService.getAll()
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveCategories();
  }, []);

  const handleShowMore = (event, category, newSize) => {
    setDrawerInfo(category);
    setSize(newSize);
    onOpen();
    setMessage("");
  };
  const deleteCategory = (category) => {
    CategoryDataService.remove(category._id).then(
      (response) => {
        setMessage(response.data.message);
        retrieveCategories();
        setLoading(false);
        setSuccessful(true);
        setTimeout(function () {
          onClose();
        }, 1000);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.error) ||
          error.message ||
          error.toString();
        setSuccessful(false);
        setLoading(false);
        setMessage(resMessage);
        console.log(error.response);
      }
    );
  };

  const handleEdIT = (event, category, newSize) => {
    setDrawerInfo(category);
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

  const submitCategory = () => {
    form.current.validateAll();
    setSuccessful(false);
    setLoading(true);
    console.log(drawerInfo);
    const { name, description, workflow } = drawerInfo;
    const update = {
      name,
      description,
      workflow,
    };
    //senddrawerInfo payload to your API
    if (checkBtn.current.context._errors.length === 0) {
      CategoryDataService.update(drawerInfo._id, update)
        .then((response) => {
          setLoading(false);
          retrieveCategories();
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

  const retrieveWorkflows = async () => {
    await WorkflowDataService.getAll()
      .then((response) => {
        setWorkflows(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveWorkflows();
  }, []);

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
    rowsPerPage - Math.min(rowsPerPage, categories.length - page * rowsPerPage);

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
              rowCount={categories.length}
            />
            <TableBody>
              {stableSort(categories, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((category, index) => {
                  const isItemSelected = isSelected(category._id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={category._id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, category._id)}
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>

                      <TableCell
                        align="left"
                        onClick={(event) =>
                          handleShowMore(event, category, size1)
                        }
                      >
                        {category.name}
                      </TableCell>

                      <TableCell
                        align="left"
                        onClick={(event) =>
                          handleShowMore(event, category, size1)
                        }
                      >
                        {category.description}
                      </TableCell>

                      <TableCell
                        align="left"
                        onClick={(event) =>
                          handleShowMore(event, category, size1)
                        }
                      >
                        {category.workflow}
                      </TableCell>

                      <TableCell align="left">
                        <button
                          onClick={(event) =>
                            handleEdIT(event, category, size2)
                          }
                          className={Styles.editbutton}
                        >
                          edit
                        </button>
                        {/* ))} */}
                        <button
                          onClick={() => deleteCategory(category)}
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
          count={categories.length}
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
                <div className={Styles.vendortitle}>Category</div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Name: </span>
                  <span className={Styles.vendorname}>{drawerInfo.name}</span>
                </div>

                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Description: </span>
                  <span className={Styles.vendorname}>
                    {drawerInfo.description}
                  </span>
                </div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Workflow </span>
                  <span className={Styles.vendorname}>
                    {drawerInfo.workflow}
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
                    onClick={() => deleteCategory(drawerInfo)}
                    className={Styles.delete2}
                  >
                    Delete
                  </button>
                </div>
                <div style={{ marginTop: "20px" }}>
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
                    <div className={Styles.heading}>Edit Category</div>
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
                            <Form.Label>Name</Form.Label>
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
                              validations={[required]}
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Workflow</Form.Label>
                            <Select
                              style={{
                                border: " 1px solid #f3f3f3",
                                backgroundColor: "rgba(59, 122, 254, 0.02)",
                                width: "100%",
                                padding: "6px 10px",
                                borderRadius: "3px",
                                outline: "none",
                              }}
                              type="text"
                              name="workflow"
                              value={drawerInfo.workflow}
                              onChange={(event) =>
                                handleInputChange(event, "workflow")
                              }
                              validations={[required]}
                              className={Styles.formcontrol}
                              as="select"
                            >
                              <option value="">{drawerInfo.workflow}</option>
                              {workflows.map((workflow) => (
                                <option key={workflow._id} value={workflow._id}>
                                  {workflow.name}
                                </option>
                              ))}
                            </Select>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Label>Description</Form.Label>
                          <Textarea
                            style={{
                              border: " 1px solid  #f3f3f3",
                              backgroundColor: "rgba(59, 122, 254, 0.02)",
                              width: "100%",
                              padding: "6px 10px",
                              borderRadius: "3px",
                              outline: "none",
                              minHeight: "120px",
                            }}
                            type="text"
                            name="description"
                            value={drawerInfo.description}
                            validations={[required]}
                            onChange={(event) =>
                              handleInputChange(event, "description")
                            }
                            validations={[required]}
                          ></Textarea>
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
                          onClick={submitCategory}
                        >
                          {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          Update Category
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
