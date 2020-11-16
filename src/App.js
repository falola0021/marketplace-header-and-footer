import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import UpdatePasswordPage from "./pages/UpdatePasswordPage/UpdatePasswordPage";
import Profile from "./pages/Profile/Profile";

import User from "./pages/Users/Users";
import { history } from "./helpers/history";
import { clearMessage } from "./redux/actions/authActions/message";

function App() {
  // const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={["/"]} component={LandingPage} />
        <Route exact path="/user" component={User} />
        <Route exact path="/change-password" component={ForgotPasswordPage} />
        <Route exact path="/update-password" component={UpdatePasswordPage} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
