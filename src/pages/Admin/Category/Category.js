import React, { useState } from "react";
import Styles from "./Category.module.css";
import CategoryTable from "./Table/Table";
function Category(props) {
  return (
    <>
      <div className={Styles.body}>
        <p className={Styles.title}>Category</p>
        <CategoryTable />
      </div>
    </>
  );
}

export default Category;
