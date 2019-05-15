import React from "react";

class Help extends React.Component {
  componentDidMount() {
    document.title = "Help | What to do?";
  }

  render() {
    return <div className="container">help</div>;
  }
}

export default Help;
