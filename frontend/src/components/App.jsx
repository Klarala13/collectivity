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
      </div>
    );
  }
}

export default App;