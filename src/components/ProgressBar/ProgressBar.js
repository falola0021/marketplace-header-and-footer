import React from "react";
import Styles from "./ProgressBar.module.css";
import { Progress, ThemeProvider } from "@chakra-ui/core";

function ProgressBar() {
  return (
    <>
      <ThemeProvider>
        <Progress
          style={{ height: "4px", width: "130px" }}
          color="green"
          hasStripe
          isAnimated
          value={100}
        />
      </ThemeProvider>
    </>
  );
}

export default ProgressBar;
