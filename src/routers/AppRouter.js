import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import LandingPage from "../components/LandingPage";

export const history = createHistory();

const RouteNotFound = () => <Redirect to="/" />;

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={LandingPage} exact={true} />
      <RouteNotFound />
    </Switch>
  </Router>
);

export default AppRouter;
