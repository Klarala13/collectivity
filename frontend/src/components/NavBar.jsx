import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div className="container">
        <a>Home</a>
        <a>About</a>
        <a>Freebies</a>
        <a>Timebank</a>
        <a>Login</a>
      </div>
    );
  }
}

export default Nav;