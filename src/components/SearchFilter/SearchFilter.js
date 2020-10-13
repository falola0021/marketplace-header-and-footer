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
              placeholder="Search..."
            />
          </FormControl>
          <Button className={Styles.button} type="submit" variantColor="green">
            Send
          </Button>
        </form>
      </ThemeProvider>
    </>
  );
}

export default Addrequest;
