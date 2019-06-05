import Leena from "../assets/Leena.jpg";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Profile extends Component {
  constructor(props) {
    super(props);

     this.state = { user: {}}

  }
  componentDidMount() {
    const url = "http://localhost:4001/users/profile";

    fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": `${localStorage.getItem("token")}`
        }
    })
      .then(response => response.json())
      .then(response => {
        console.log("Response from the profile method in the backend", response);
        if (response.status === 200) {
          // TODO set state with user info
        console.log(response.data.user)
        this.setState({user: response.data.user})
        } else {
          alert(response.message);
        }
      })
      .catch(error => {
        console.error("Error:", error);
        console.error("User not found. Please try again.");
      });
  }
  render() {
    return (
      <div className="card-deck">
        <div className="card">
          <img className="rounded-circle center pt-4" src={Leena} alt="Logo" />
          <div className="card-body text-center">
            <div className="d-flex flex-row flex-container-2">
              <div className="profile-messages m-2 flex-item">
                <a className="contact" href="#">
                  <span className="check">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-primary"
                      size="2x"
                    />
                  </span>
                </a>
              </div>
              <div className="profile-follow m-2 flex-item">
                <a className="contact" href="#">
                  <span className="check">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-primary"
                      size="2x"
                    />
                  </span>
                </a>
              </div>
            </div>

            <div className="card-title m-4">
              <h4>{this.state.user.firstName}{this.state.user.lastName}</h4>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block mb-2 mx-auto"
            >
              Posts
            </button>
            <button type="button" className="btn btn-primary btn-block mx-auto">
              Orders
            </button>
            <div className="card-footer">
              <small className="text-muted">Last updat 30 min</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
