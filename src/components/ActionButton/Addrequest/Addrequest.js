import React from "react";
import Styles from "./Addrequest.module.css";

function Addrequest({ onClick, name, request }) {
  return (
    <>
      <span onClick={request}>
        <div className={Styles.addrequest} onClick={onClick}>
          <div className="fa fa-plus"></div> <span>{name}</span>
        </div>
      </span>
    </>
  );
}

export default Addrequest;
