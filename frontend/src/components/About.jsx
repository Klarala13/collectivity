import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

class About extends React.Component {
  componentDidMount() {
    document.title = "About Us";
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <Header />
        <h1>About Us</h1>
        <p>Collectivity is..... FUCKING AWESOME!!!! YUJUUU</p>
      </div>
    );
  }
}

export default About;