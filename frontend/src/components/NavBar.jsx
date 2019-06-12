import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import AuthService from "./AuthService";
const Auth = AuthService.getInstance();
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }
  navToList = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-lg sticky-top nav-main">
        <div className="container">
          <NavLink to="/" activeClassName="active" className="navbar-brand">
            <img className="logo2" src={logo} alt="logo" />
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
              <span className="cursor-pointer"
                    onClick={() => {
                    this.props.push("/profile")
                    window.location.reload();}}>
                Logged in as: &nbsp;
                {Auth.getProfile().first_name}&nbsp;
                {Auth.getProfile().last_name}
              </span>
              {!Auth.loggedIn() ? (
                <NavLink
                  to="/login"
                  activeClassName="active"
                  className="ml-md-auto "
                >
                  Login
                </NavLink>
              ) : (
                <a className="cursor-pointer"
                  onClick={() => {
                    Auth.logOut();
                    this.props.push("/")
                    window.location.reload();}}
                >
                  Logout
                </a>
              )}
            </nav>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
