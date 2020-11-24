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

function ApproversAvatar({ workflow, dotColor }) {
  //const [phaseObj, setPhaseObj] = useState([]);

  const { phases = [""] } = workflow || {};
  // console.log("the phase", phases);

  // const getPhasesObj = (phase) => {

  //   PhaseDataService.get(phase)
  //     .then((response) => {
  //       console.log("the reponse", response.data);
  //       let copyOfPhases = [...phaseObj];
  //       copyOfPhases.push(response.data.data);
  //       setPhaseObj(copyOfPhases);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       console.log("phase eror", e.response);
  //     });

  // };

  return (
    <>
      <ThemeProvider>
        <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
          {phases.map((phase) => (
            <Avatar
              //key={phase.approver._id}
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
              {dotColor === "pending" ? (
                <AvatarBadge size="0.9em" bg="yellow.500" />
              ) : dotColor === "approved" ? (
                <AvatarBadge size="0.9em" bg="green.500" />
              ) : (
                <AvatarBadge size="0.9em" bg="red.500" />
              )}
            </Avatar>
          ))}
        </AvatarGroup>
      </ThemeProvider>
    </>
  );
}

export default ApproversAvatar;
