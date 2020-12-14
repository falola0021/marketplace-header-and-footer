// import React, { useState, useRef, useEffect } from "react";
// import Styles from "./Table.module.css";
// import ApproversAvatar from "../../components/ApproversAvatar/ApproversAvatar";
// import ProgressBar from "../../components/ProgressBar/ProgressBar";
// import ConfirmationStatus from "../../components/ConfirmationStatus/ConfirmationStatus";
// import SearchFilter from "../../components/SearchFilter/SearchFilter";
// import PropTypes from "prop-types";
// import clsx from "clsx";
// import { lighten, makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TablePagination from "@material-ui/core/TablePagination";
// import TableRow from "@material-ui/core/TableRow";
// import TableSortLabel from "@material-ui/core/TableSortLabel";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Checkbox from "@material-ui/core/Checkbox";
// import IconButton from "@material-ui/core/IconButton";
// import Tooltip from "@material-ui/core/Tooltip";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Switch from "@material-ui/core/Switch";
// // import RequestDataService from "../../services/requester.service";
// import TicketDataService from "../../services/ticket.service";
// import { Row, Col } from "react-bootstrap";
// import InvoicePreview from "../../components/InvoicePreview/ApproverInvoicePreview";
// import moment from "moment";

// import {
//   Drawer,
//   DrawerBody,
//   DrawerOverlay,
//   DrawerContent,
//   useDisclosure,
//   ThemeProvider,
//   Spinner,
//   // Textarea,
// } from "@chakra-ui/core";

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   { id: "requester", numeric: true, disablePadding: false, label: "Requester" },

//   {
//     id: "title",
//     numeric: false,
//     disablePadding: true,
//     label: "Title",
//   },

//   { id: "item", numeric: true, disablePadding: false, label: "Item(s)" },
//   { id: "amoumt", numeric: true, disablePadding: false, label: "Amount (₦)" },
//   { id: "due", numeric: true, disablePadding: false, label: "Date" },
//   { id: "approver", numeric: true, disablePadding: false, label: "Approvers" },
//   { id: "progress", numeric: true, disablePadding: false, label: "Progress" },
//   { id: "status", numeric: true, disablePadding: false, label: "Status" },
// ];

