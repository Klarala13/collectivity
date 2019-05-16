import React from "react";
import Header from "./Header";

class App extends React.Component {
  constructor(props){
    super(props)
  
  this.state = {
    users:[],
    input:{}
  }
};
componentWillMount = () => {
  //fetching fake data to try shit out
  fetch("./fakeData.json")
  .then(response => {
    this.setState({})
    console.log(response);
  })
  }

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
          go to Freebiesss
        </button>
      </div>
      </div>
    );
  }
}

export default App;
