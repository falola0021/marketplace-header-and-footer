import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Styles from "./MakeRequest.module.css";
import { ThemeProvider, FormControl, FormLabel, Input } from "@chakra-ui/core";
import DropZone from "../../../components/DropZone/DropZone";

function MakeRequest() {
  return (
    <>
      <ThemeProvider>
        <Form>
          <div className={Styles.title1}>Make a Request</div>
          <Row className={Styles.desktopform}>
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
            </Col>

            <Col>
              <FormControl>
                <FormLabel className={Styles.label}>Amount</FormLabel>
                <Input placeholder="Enter Amount" className={Styles.input} />
              </FormControl>
              <FormControl>
                <FormLabel className={Styles.label}>Due Date</FormLabel>
                <Input type="date" className={Styles.input} />
              </FormControl>
            </Col>
            <Col>
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
            </Col>
          </Row>

          <div className={Styles.dropzonebox}>
            {/* <Form.Label>Upload Invoice</Form.Label> */}
            <DropZone />
          </div>
          <div className={Styles.submitdiv1}>
            <input type="submit" className={Styles.submit} />
          </div>
        </Form>
      </ThemeProvider>

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
