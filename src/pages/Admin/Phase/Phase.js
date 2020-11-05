import React, { useState } from "react";
import Styles from "./Phase.module.css";
import PhaseTable from "./Table/Table";
function Phase(props) {
  return (
    <>
      <div className={Styles.body}>
        <p className={Styles.title}>Request Phase</p>

        <PhaseTable />
      </div>
    </>
  );
}

export default Phase;
