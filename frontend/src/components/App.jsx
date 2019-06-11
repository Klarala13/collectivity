import React from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      input: {}
    };
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="app">
          <NavLink
                to="/login"
                activeClassName="app"
                className="btn btn-primary"
              >
                Login / Register
              </NavLink>
        </div>
      </div>
    );
  }
}

export default App;
