import React from "react";
import Styles from "./ConfirmationStatus.module.css";

function ConfirmationStatus({ name }) {
  return (
    <>
      {name === "pending" ? (
        <div className={Styles.statusPending}>{name}</div>
      ) : name === "approved" ? (
        <div className={Styles.statusConfirmed}>{name}</div>
      ) : (
        <div className={Styles.statusDelined}>{name}</div>
      )}
    </>
  );
}

export default ConfirmationStatus;
