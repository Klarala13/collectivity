import React, { Component } from "react";
import UserCard from "./UserCard";

class FreebieItemPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      singleFreebie: {},
      singleUser: {}
    };
  }
  componentDidMount() {
    const pageURL = window.location.href;
    const freebieId = pageURL.substr(pageURL.lastIndexOf("/") + 1);

    const itemData = {
      item_id: freebieId
    };

    fetch("http://localhost:4001/freebies/one", {
      method: "POST",
      body: JSON.stringify(itemData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            singleFreebie: res[0]
          },
          () => {
            const userId = {
              user_id: this.state.singleFreebie.user_id
            };

            return fetch("http://localhost:4001/freebies/user", {
              method: "POST",
              body: JSON.stringify(userId),
              headers: {
                "Content-Type": "application/json"
              }
            })
              .then(res => res.json())
              .then(res => {
                this.setState({
                  singleUser: res
                });
              });
          }
        );
      });
  }

  render() {

    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={this.state.singleFreebie.image}
                    alt="First slide"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-4">
            <UserCard singleUser={this.state.singleUser} freebies={true}/>
          </div>
        </div>
        <div className="container">
          <h1>{this.state.singleFreebie.item}</h1>
          <p>{this.state.singleFreebie.description}</p>
          <div className="d-block d-lg-none mt-5">
            <UserCard singleUser={this.state.singleUser} freebies={true}/>
          </div>
        </div>
      </div>
    );
  }
}

export default FreebieItemPage;
