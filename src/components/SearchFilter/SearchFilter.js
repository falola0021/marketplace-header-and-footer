import React from "react";
import Styles from "./SearchFilter.module.css";
import { FormControl, ThemeProvider, Input, Button } from "@chakra-ui/core";

function Addrequest({ request }) {
  return (
    <>
      <ThemeProvider>
        <form className={Styles.searchfilterbox}>
          <FormControl className={Styles.input}>
            <Input
              className={Styles.search}
              type="text"
              placeholder="Enter search text"
            />
          </FormControl>
          <Button className={Styles.button} type="submit" variantColor="green">
            Search
          </Button>
        </form>
      </ThemeProvider>
    </>
  );
}

export default Addrequest;
