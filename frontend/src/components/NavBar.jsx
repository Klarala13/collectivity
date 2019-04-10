import React from "react";
// import Header from "./Header"
// import TimeBank from "./TimeBank";

class NavBar extends React.Component {
  render() {
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
            <ul className="navbar-nav mr-auto nav mr-auto justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Hey!
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TimeBank
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Freebies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
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
