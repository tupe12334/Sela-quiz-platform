import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import { createBrowserHistory } from "history";
import LoginPage from "./pages/Login";
const history = createBrowserHistory();
const MyRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={LoginPage} path="/login" exact />
      </Switch>
    </Router>
  );
};

export default MyRouter;
