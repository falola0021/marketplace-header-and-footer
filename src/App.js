import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import Requester from "./pages/Requester/Requester";
import DepartmentHead from "./pages/DepartmentHead/DepartmentHead";
import Audit from "./pages/Audit/Audit";
import UpdatePasswordPage from "./pages/UpdatePasswordPage/UpdatePasswordPage";
import Profile from "./pages/Profile/Profile";
import Finance from "./pages/Finance/Finance";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/change-password" component={ForgotPasswordPage} />
        <Route path="/update-password" component={UpdatePasswordPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/requester" component={Requester} />
        <Route path="/head-of-department" component={DepartmentHead} />
        <Route path="/audit" component={Audit} />
        <Route path="/finance" component={Finance} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
