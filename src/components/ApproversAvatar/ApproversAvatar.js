import React, { useState, useEffect } from "react";
import Styles from "./ApproversAvatar.module.css";
import {
  ThemeProvider,
  AvatarGroup,
  Avatar,
  AvatarBadge,
  Tooltip,
} from "@chakra-ui/core";

import PhaseDataService from "../../services/phase.service";

function ApproversAvatar({ workflow, currentPhase, currentPhaseStatus }) {
  const { phases = [""] } = workflow || {};
  let phaseIdArray = [];
  for (const fhase of phases) {
    phaseIdArray.push(fhase._id);
  }

  const positionOfCurrentPhase = phaseIdArray.indexOf(currentPhase);
  // console.log("the position", positionOfCurrentPhase);

  return (
    <>
      <ThemeProvider>
        <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
          {phases.map((phase, index) => (
            <Avatar
              key={phase._id}
              className={Styles.backgroundcolor}
              style={{
                fontWeight: "900",
                padding: "17px",
                color: "#ffffff",
                backgroundColor: "rgb(54,5,45)",
              }}
              name={
                phase.approver
                  ? phase.approver.firstName + " " + phase.approver.lastName
                  : ""
              }
            >
              {currentPhaseStatus == "rejected" &&
              positionOfCurrentPhase === index ? (
                <AvatarBadge size="0.9em" bg="red.500" />
              ) : positionOfCurrentPhase > index ||
                currentPhaseStatus === "approved" ? (
                <AvatarBadge size="0.9em" bg="green.500" />
              ) : phase._id === currentPhase ? (
                <AvatarBadge size="0.9em" bg="yellow.500" />
              ) : (
                <AvatarBadge size="0.9em" bg="#f3f3f3" />
              )}
            </Avatar>
          ))}
        </AvatarGroup>
      </ThemeProvider>
    </>
  );
}

export default ApproversAvatar;
