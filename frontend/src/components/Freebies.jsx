import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import FreebieList from "./FreebieList";
import FreebieFilter from "./FreebieFilter";

class Freebies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "All"
    };
  }
  setFilter = filter => {
    this.setState(state => {
      state.filter = filter;
      return state;
    });
  };

  render() {
  const items = [ 
      {
        name: "Funny Hat",
        header: "Really hilarious hat I found Craigslist lol",
        location: "your mom's fat ass",
        id: "12345",
        tags: "Fashion",
        imageUrl: "https://i.pinimg.com/236x/e8/66/76/e86676595ccc6a22a2542f28be08943b--cool-hats-crazy-hats.jpg"
      },
      {
        name: "Dumb looking car",
        header: "it's just a mess on 4 wheels",
        location: "your dumb face",
        id: "54321",
        tags: "Motors",
        imageUrl: "https://www.thewheelz.com/wp-content/uploads/2017/07/Fiat-Multipla-450x270.jpg"
      }
    ]

    return (
      <div className="container">
        <NavBar />
        <Header />
        <div className="row">
          <div className="col-6">
            <h1>Freebies near you</h1>
          </div>
          <FreebieFilter
            activeFilter={this.state.filter}
            setFilter={this.setFilter}/>
          <div className="col-6" />
          <FreebieList 
            items={items}
            filter={this.state.filter}/>
        </div>
      </div>
    );
  }
}
export default Freebies;
