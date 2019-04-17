import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";

class Freebies extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Header />
        <div className="row">
          <div className="col-6">
            <h1>Post Freebies</h1>
          </div>
          <div className="col-6" />
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Freebies;
