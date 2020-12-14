import React from "react";
import Styles from "./ConfirmationStatus.module.css";

function ConfirmationStatus({ statos }) {
  return (
    <>
      {statos === "pending" ? (
        <div className={Styles.statusPending}>{statos}</div>
      ) : statos === "approved" ? (
        <div className={Styles.statusConfirmed}>{statos}</div>
      ) : (
        <div className={Styles.statusDeclined}>{statos}</div>
      )}
    </>
  );
}

export default ConfirmationStatus;
