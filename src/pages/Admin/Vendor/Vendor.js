import React, { useState } from "react";
import Styles from "./Vendor.module.css";
import VendorTable from "./Table/Table";
function Vendor(props) {
  return (
    <>
      <div className={Styles.body}>
        <p className={Styles.title}>Vendor</p>

        <VendorTable />
      </div>
    </>
  );
}

export default Vendor;
