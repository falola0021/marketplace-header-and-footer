import React, { useState, useRef, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Styles from "./MakeRequest.module.css";
import {
  ThemeProvider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/core";
import Form1 from "react-validation/build/form";
import Input1 from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import VendorDataService from "../../../services/vendor.service";
import DepartmentDataService from "../../../services/department.service";
import CategoryDataService from "../../../services/category.service";
import RequesterDataService from "../../../services/requester.service";

import DropZone from "../../../components/DropZone/DropZone";
import select from "react-validation/build/select";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

function MakeRequest({ closeDrawer }) {
  const form = useRef();
  const checkBtn = useRef();
  const [vendors, setVendors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const [ref, setRef] = useState("");
  const [items, setItems] = useState("");
  const [numberOfItems, setNumberOfItems] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [vendor, setVendor] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [department, setDepartment] = useState("");
  const fileInputRef = useRef();
  const modalImageRef = useRef();
  const modalRef = useRef();
  const progressRef = useRef();
  const uploadRef = useRef();
  const uploadModalRef = useRef();
  // const [selectedFiles, setSelectedFiles] = useState([]);
  const [validFiles, setValidFiles] = useState([]);
  const [unsupportedFiles, setUnsupportedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    let filteredArr = selectedFiles.reduce((acc, current) => {
      const x = acc.find((item) => item.name === current.name);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    setValidFiles([...filteredArr]);
  }, [selectedFiles]);

  const preventDefault = (e) => {
    e.preventDefault();
    // e.stopPropagation();
  };

  const dragOver = (e) => {
    preventDefault(e);
  };

  const dragEnter = (e) => {
    preventDefault(e);
  };

  const dragLeave = (e) => {
    preventDefault(e);
  };

  const fileDrop = (e) => {
    preventDefault(e);
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };

  const selectFile = (event) => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  };

  // setCurrentFiles(currentFiles);

  const fileInputClicked = () => {
    fileInputRef.current.click();
  };

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
      } else {
        files[i]["invalid"] = true;
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);

        setErrorMessage("File type not permitted");
        setUnsupportedFiles((prevArray) => [...prevArray, files[i]]);
      }
    }
  };

  const validateFile = (file) => {
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/xlsx",
    ];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }

    return true;
  };

  const fileSize = (size) => {
    if (size === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const fileType = (fileName) => {
    return (
      fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) ||
      fileName
    );
  };

  const removeFile = (name) => {
    const index = validFiles.findIndex((e) => e.name === name);
    const index2 = selectedFiles.findIndex((e) => e.name === name);
    const index3 = unsupportedFiles.findIndex((e) => e.name === name);
    validFiles.splice(index, 1);
    selectedFiles.splice(index2, 1);
    setValidFiles([...validFiles]);
    setSelectedFiles([...selectedFiles]);
    if (index3 !== -1) {
      unsupportedFiles.splice(index3, 1);
      setUnsupportedFiles([...unsupportedFiles]);
    }
  };

  const openImageModal = (file) => {
    const reader = new FileReader();
    modalRef.current.style.display = "block";
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
    };
  };

  const closeModal = () => {
    modalRef.current.style.display = "none";
    modalImageRef.current.style.backgroundImage = "none";
  };

  const closeUploadModal = () => {
    uploadModalRef.current.style.display = "none";
  };

  const onChangeRef = (e) => {
    const ref = e.target.value;
    setRef(ref);
  };

  const onChangeItems = (e) => {
    const items = e.target.value;
    setItems(items);
  };

  const onChangeNumberOfItems = (e) => {
    const numberOfItems = e.target.value;
    setNumberOfItems(numberOfItems);
  };

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const onChangeCategory = (e) => {
    const category = e.target.value;
    setCategory(category);
  };

  const onChangeVendor = (e) => {
    const vendor = e.target.value;
    setVendor(vendor);
  };

  const onChangeDueDate = (e) => {
    const dueDate = e.target.value;
    setDueDate(dueDate);
  };

  const onChangeAmount = (e) => {
    const amount = e.target.value;
    setAmount(amount);
  };

  const onChangeComment = (e) => {
    const comment = e.target.value;
    setComment(comment);
  };
  const onChangeDepartment = (e) => {
    const department = e.target.value;
    setDepartment(department);
  };

  const handleCreateRequest = (e) => {
    e.preventDefault();
    setDocuments(selectedFiles);
    console.log("the docs", documents);
    setSuccessful(false);
    setLoading(true);
    setMessage("");
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      RequesterDataService.create(
        ref,
        items,
        numberOfItems,
        description,
        category,
        vendor,
        department,
        dueDate,
        amount,
        documents,
        comment
      ).then(
        (response) => {
          setMessage(response.data.message);
          // retrievePhases();
          setLoading(false);
          setSuccessful(true);

          setTimeout(function () {
            closeDrawer();
          }, 1000);
        },
        (error) => {
          const resMessage = error.response.data.message;

          error.toString();
          setSuccessful(false);
          setLoading(false);
          setMessage(error.response.data.message);
          console.log(error.response.data.message);
        }
      );
    } else {
      setLoading(false);
    }
  };

  const retrieveDepartments = async () => {
    await DepartmentDataService.getAll()
      .then((response) => {
        setDepartments(response.data.data);
        console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveVendors = async () => {
    await VendorDataService.getAll()
      .then((response) => {
        setVendors(response.data.data);
        console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const retrieveCategories = async () => {
    await CategoryDataService.getAll()
      .then((response) => {
        setCategories(response.data.data);
        console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveVendors();
    retrieveDepartments();
    retrieveCategories();
  }, []);

  return (
    <>
      <Form1 onSubmit={handleCreateRequest} ref={form}>
        <div className={Styles.title1}>Raise Requisition</div>
        <Row className={Styles.desktopform}>
          <Col>
            <FormControl>
              <FormLabel className={Styles.label}>Request Title</FormLabel>
              <Input1
                validations={[required]}
                name="description"
                value={description}
                onChange={onChangeDescription}
                placeholder="Enter Title"
                className={Styles.input}
              />
            </FormControl>

            <FormControl>
              <FormLabel className={Styles.label}>Item(s)</FormLabel>
              <Input1
                placeholder="Enter item name(s)"
                className={Styles.input}
                validations={[required]}
                name="items"
                value={items}
                onChange={onChangeItems}
              />
            </FormControl>

            <FormControl>
              <FormLabel className={Styles.label}>Vendor</FormLabel>
              <Select
                style={{
                  border: " 1px solid #f3f3f3",
                  backgroundColor: "rgba(59, 122, 254, 0.02)",
                  width: "100%",
                  padding: "6px 10px",
                  borderRadius: "3px",
                  outline: "none",
                }}
                validations={[required]}
                type="text"
                name="vendor"
                value={vendor}
                onChange={onChangeVendor}
                className={Styles.formcontrol}
                as="select"
              >
                <option value="">- Select Vendor -</option>
                {vendors.map((vendor) => (
                  <option key={vendor._id} value={vendor._id}>
                    {vendor.name}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl className="mt-3">
              <FormLabel className={Styles.label}>
                Leave a note (optional)
              </FormLabel>
              <Textarea
                style={{
                  border: " 1px solid #f3f3f3",
                  backgroundColor: "rgba(59, 122, 254, 0.02)",
                  width: "100%",
                  padding: "6px 10px",
                  borderRadius: "3px",
                  outline: "none",
                  minHeight: "25px",
                }}
                validations={[required]}
                name="comment"
                value={comment}
                onChange={onChangeComment}
                placeholder="Write a short note"
                className={Styles.input}
              ></Textarea>
            </FormControl>
          </Col>

          <Col>
            <FormControl>
              <FormLabel className={Styles.label}>Amount</FormLabel>
              <Input1
                type="number"
                validations={[required]}
                placeholder="Enter Amount"
                className={Styles.input}
                name="amount"
                value={amount}
                onChange={onChangeAmount}
              />
            </FormControl>
            <FormControl>
              <FormLabel className={Styles.label}>Due Date</FormLabel>
              <Input1
                name="dueDate"
                value={dueDate}
                onChange={onChangeDueDate}
                type="date"
                className={Styles.input}
              />
            </FormControl>
            <FormControl>
              <FormLabel className={Styles.label}>Department</FormLabel>
              <Select
                style={{
                  border: " 1px solid #f3f3f3",
                  backgroundColor: "rgba(59, 122, 254, 0.02)",
                  width: "100%",
                  padding: "6px 10px",
                  borderRadius: "3px",
                  outline: "none",
                }}
                validations={[required]}
                type="text"
                name="department"
                value={department}
                onChange={onChangeDepartment}
                className={Styles.formcontrol}
                as="select"
              >
                <option value="">- Select Department -</option>
                {departments.map((department) => (
                  <option key={department._id} value={department._id}>
                    {department.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Col>
          <Col>
            <FormControl>
              <FormLabel className={Styles.label}>Quantity</FormLabel>
              <Input1
                validations={[required]}
                placeholder="Enter Quantity"
                className={Styles.input}
                name="numberOfItems"
                value={numberOfItems}
                onChange={onChangeNumberOfItems}
              />
            </FormControl>
            <FormControl>
              <FormLabel className={Styles.label}>Ref No.</FormLabel>
              <Input1
                placeholder="Enter Reference Number"
                className={Styles.input}
                name="ref"
                value={ref}
                onChange={onChangeRef}
              />
            </FormControl>

            <FormControl>
              <FormLabel className={Styles.label}>Category</FormLabel>
              <Select
                validations={[required]}
                style={{
                  border: " 1px solid #f3f3f3",
                  backgroundColor: "rgba(59, 122, 254, 0.02)",
                  width: "100%",
                  padding: "6px 10px",
                  borderRadius: "3px",
                  outline: "none",
                }}
                type="text"
                name="category"
                value={category}
                onChange={onChangeCategory}
                className={Styles.formcontrol}
                as="select"
              >
                <option value="">- Select Category -</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Col>
        </Row>

        <div className={Styles.dropzonebox}>
          <Form.Label className={Styles.label}>Upload Invoice</Form.Label>
          {/* <DropZone /> */}
          <Row>
            <Col>
              <div className="dropcontainer">
                {/* {unsupportedFiles.length === 0 && validFiles.length ? (
          <button className="file-upload-btn" onClick={() => uploadFiles()}>
            Upload Files
          </button>
        ) : (
          ""
        )} */}
                {unsupportedFiles.length ? (
                  <p>Please remove all unsupported files.</p>
                ) : (
                  ""
                )}

                <div
                  className="drop-container"
                  onDragOver={dragOver}
                  onDragEnter={dragEnter}
                  onDragLeave={dragLeave}
                  onDrop={fileDrop}
                  onClick={fileInputClicked}
                >
                  <div className="drop-message">
                    <div className="upload-icon fas fa-cloud-upload-alt"></div>
                    <div className="drop-text">Drag in file(s) to upload</div>
                    <div className="choose-file">Choose File(s)</div>
                  </div>
                  <input
                    ref={fileInputRef}
                    className="file-input"
                    type="file"
                    multiple
                    onChange={selectFile}
                    // value={selectedFiles}
                  />
                </div>
              </div>
            </Col>
            <Col>
              {" "}
              <div className="drop-container-view">
                <p className="preview-document">Preview Document</p>
                {validFiles.map((data, i) => (
                  <div className="file-status-bar" key={i}>
                    <div
                      onClick={
                        !data.invalid
                          ? () => openImageModal(data)
                          : () => removeFile(data.name)
                      }
                    >
                      <div className="file-type-logo fa fa-file-image"></div>
                      <div className="file-type">{fileType(data.name)}</div>
                      <span
                        className={`file-name ${
                          data.invalid ? "file-error" : ""
                        }`}
                      >
                        {data.name}
                      </span>
                      <span className="file-size">({fileSize(data.size)})</span>{" "}
                      {data.invalid && (
                        <span className="file-error-message">
                          ({errorMessage})
                        </span>
                      )}
                    </div>
                    <div
                      className="file-remove"
                      onClick={() => removeFile(data.name)}
                    >
                      X
                    </div>
                  </div>
                ))}
              </div>
              <div className="dropmodal" ref={modalRef}>
                <div className="dropoverlay"></div>
                <span className="dropclose" onClick={() => closeModal()}>
                  X
                </span>
                <div className="dropmodal-image" ref={modalImageRef}></div>
              </div>
              <div className="dropupload-modal" ref={uploadModalRef}>
                <div className="dropoverlay"></div>
                <div className="dropclose" onClick={() => closeUploadModal()}>
                  X
                </div>
                <div className="progress-container">
                  <span ref={uploadRef}></span>
                  <div className="progress">
                    <div className="progress-bar" ref={progressRef}></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={Styles.submitdiv1}>
          <button className={Styles.submit}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            Submit
          </button>
        </div>
        <span>
          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </span>

        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form1>

      <div className={Styles.mobileform}>
        <Form>
          <div className={Styles.title2}>Make a Request</div>
          <Row>
            <Col>
              <FormControl>
                <FormLabel className={Styles.label}>Request Title</FormLabel>
                <Input placeholder="Enter Title" className={Styles.input} />
              </FormControl>
              <FormControl>
                <FormLabel className={Styles.label}>Vendor</FormLabel>
                <Input
                  placeholder="Enter vendor name"
                  className={Styles.input}
                />
              </FormControl>
              <FormControl>
                <FormLabel className={Styles.label}>Item(s)</FormLabel>
                <Input
                  placeholder="Enter item name(s)"
                  className={Styles.input}
                />
              </FormControl>

              <FormControl>
                <FormLabel className={Styles.label}>Amount</FormLabel>
                <Input placeholder="Enter Amount" className={Styles.input} />
              </FormControl>
              <FormControl>
                <FormLabel className={Styles.label}>Due Date</FormLabel>
                <Input type="date" className={Styles.input} />
              </FormControl>

              <FormControl>
                <FormLabel className={Styles.label}>Quantity</FormLabel>
                <Input placeholder="Enter Quantity" className={Styles.input} />
              </FormControl>
              <FormControl>
                <FormLabel className={Styles.label}>Ref No.</FormLabel>
                <Input
                  placeholder="Enter Reference Number"
                  className={Styles.input}
                />
              </FormControl>
              <FormControl>
                <FormLabel className={Styles.label}>Upload file</FormLabel>
                <Input
                  type="file"
                  placeholder="Enter Reference Number"
                  className={Styles.file}
                />
              </FormControl>
            </Col>
          </Row>

          <div className={Styles.submitdiv2}>
            <input type="submit" className={Styles.submit} />
          </div>
        </Form>
      </div>
    </>
  );
}

export default MakeRequest;
