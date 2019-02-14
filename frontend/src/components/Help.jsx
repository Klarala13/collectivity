import React from "react";
import Header from "./Header";

class Help extends React.Component {
  componentDidMount() {
    document.title = "Help | What to do?";
  }

  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

export default Help;