import React from 'react';
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  withRouter
} from 'react-router-dom';
import App from './App';
import TimeBank from './TimeBank';
import Login from './Login';
import About from './About';
import Freebies from './Freebies';
import Help from './Help';
import NotFound from './NotFound';

const Root = () => (
  <Switch>
    <Route exact component={App} path='/' />
    <Route component={TimeBank} path='/timebank' />
    <Route component={Freebies} path='/freebies' />
    <Route component={Login} path='/login' />
    <Route component={About} path='/about' />
    <Route component={Help} path='/help' />
    <Route component={NotFound} />
  </Switch>
);

const RootwithAut = withRouter(Root);

export default RootwithAut;
