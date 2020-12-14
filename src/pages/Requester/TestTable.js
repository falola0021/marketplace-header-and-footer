import React, { useState, useEffect, useRef } from "react";
import RequestDataService from "../../services/requester.service";
import ApproversAvatar from "../../components/ApproversAvatar/ApproversAvatar";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import ConfirmationStatus from "../../components/ConfirmationStatus/ConfirmationStatus";
import InvoicePreview from "../../components/InvoicePreview/InvoicePreview";
import Addrequest from "../../components/ActionButton/Addrequest/Addrequest";
import MakeRequest from "./MakeRequest/MakeRequest";
import kassandahmobile from "../../pages/assets/kassandahmobilepurple.png";
import MUIDataTable from "mui-datatables";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// import Tooltip from "@material-ui/core/Tooltip";
// import EditIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  ThemeProvider,
  DrawerCloseButton,
  Spinner,
} from "@chakra-ui/core";

import moment from "moment";
import { Row, Col } from "react-bootstrap";
import Styles from "./Table.module.css";
import { RefreshSharp } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

function TestTable() {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [requests, setRequests] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [sideview, setSideView] = useState({});
  const sizes = ["xl"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  // const [test, setTest] = useState(false);

  const columns = [
    {
      name: "phaseStatus",
      options: {
        filter: true,
        sort: false,
        display: false,
        viewColumns: false,
        filter: false,
        viewColumns: false,
        filter: false,
        download: false,
        customBodyRender: (value, meta, updateValue) => <></>,
      },
    },
    {
      name: "status",
      options: {
        display: false,
        viewColumns: false,
        filter: false,
        viewColumns: false,
        filter: false,
        download: false,
        customBodyRender: (value, meta, updateValue) => <></>,
      },
    },
    {
      name: "description",
      label: "Title",
      options: {
        filter: true,
        sort: true,
        // onRowClick: (rowData, rowState) => {
        //   console.log(rowData, rowState);
        // },
        onRowClick: (rowData, rowState) => {
          alert("hello");
        },
      },
    },
    {
      name: "items",
      label: "Items",
      options: {
        filter: true,
        sort: true,
      },
    },

    {
      name: "amount",
      label: "Amount (₦)",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "dueDate",
      label: "Date",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => (
          <>{moment(value).format("DD/MM/YYYY")}</>
        ),
      },
    },
    {
      name: "workflow",
      label: "Approvers",
      options: {
        filter: false,
        sort: false,
        download: false,

        customBodyRender: (value, tableMeta, updateValu) => (
          <>
            {
              <ApproversAvatar
                workflow={value}
                currentPhase={tableMeta.rowData[8]._id}
                currentPhaseStatus={tableMeta.rowData[0]}
              />
            }
          </>
        ),
      },
    },
    {
      name: "phase",
      label: "Progress",
      options: {
        filter: false,
        sort: false,
        download: false,

        customBodyRender: (value, tableMeta, updateValue) => (
          <>
            {
              <ProgressBar
                currentPhase={value._id}
                currentPhaseStatus={tableMeta.rowData[1]}
                workflow={tableMeta.rowData[6]}
                ticketStatus={tableMeta.rowData[1]}
              />
            }
          </>
        ),
      },
    },
    {
      name: "phase",
      options: {
        filter: false,
        sort: false,
        display: false,
        viewColumns: false,
        filter: false,
        viewColumns: false,
        filter: false,
        download: false,
        customBodyRender: (value, meta, updateValue) => <></>,
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: false,
        sort: false,

        customBodyRender: (value) => (
          <>
            <ConfirmationStatus statos={value} />
          </>
        ),
      },
    },
    {
      name: "dueDate",
      options: {
        filter: false,
        sort: false,
        display: false,
        viewColumns: false,
        filter: false,
        viewColumns: false,
        filter: false,
      },
    },
    {
      name: "ticketDocuments",
      options: {
        filter: false,
        sort: false,
        display: false,
        viewColumns: false,
        filter: false,
        download: false,
      },
    },
    {
      name: "comments",
      options: {
        filter: false,
        sort: false,
        display: false,
        viewColumns: false,
        filter: false,
        download: false,
      },
    },
    {
      name: "ref",
      options: {
        filter: false,
        sort: false,
        display: false,
        viewColumns: false,
        filter: false,
      },
    },
    {
      name: "status",
      options: {
        filter: false,
        sort: false,
        display: false,
        viewColumns: false,
        filter: true,
        download: false,
      },
    },
    {
      name: "workflow",
      options: {
        filter: false,
        sort: false,
        display: false,
        viewColumns: false,
        filter: false,
        download: false,
      },
    },
    {
      name: "phaseStatus",
      options: {
        filter: false,
        sort: false,
        display: false,
        viewColumns: false,
        filter: false,
        download: false,
      },
    },
    {
      name: "numberOfItems",
      options: {
        filter: false,
        sort: false,
        display: false,
        viewColumns: false,
        filter: false,
      },
    },
    {
      name: "phase",
      options: {
        filter: false,
        sort: false,
        display: false,
        viewColumns: false,
        filter: false,
        download: false,
      },
    },
    {
      name: "user",
      options: {
        filter: false,
        sort: false,
        display: false,
        viewColumns: false,
        filter: false,
        download: false,
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

  const retrieveRequests = async () => {
    setLoading(true);
    await RequestDataService.getUserTicketList()
      .then((response) => {
        let resData = response.data.data.ticketList.sort((a, b) =>
          new Date(a) < new Date(b) ? 1 : -1
        );
        setRequests(resData);
        let firstTicket = resData[0];

        handleSideview(firstTicket);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        console.log("wrong", e.response);
        setLoading(false);
      });
  };

  const handleSideview = (requests) => {
    setSideView(requests);
  };

  useEffect(() => {
    retrieveRequests();
  }, []);

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
        <Col sm="9">
          <MuiThemeProvider theme={myTheme}>
            <MUIDataTable
              title={
                <div className={Styles.addrequest}>
                  {sizes.map((size) => (
                    <Addrequest
                      name="Make a request"
                      onClick={() => handleClick(size)}
                      type="button"
                      key={size}
                    />
                  ))}
                </div>
              }
              data={requests}
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

                // rowsPerPage: 15,
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
                      "Sorry,  no matching data "
                    ),
                  },
                },

                onRowClick: (rowData) => {
                  if (window.screen.width < 500 && window.screen.height < 900) {
                    handleSideview(rowData);
                    childRef.current.childFunction();
                  } else {
                    handleSideview(rowData);
                  }
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
        <Col>
          {" "}
          <span ref={parentRef} className={Styles.invoiceContainer}>
            <InvoicePreview
              loading1={loading}
              sideview={sideview}
              ref={childRef}
            />
          </span>
        </Col>
      </Row>

      <ThemeProvider>
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <span className={Styles.requestform}>
            <DrawerOverlay
              style={{ backgroundColor: "rgba(255, 255, 255,0.2)" }}
            />

            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <img
                  src={kassandahmobile}
                  alt="logo"
                  style={{
                    width: "30px",
                    height: "45px",
                    marginTop: "10px",
                    cursor: "pointer",
                  }}
                />{" "}
                <MakeRequest
                  retrieveRequests={retrieveRequests}
                  closeDrawer={onClose}
                />
              </DrawerBody>
            </DrawerContent>
          </span>
        </Drawer>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default TestTable;
// const myTheme = createMuiTheme({
//   overrides: {
//     MUIDataTable: {
//       responsiveScroll: {
//         maxHeight: "50px",
//         // overflowY: 'scroll',
//       },
//     },
//   },
// });
