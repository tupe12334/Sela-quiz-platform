import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import QuestionManagementPage from "../pages/QuestionManagementPage";
import QuizManagementPage from "../pages/QuizManagementPage";
import UserPage from "../pages/User";

const Body = () => {
  return (
    <div
      style={{
        marginBottom: 0,
        marginTop: 0,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 1600,
        padding: "3rem",
      }}
    >
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={LoginPage} path="/login" exact />
        <Route component={UserPage} path="/user/:id" exact />
        <Route component={AdminPage} path="/admin/:id" exact />
        <Route component={QuizManagementPage} path="/quiz-management" exact />
        <Route
          component={QuestionManagementPage}
          path="/Question-management"
          exact
        />
      </Switch>
    </div>
  );
};

export default Body;
