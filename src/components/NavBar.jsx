import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    open: false
  };

  navToList = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top nav-main">
        <div className="container">
          <NavLink to="/" activeClassName="active" className="navbar-brand">
            LOGO
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={e => this.navToList()}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`${!this.state.open ? `collapse` : ``} navbar-collapse`}
            id="navbarNav"
          >
            <nav className="w-100 nav flex-column flex-md-row justify-content-between">
              <div className="d-flex flex-column flex-md-row">
                <NavLink
                  to="/freebies"
                  activeClassName="active"
                  className="mr-4"
                >
                  Freebies
                </NavLink>
                <NavLink
                  to="/timebank"
                  activeClassName="active"
                  className="mr-4"
                >
                  Timebanks
                </NavLink>
                <NavLink to="/about" activeClassName="active" className="mr-4">
                  About
                </NavLink>
              </div>
              <NavLink to="/login" activeClassName="active" className="ml-auto">
                Login
              </NavLink>
            </nav>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
