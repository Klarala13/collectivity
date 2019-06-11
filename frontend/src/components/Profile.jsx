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
          <img className="center pt-4" src={this.state.user.image} alt="Logo" />
          <div className="card-body m-4">
            <div className="d-flex m-4 text-center">
              <div className="rating">
                <input
                  id="rating-4"
                  type="radio"
                  name="rating"
                  value="4"
                  checked
                />
                <label for="rating-5">
                  <i className="fas fa-1x fa-star" />
                </label>
                <input
                  id="rating-4"
                  type="radio"
                  name="rating"
                  value="4"
                  checked
                />
                <label for="rating-4">
                  <i className="fas fa-1x fa-star" />
                </label>
                <input id="rating-3" type="radio" name="rating" value="3" />
                <label for="rating-3">
                  <i className="fas fa-1x fa-star" />
                </label>
                <input id="rating-2" type="radio" name="rating" value="2" />
                <label for="rating-2">
                  <i className="fas fa-1x fa-star" />
                </label>
                <input id="rating-1" type="radio" name="rating" value="1" />
                <label for="rating-1">
                  <i className="fas fa-1x fa-star" />
                </label>
              </div>
            </div>

            <div className="card-title m-4 text-center">
              <h4>
                {this.state.user.first_name}&nbsp;
                {this.state.user.last_name}
              </h4>
            </div>
            <div>
              <a
                href="mailto:someone@yoursite.com"
                className="btn btn-primary btn-block mb-2 mx-auto"
              >
                Send Email
              </a>
            </div>
            <div className="btn btn-primary mb-2 btn-block mx-auto address">
              <h5>
                <i className="fas fa-map-marker-alt" />Address:{" "}
                <a href="#">Italy</a>
              </h5>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">Last updat 30 min</small>
            </div>
          </div>
        </div>
        <div className="card" hidden>
          <ul>
            {this.state.ownFreebies &&
              this.state.ownFreebies.map(freeby => <li>{freeby.item}</li>)}
          </ul>
          <ul>
            {this.state.ownSkills &&
              this.state.ownSkills.map(skill => <li>{skill.skill}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}
export default Profile;
