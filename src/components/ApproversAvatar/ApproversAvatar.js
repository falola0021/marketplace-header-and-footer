import React, { useState } from "react";
import Styles from "./ApproversAvatar.module.css";
import {
  ThemeProvider,
  AvatarGroup,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/core";
import PhaseDataService from "../../services/phase.service";
function ApproversAvatar({ phases, dotColor }) {
  console.log("the phasesssssssshhh", phases);
  const [phaseData, setPhaseData] = React.useState([]);

  const retrievePhaseData = async (phase) => {
    await PhaseDataService.get(phase)
      .then((response) => {
        console.log("responseee", response.data.data);
        let resData = response.data.data;
        setPhaseData(resData);
      })
      .catch((e) => {
        console.log(e);
        console.log(e.response);
      });
  };

  return (
    <>
      <ThemeProvider>
        <AvatarGroup style={{ fontSize: "20px" }} size="sm" max={4}>
          {phases.map((phase) => {
            console.log("this is what is inside phase dami", phase);
            retrievePhaseData(phase);
            console.log("Phase data", phaseData);
            return (
              <Avatar
                //key={phase.approver._id}
                className={Styles.backgroundcolor}
                style={{
                  fontWeight: "900",
                  padding: "17px",
                  color: "#ffffff",
                  backgroundColor: "rgb(54,5,45)",
                }}
                //name={phase.approver.firstName + " " + phase.approver.lastName}
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
