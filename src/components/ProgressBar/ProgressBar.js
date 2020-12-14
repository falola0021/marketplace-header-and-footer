import React from "react";
// import Styles from "./ProgressBar.module.css";
import { Progress, ThemeProvider } from "@chakra-ui/core";

function ProgressBar({
  ticketStatus,
  workflow,
  currentPhase,
  currentPhaseStatus,
}) {
  console.log("ticket status", ticketStatus);
  console.log("workflow", workflow);
  console.log("current phase ", currentPhase);
  console.log("current phase status", currentPhaseStatus);

  const { phases = [""] } = workflow || {};
  let phaseIdArray = [];
  for (const fhase of phases) {
    phaseIdArray.push(fhase._id);
  }

  let progress = 0;
  let onePhasePercentage = Number(100 / phaseIdArray.length);

  for (const faze of phaseIdArray) {
    let posOfCurrentPhase = phaseIdArray.indexOf(currentPhase);
    let posOffaze = phaseIdArray.indexOf(faze);
    if (posOfCurrentPhase > posOffaze) {
      progress = progress + onePhasePercentage;
    }
    if (currentPhaseStatus == "approved") {
      progress = 100;
    }
    if (currentPhaseStatus == "rejected" || ticketStatus == "rejected") {
      progress = 100;
    }
  }

  return (
    <>
      <ThemeProvider>
        {ticketStatus === "pending" ? (
          <Progress
            style={{ height: "4px", width: "130px" }}
            color="yellow"
            hasStripe
            isAnimated
            value={progress}
          />
        ) : ticketStatus === "approved" ? (
          <Progress
            style={{ height: "4px", width: "130px" }}
            color="green"
            // hasStripe
            // isAnimated
            value={progress}
          />
        ) : ticketStatus === "rejected" ? (
          <Progress
            style={{ height: "4px", width: "130px" }}
            color="red"
            // hasStripe
            // isAnimated
            value={progress}
          />
        ) : (
          ""
        )}
      </ThemeProvider>
    </>
  );
}

export default ProgressBar;
