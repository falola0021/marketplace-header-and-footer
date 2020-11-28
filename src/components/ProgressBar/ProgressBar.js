import React from "react";
// import Styles from "./ProgressBar.module.css";
import { Progress, ThemeProvider } from "@chakra-ui/core";

function ProgressBar({ ticketStatus, workflow, currentPhase }) {
  const { phases = [""] } = workflow || {};
  let phaseIdArray = [];
  for (const fhase of phases) {
    phaseIdArray.push(fhase._id);
  }

  const position = phaseIdArray.indexOf(currentPhase);
  const positivePosition = Math.abs(position);
  const addOneToAll = positivePosition + 1;
  const onePhasePercentage = Number(100 / addOneToAll);

  return (
    <>
      <ThemeProvider>
        {ticketStatus === "pending" ? (
          <Progress
            style={{ height: "4px", width: "130px" }}
            color="yellow"
            hasStripe
            isAnimated
            value={addOneToAll == 1 || 0 ? 0 : onePhasePercentage}
          />
        ) : ticketStatus === "approved" ? (
          <Progress
            style={{ height: "4px", width: "130px" }}
            color="green"
            hasStripe
            isAnimated
            value={onePhasePercentage}
          />
        ) : (
          <Progress
            style={{ height: "4px", width: "130px" }}
            color="red"
            hasStripe
            isAnimated
            value={onePhasePercentage}
          />
        )}
      </ThemeProvider>
    </>
  );
}

export default ProgressBar;
