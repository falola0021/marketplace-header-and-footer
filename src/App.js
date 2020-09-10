import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import DepartmentHead from "./pages/DepaertmentHead/DepartmentHead";
import Audit from "./pages/Audit/Audit";
import UpdatePasswordPage from "./pages/UpdatePasswordPage/UpdatePasswordPage";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/change-password" component={ForgotPasswordPage} />
        <Route path="/update-password" component={UpdatePasswordPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/user-dashboard" component={UserDashboard} />
        <Route path="/head-of-department" component={DepartmentHead} />
        <Route path="/audit" component={Audit} />
      </Switch>
    </Router>
  );
}

export default App;
