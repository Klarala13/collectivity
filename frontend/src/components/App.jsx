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
          <button className="btn btn-primary">
            Login/Register
          </button>
          <p>OR</p>
          <button className="btn btn-primary">
            go to Freebies
          </button>
        </div>
      </div>
    );
  }
}

export default App;
