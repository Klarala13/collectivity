import React from "react";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      input: {}
    };
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="app">
          <button className="btn mb-2 btn-primary">
            Login/Register
          </button>
          <p>OR</p>
          <button className="mb-3 btn btn-block btn-outline-primary">
            go to Freebiesss
          </button>
        </div>
      </div>
    );
  }
}

export default App;
