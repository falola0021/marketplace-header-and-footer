import React from "react";
import Styles from "./UserProfile.module.css";
import AuthService from "../../services/auth.service";
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
  const currentUser = AuthService.getCurrentUser();
  const initialName = `${currentUser.firstName} ${currentUser.lastName}`;
  // console.log(currentUser);
  return (
    <>
      <ThemeProvider>
        <div className={Styles.container}>
          {/* <p className={Styles.profileheader}>User Profile</p> */}
          <div className={Styles.content}>
            <div className={Styles.avatarcontainer}>
              <div>
                <Stack>
                  <Avatar
                    size="sm"
                    className={Styles.avatar}
                    name={initialName}
                    src="https://bit.ly/tioluwani-kolawole"
                  />
                </Stack>
              </div>
              <div className={Styles.fullname}>
                {currentUser.firstName} {currentUser.lastName}
              </div>
            </div>

            <hr />
            <p className={Styles.title}>Basic Profile</p>
            <Row className="pl-5 pr-5 pt-3 pb-2">
              <Col>
                <FormControl>
                  <FormLabel className={Styles.label} htmlFor="fname">
                    First Name
                  </FormLabel>
                  <Input
                    className={Styles.input}
                    value={currentUser.firstName}
                    readOnly
                  />
                </FormControl>
                <FormControl>
                  <FormLabel className={Styles.label} htmlFor="fname">
                    Email
                  </FormLabel>
                  <Input
                    className={Styles.input}
                    value={currentUser.email}
                    readOnly
                  />
                </FormControl>
              </Col>
              <Col>
                <FormControl>
                  <FormLabel className={Styles.label} htmlFor="fname">
                    Last Name
                  </FormLabel>
                  <Input
                    className={Styles.input}
                    value={currentUser.lastName}
                    readOnly
                  />
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
