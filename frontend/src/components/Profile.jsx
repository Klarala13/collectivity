import React, { Component } from "react";
import AuthService from "./AuthService";
const Auth = AuthService.getInstance();

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { user: {}, popup: false };
  }
  togglePopup() {
    this.setState({ popup: !this.state.popup });
  }
  componentDidMount() {
    Auth.fetch(`/profile`).then(response => {
      if (response.status === 200) {
        this.setState({ user: response.data.user });
      } else {
        alert(response.message);
      }
    });
    Auth.fetch(`/own_freebies`).then(response => {
      if (response.status === 200) {
        this.setState({ ownFreebies: response.data.freebies });
      } else {
        alert(response.message);
      }
    });
    Auth.fetch(`/own_skills`).then(response => {
      if (response.status === 200) {
        this.setState({ ownSkills: response.data.skills });
      } else {
        alert(response.message);
      }
    });
  }
  render() {
    console.log(this.props);
    const freebies = this.state.ownFreebies;
    console.log("Freebies", freebies);
    const skills = this.state.ownSkills;
    console.log("Skills", skills);
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <img
              className="center pt-4"
              src={this.state.user.image}
              alt="Logo"
            />
            <div className="card-body m-4">
              <div className="d-flex justify-content-center text-center">
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
                  <i className="fas fa-map-marker-alt" />
                  Address: <a href="#">Italy</a>
                </h5>
              </div>
              <div className="card-footer text-center">
                <small className="text-muted">Last updat 30 min</small>
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
        </div>
      </div>
    );
  }
}
export default Profile;
