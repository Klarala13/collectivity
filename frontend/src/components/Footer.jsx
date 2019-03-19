import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

class Footer extends React.Component {
  componentDidMount() {
    document.title = "Footer";
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <Header />
      </div>
    );
  }
}

export default Footer;