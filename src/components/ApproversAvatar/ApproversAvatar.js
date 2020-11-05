import React, { useState, useEffect } from "react";
import Styles from "./ApproversAvatar.module.css";
import {
  ThemeProvider,
  AvatarGroup,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/core";
import RequestDataService from "../../services/requester.service";
function ApproversAvatar({ phases, dotColor }) {
  return (
    <>
      <ThemeProvider>
        <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
          {phases.map((phase) => {
            return (
              <Avatar
                key={phase.approver._id}
                className={Styles.backgroundcolor}
                style={{
                  fontWeight: "900",
                  padding: "17px",
                  color: "#ffffff",
                  backgroundColor: "rgb(54,5,45)",
                }}
                name={phase.approver.firstName + " " + phase.approver.lastName}
              >
                {dotColor === "pending" ? (
                  <AvatarBadge size="0.9em" bg="yellow.500" />
                ) : dotColor === "approved" ? (
                  <AvatarBadge size="0.9em" bg="green.500" />
                ) : (
                  <AvatarBadge size="0.9em" bg="red.500" />
                )}
              </Avatar>
            );
          })}
        </AvatarGroup>
      </ThemeProvider>
    </>
  );
}

export default ApproversAvatar;
