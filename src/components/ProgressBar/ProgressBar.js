import React from "react";
// import Styles from "./ProgressBar.module.css";
import { Progress, ThemeProvider } from "@chakra-ui/core";

function ProgressBar({ name, phases }) {
  return (
    <>
      <ThemeProvider>
        {name === "pending" ? (
          <Progress
            style={{ height: "4px", width: "130px" }}
            color="yellow"
            hasStripe
            isAnimated
            value={0}
          />
        ) : name === "approved" ? (
          <Progress
            style={{ height: "4px", width: "130px" }}
            color="green"
            hasStripe
            isAnimated
            value={0}
          />
        ) : (
          <Progress
            style={{ height: "4px", width: "130px" }}
            color="red"
            hasStripe
            isAnimated
            value={0}
          />
        )}
      </ThemeProvider>
    </>
  );
}

export default ProgressBar;
