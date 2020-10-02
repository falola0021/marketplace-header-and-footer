import React from "react";
import Styles from "./ActionButton.module.css";

function ActionButton({ preview }) {
  return (
    <>
      <button onClick={preview} className={Styles.actionbutton}>
        Preview
      </button>
    </>
  );
}

export default ActionButton;
