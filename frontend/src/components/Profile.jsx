import Leena from "../assets/Leena.jpg";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { user: {}, popup: false };
  }
  togglePopup() {
    this.setState({ popup: !this.state.popup });
  }
  componentDidMount() {
    const url = "http://localhost:4001/users/";
    const userEndpoint = "profile";
    const freebiesEndpoint = "own_freebies";
    const skillsEndpoint = "own_skills";

    // fetch user

    fetch(url + userEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(
          "Response from the profile method in the backend",
          response
        );
        if (response.status === 200) {
          console.log(response.data.user);
          this.setState({ user: response.data.user });
        } else {
          alert(response.message);
        }
      })
      .catch(error => {
        console.error("Error:", error);
        console.error("User not found. Please try again.");
      });

    // fetch own freebies

    fetch(url + freebiesEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(
          "Response from the profile freebies method in the backend",
          response
        );
        if (response.status === 200) {
          console.log(response.data.freebies);
          this.setState({ ownFreebies: response.data.freebies });
        } else {
          alert(response.message);
        }
      })
      .catch(error => {
        console.error("Error:", error);
        console.error("Freebies not found. Please try again.");
      });

    // fetch own skills

    fetch(url + skillsEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(
          "Response from the profile skills method in the backend",
          response
        );
        if (response.status === 200) {
          console.log(response.data.skills);
          this.setState({ ownSkills: response.data.skills });
        } else {
          alert(response.message);
        }
      })
      .catch(error => {
        console.error("Error:", error);
        console.error("Skills not found. Please try again.");
      });
  }
  render() {
    console.log(this.props);
    const freebies = this.state.ownFreebies;
    console.log("Freebies", freebies);
    const skills = this.state.ownSkills;
    console.log("Skills", skills);
    return (
      <div className="card-deck">
        <div className="card">
          <img className="rounded-circle center pt-4" src={Leena} alt="Logo" />
          <div className="card-body text-center">
            <div className="d-flex flex-row flex-container-2">
              <div className="profile-messages m-2 flex-item">
                <button
                  onClick={e => {
                    this.togglePopup(e);
                  }}
                  className="contact"
                >
                  <span className="check">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-primary"
                      size="2x"
                    />
                  </span>
                </button>
              </div>

              <div className="profile-follow m-2 flex-item">
                <button className="contact" href="#">
                  <span className="check">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-primary"
                      size="2x"
                    />
                  </span>
                </button>
              </div>
            </div>
            <div className="card-title m-4">
              <h4>
                {this.state.user.first_name}
                {this.state.user.last_name}
              </h4>
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
        <div className="card">
          <ul>
            {this.state.ownFreebies &&
              this.state.ownFreebies.map(freeby => <li>{freeby.item}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}
export default Profile;
