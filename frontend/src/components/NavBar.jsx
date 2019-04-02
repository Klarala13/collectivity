import React from "react";
import Header from "./Header"
import Timebank from "./Timebank";

class NavBar extends React.Component {

  render() {
    return (
      <div className="container">
        <div 
          role="navigation" 
          className="col-lg-12 navbar-expand{-sm|-md|-lg|-xl}"
        >
            <a className="nav navbar-expand{-sm|-md|-lg|-xl}" >Hey!</a>
            <a className="nav navbar-expand{-sm|-md|-lg|-xl}" >Timebank </a>
            <Timebank />
            <a className="nav navbar-expand{-sm|-md|-lg|-xl}" >Freebies</a>
            <a className="nav navbar-expand{-sm|-md|-lg|-xl}" >Login</a>
            <a className="nav navbar-expand{-sm|-md|-lg|-xl}" >About</a>
        </div>
        <Header />
      </div>
    );
  }
}

export default NavBar;