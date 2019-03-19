import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

class Help extends React.Component {
  componentDidMount() {
    document.title = "Help | What to do?";
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

export default Help;