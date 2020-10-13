import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import DepartmentHead from "./pages/DepartmentHead/DepartmentHead";
import Audit from "./pages/Audit/Audit";
import UpdatePasswordPage from "./pages/UpdatePasswordPage/UpdatePasswordPage";
import Profile from "./pages/Profile/Profile";
import Finance from "./pages/Finance/Finance";
import User from "./pages/Users/Users";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/user" component={User} />
      <Route path="/change-password" component={ForgotPasswordPage} />
      <Route path="/update-password" component={UpdatePasswordPage} />
      <Route path="/profile" component={Profile} />
      <Route path="/head-of-department" component={DepartmentHead} />
      <Route path="/audit" component={Audit} />
      <Route path="/finance" component={Finance} />
    </Switch>
  );
}

export default App;
