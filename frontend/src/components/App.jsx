import React from "react";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="container">
      <Header />
      <div className="app">
        <button className="mb-3 btn btn-block btn-outline-primary">
          Login/Register
        </button>
        <p>OR</p>
        <button className="mb-3 btn btn-block btn-outline-primary">
          go to Freebies
        </button>
      </div>
      </div>
    );
  }
}

export default App;
