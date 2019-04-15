import React, { Component } from "react";
import Router from "./Router";
import Header from "./Header";
import TimeBank from "./TimeBank";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    console.log(window.location.pathname);
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <nav className="nav d-flex">
              <NavLink to="/" activeClassName="active" className="mr-3">
                <i className="fas fa-home" />
              </NavLink>
              <NavLink to="/freebies" activeClassName="active" className="mr-3">
                Freebies
              </NavLink>
              <NavLink to="/timebank" activeClassName="active" className="mr-3">
                Timebanks
              </NavLink>
              <NavLink to="/about" activeClassName="active" className="mr-3">
                About
              </NavLink>
              <NavLink to="/login" activeClassName="active" className="ml-auto">
                Login
              </NavLink>
            </nav>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
