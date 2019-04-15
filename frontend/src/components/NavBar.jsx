import React from "react";
import Router from "./Router";
import Header from "./Header";
import TimeBank from "./TimeBank";

class NavBar extends React.Component {
  render() {
    console.log(window.location.pathname);
    return (
      <div>
        <nav className="navbar nav navbar-expand-lg navbar-light bg-light justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <nav className="nav">
              <a
                className={`nav-link ${
                  window.location.pathname === "/" ? "active" : ""
                }`}
                href="http://localhost:3000/"
              >
                <i className="fas fa-home" />
              </a>
              <a
                className={`nav-link ${
                  window.location.pathname === "/about" ? "active" : ""
                }`}
                href="http://localhost:3000/about"
              >
                About
              </a>
              <a
                className={`nav-link ${
                  window.location.pathname === "/timebank" ? "active" : ""
                }`}
                href="http://localhost:3000/timebank"
              >
                TimeBank
              </a>
              <a
                className={`nav-link ${
                  window.location.pathname === "/freebies" ? "active" : ""
                }`}
                href="http://localhost:3000/freebies"
              >
                Freebies
              </a>
              <a
                className={`nav-link ${
                  window.location.pathname === "/login" ? "active" : ""
                }`}
                href="http://localhost:3000/login"
              >
                Login
              </a>
            </nav>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