// function EnhancedTableHead(props) {
//   const {
//     classes,
//     onSelectAllClick,
//     order,
//     orderBy,
//     numSelected,
//     rowCount,
//     onRequestSort,
//   } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead className={Styles.tablehead}>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{ "aria-label": "select all desserts" }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             className={Styles.tableheader}
//             color="red"
//             key={headCell.id}
//             align={headCell.numeric ? "left" : "left"}
//             padding={headCell.disablePadding ? "none" : "default"}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : "asc"}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <span className={classes.visuallyHidden}>
//                   {order === "desc" ? "sorted descending" : "sorted ascending"}
//                 </span>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(["asc", "desc"]).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const useToolbarStyles = makeStyles((theme) => ({
//   root: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//   },
//   highlight:
//     theme.palette.type === "light"
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   title: {
//     flex: "1 1 100%",
//   },
// }));

// const EnhancedTableToolbar = (props) => {
//   const classes = useToolbarStyles();
//   const { numSelected } = props;
//   const sizes = ["xl"];
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [size, setSize] = React.useState("md");
//   const handleClick = (newSize) => {
//     setSize(newSize);
//     onOpen();
//   };

//   return (
//     <>
//       <Toolbar
//         className={clsx(classes.root, {
//           [classes.highlight]: numSelected > 0,
//         })}
//       >
//         {numSelected > 0 ? (
//           <Typography
//             className={classes.title}
//             color="inherit"
//             variant="subtitle1"
//             component="div"
//           >
//             {numSelected} selected
//           </Typography>
//         ) : (
//           <Typography
//             className={classes.title}
//             variant="h6"
//             id="tableTitle"
//             component="div"
//           >
//             <div className={Styles.tabletop}>
//               <span>
//                 <SearchFilter />
//               </span>
//             </div>
//           </Typography>
//         )}

//         {numSelected > 0 ? (
//           <Tooltip title="Delete">
//             <IconButton aria-label="delete">
//               <i className="fa fa-download"></i>

//               {/* <DeleteIcon /> */}
//             </IconButton>
//           </Tooltip>
//         ) : (
//           <span></span>
//         )}
//       </Toolbar>
//     </>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//   },
//   paper: {
//     width: "100%",
//     marginBottom: theme.spacing(2),
//   },
//   table: {
//     minWidth: 750,
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: "rect(0 0 0 0)",
//     height: 1,
//     margin: -1,
//     overflow: "hidden",
//     padding: 0,
//     position: "absolute",
//     top: 20,
//     width: 1,
//     alignItems: "center",
//   },
// }));

// export default function EnhancedTable(props, { preview }) {
//   const classes = useStyles();
//   const [order, setOrder] = React.useState("asc");
//   const [orderBy, setOrderBy] = React.useState("calories");
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const [requests, setRequests] = React.useState([]);
//   const [loading, setLoading] = useState(false);
//   const [successful, setSuccessful] = useState(false);
//   const [message, setMessage] = useState("");
//   // const [allUserRequest, setAllUserRequest] = useState("");
//   // const currentUser = AuthService.getCurrentUser();
//   const [drawerInfo, setDrawerInfo] = React.useState({});
//   const [sideview, setSideView] = React.useState({});

//   const checkBtn = useRef();
//   const form = useRef();

//   const size1 = "xs";
//   const size2 = "lg";

//   const retrieveTickets = async () => {
//     setLoading(true);
//     await TicketDataService.getTicketAwaitingApproval()
//       .then((response) => {
//         console.log("response gggggg", response);
//         let resData = response.data.data.tickets.sort((a, b) =>
//           new Date(a) < new Date(b) ? 1 : -1
//         );
//         setRequests(resData);
//         let firstData = resData[0];
//         handleSideview(firstData);
//         console.log("the data", resData);
//         setLoading(false);
//       })
//       .catch((e) => {
//         console.log(e);
//         console.log("errrrrrr", e.response);
//         setLoading(false);
//       });
//   };

//   const handleSideview = (requests) => {
//     setSideView(requests);
//     console.log("na here", sideview);
//   };

//   useEffect(() => {
//     retrieveTickets();
//   }, []);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = requests.map((n) => n._id);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, _id) => {
//     const selectedIndex = selected.indexOf(_id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, _id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (_id) => selected.indexOf(_id) !== -1;

//   const emptyRows =
//     rowsPerPage - Math.min(rowsPerPage, requests.length - page * rowsPerPage);

//   return (
//     <>
//       <Row className="mt-5 mb-5">
//         <Col sm="9">
//           <div className={classes.root}>
//             <Paper>
//               <EnhancedTableToolbar numSelected={selected.length} />
//               <TableContainer>
//                 <Table
//                   style={{ backgroundColor: "#f8fcfd" }}
//                   className={Styles.table}
//                   aria-labelledby="tableTitle"
//                   size={dense ? "small" : "medium"}
//                   aria-label="enhanced table"
//                 >
//                   <EnhancedTableHead
//                     classes={classes}
//                     numSelected={selected.length}
//                     order={order}
//                     orderBy={orderBy}
//                     onSelectAllClick={handleSelectAllClick}
//                     onRequestSort={handleRequestSort}
//                     rowCount={requests.length}
//                   />
//                   <div className={Styles.centered}>
//                     {loading && (
//                       <ThemeProvider>
//                         <Spinner
//                           thickness="4px"
//                           speed="0.65s"
//                           emptyColor="gray.200"
//                           color="blue.500"
//                           size="xl"
//                         />
//                       </ThemeProvider>
//                     )}
//                   </div>
//                   <TableBody>
//                     {stableSort(requests, getComparator(order, orderBy))
//                       .slice(
//                         page * rowsPerPage,
//                         page * rowsPerPage + rowsPerPage
//                       )
//                       .map((request, index) => {
//                         const isItemSelected = isSelected(requests._id);
//                         const labelId = `enhanced-table-checkbox-${index}`;
//                         const workflow = request.workflow;
//                         const currentPhase = request.phase._id;
//                         const currentPhaseStatus = request.phaseStatus;
//                         return (
//                           <TableRow
//                             hover
//                             role="checkbox"
//                             aria-checked={isItemSelected}
//                             tabIndex={-1}
//                             key={request._id}
//                             selected={isItemSelected}
//                           >
//                             {/* {currentUser.userId == request.user && (
//                         <> */}
//                             <TableCell padding="checkbox">
//                               <Checkbox
//                                 onClick={(event) =>
//                                   handleClick(event, request._id)
//                                 }
//                                 checked={isItemSelected}
//                                 inputProps={{ "aria-labelledby": labelId }}
//                               />
//                             </TableCell>

//                             <TableCell
//                               onClick={(event) => setSideView(request)}
//                               align="left"
//                             >
//                               {request.user.firstName} {request.user.lastName}
//                             </TableCell>

//                             <TableCell
//                               onClick={(event) => setSideView(request)}
//                               align="left"
//                             >
//                               {request.description}
//                             </TableCell>

//                             <TableCell
//                               onClick={(event) => setSideView(request)}
//                               align="left"
//                             >
//                               {request.items}{" "}
//                             </TableCell>
//                             <TableCell
//                               onClick={(event) => setSideView(request)}
//                               align="left"
//                             >
//                               {request.amount}
//                             </TableCell>
//                             <TableCell
//                               onClick={(event) => setSideView(request)}
//                               align="left"
//                             >
//                               {moment(request.dueDate).format("DD/MM/YYYY")}
//                             </TableCell>
//                             <TableCell align="left">
//                               <ApproversAvatar
//                                 currentPhaseStatus={currentPhaseStatus}
//                                 workflow={workflow}
//                                 currentPhase={currentPhase}
//                                 ticketStatus={request.status}
//                               />
//                             </TableCell>
//                             <TableCell align="left">
//                               {" "}
//                               <ProgressBar
//                                 workflow={workflow}
//                                 currentPhase={currentPhase}
//                                 ticketStatus={request.status}
//                                 currentPhaseStatus={currentPhaseStatus}
//                               />
//                             </TableCell>
//                             <TableCell align="left">
//                               {" "}
//                               <ConfirmationStatus statos={request.status} />
//                             </TableCell>
//                           </TableRow>
//                         );
//                         // });
//                       })}
//                     {emptyRows > 0 && (
//                       <TableRow
//                         style={{ height: (dense ? 33 : 53) * emptyRows }}
//                       >
//                         <TableCell colSpan={10} />
//                       </TableRow>
//                     )}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//               <TablePagination
//                 rowsPerPageOptions={[10, 20, 30]}
//                 component="div"
//                 count={requests.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 onChangePage={handleChangePage}
//                 onChangeRowsPerPage={handleChangeRowsPerPage}
//               />
//             </Paper>
//             <FormControlLabel
//               control={<Switch checked={dense} onChange={handleChangeDense} />}
//               label="Dense padding"
//             />
//           </div>
//         </Col>
//         <Col>
//           <InvoicePreview
//             loading1={loading}
//             drawerInfo={drawerInfo}
//             sideview={sideview}
//           />
//         </Col>
//       </Row>
//     </>
//   );
// }
