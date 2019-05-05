import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import TimeBank from "./TimeBank";
import Login from "./Login";
import About from "./About";
import Freebies from "./Freebies";
import Help from "./Help";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/timebank" component={TimeBank} />
      <Route path="/freebies" component={Freebies} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/help" component={Help} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
