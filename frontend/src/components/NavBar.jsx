import React from "react";
import Router from "./Router";
import Header from "./Header";
import TimeBank from "./TimeBank";

class NavBar extends React.Component {
  render() {
    console.log(this.props.navigation);
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <ul className="navbar-nav nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="http://localhost:3000/">
                  Hey!
                </a>
                {/* <a
                  className="active nav"
                  // className={true ? "active nav-link" : "nav-link"}
                  href="http://localhost:3000/"
                >
                  Hey!
                </a> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/timebank">
                  TimeBank
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/freebies">
                  Freebies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <Header /> */}
      </div>
    );
  }
}

export default NavBar;
