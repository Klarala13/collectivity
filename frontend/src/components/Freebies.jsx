import React from "react";
import FreebieList from "./FreebieList";
import FreebieFilter from "./FreebieFilter";
//Add search field for freebies

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
        <div className="row">
          <div className="col-6">
            <h1 className="mb-4">Freebies near you</h1>
          </div>
          <FreebieFilter
            activeFilter={this.state.filter}
            setFilter={this.setFilter}
          />
          <FreebieList freebies={this.state.freebies} filter={this.state.filter} />
        </div>
      </div>
    );
  }
}
export default Freebies;
