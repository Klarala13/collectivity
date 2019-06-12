import React from "react";
import FreebieList from "./FreebieList";
import FreebieFilter from "./FreebieFilter";

class Freebies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "All",
      freebies: []
    };
  }

  componentWillMount = () => {
    fetch("http://localhost:4001/freebies")
      .then(res => res.json())
      .then(res => {
        this.setState({ freebies: res });
      });
  };

  setFilter = filter => {
    this.setState(state => {
      state.filter = filter;
      return state;
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <h2 className="timeBank text-left">
            <span>What is a Freebie?</span> <br />
            It's an object you can get for free from another user
          </h2>
          <p className="text-left">
            This project aims to minimize our consumption, which is why we want
            to offer the possibility that you no longer have to acquire objects
            but you can just get them from someone else. Have fun, be respectful
            and responsible!
          </p>
          <button className="btn-primary btn-lg mb-5">
            <i className="fas fa-plus text-light mr-2" />Add Freebie
          </button>
        </div>
        <div className="row">
          <div className="col-6">
            <h1 className="mb-4">Freebies near you</h1>
          </div>
          <FreebieFilter
            activeFilter={this.state.filter}
            setFilter={this.setFilter}
          />
          <FreebieList
            freebies={this.state.freebies}
            filter={this.state.filter}
          />
        </div>
      </div>
    );
  }
}
export default Freebies;
