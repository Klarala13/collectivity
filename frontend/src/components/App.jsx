import React from "react";
import Header from "./Header";
import Nav from "./Nav";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;