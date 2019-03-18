import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import './assets/css/fonts.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Header />
        <button className="btn btn-outline-dark">Share</button>
        <button className="btn btn-outline-dark">Find</button>
        <button className="btn btn-outline-dark">Login</button>
      </div>
    );
  }
}

export default App;