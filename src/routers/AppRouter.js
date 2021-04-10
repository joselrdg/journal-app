import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { Journal } from "../components/journal/JournalScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component="AuthRouter" />
          <Route exact path="/" component="Journal" />
        </Switch>
      </div>
    </Router>
  );
};
