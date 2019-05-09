import React from 'react';
import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { routerArray } from './Router';
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  withRouter
} from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <NavBar />
        <div>
          <Switch>
            {routerArray.map(({ exact, component, path }) => (
              <Route
                key={path}
                exact={exact}
                path={path}
                component={component}
              />
            ))}
          </Switch>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
