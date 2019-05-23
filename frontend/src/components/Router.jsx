import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import TimeBank from "./TimeBank";

import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import About from "./About";
import Freebies from "./Freebies";
import Help from "./Help";
import NavBar from "./NavBar";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <NavBar />
    <div className="py-5">
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/timebank" component={TimeBank} />
        <Route path="/freebies" component={Freebies} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
