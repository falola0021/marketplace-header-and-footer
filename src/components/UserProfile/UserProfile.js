import React from "react";
import Styles from "./UserProfile.module.css";
import {
  Avatar,
  Stack,
  ThemeProvider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/core";
import { Row, Col } from "react-bootstrap";

function UserProfile() {
  return (
    <>
      <ThemeProvider>
        <div className={Styles.container}>
          <p className={Styles.profileheader}>User Profile</p>
          <div className={Styles.content}>
            <div className={Styles.avatarcontainer}>
              <div>
                <Stack>
                  <Avatar
                    size="sm"
                    className={Styles.avatar}
                    name="Kola Tioluwani"
                    src="https://bit.ly/tioluwani-kolawole"
                  />
                </Stack>
              </div>
              <div className={Styles.fullname}>Kami Temitayo</div>
            </div>

            <hr />
            <p className={Styles.title}>Basic Profile</p>
            <Row className="pl-5 pr-5 pt-3 pb-2">
              <Col>
                <FormControl>
                  <FormLabel className={Styles.label} htmlFor="fname">
                    First Name
                  </FormLabel>
                  <Input className={Styles.input} value="Kemi " readOnly />
                </FormControl>
                <FormControl>
                  <FormLabel className={Styles.label} htmlFor="fname">
                    Email
                  </FormLabel>
                  <Input
                    className={Styles.input}
                    value="kemi.tayo@thegiggroupng.com"
                    readOnly
                  />
                </FormControl>
              </Col>
              <Col>
                <FormControl>
                  <FormLabel className={Styles.label} htmlFor="fname">
                    Last Name
                  </FormLabel>
                  <Input className={Styles.input} value="Temitayo" readOnly />
                </FormControl>
                <FormControl>
                  <FormLabel className={Styles.label} htmlFor="fname">
                    Department
                  </FormLabel>
                  <Input className={Styles.input} value="Technology" readOnly />
                </FormControl>
              </Col>
            </Row>
            <p className={Styles.title}>Change Password</p>
            <form action="google.com">
              <Row className="pl-5 pr-5 pt-3 ">
                <Col>
                  <FormControl>
                    <FormLabel className={Styles.label} htmlFor="fname">
                      New Password
                    </FormLabel>
                    <Input className={Styles.input} />
                  </FormControl>
                </Col>
                <Col>
                  <FormControl>
                    <FormLabel className={Styles.label} htmlFor="fname">
                      Confirm New Password
                    </FormLabel>
                    <Input className={Styles.input} />
                  </FormControl>
                </Col>
              </Row>
              <div className={Styles.submitdiv}>
                <input type="submit" className={Styles.submit} />
              </div>
            </form>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default UserProfile;
