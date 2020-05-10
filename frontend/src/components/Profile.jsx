import React, { Component } from "react";
import AuthService from "./AuthService";
import Rating from "./Rating";
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
    Auth.fetch(`/profile`).then((response) => {
      if (response.status === 200) {
        this.setState({ user: response.data.user });
      } else {
        alert(response.message);
      }
    });
    Auth.fetch(`/own_freebies`).then((response) => {
      if (response.status === 200) {
        this.setState({ ownFreebies: response.data.freebies });
      } else {
        alert(response.message);
      }
    });
    Auth.fetch(`/own_skills`).then((response) => {
      if (response.status === 200) {
        this.setState({ ownSkills: response.data.skills });
      } else {
        alert(response.message);
      }
    });
  }
  render() {
    //console.log(this.props);
    const freebies = this.state.ownFreebies;
    //  console.log("Freebies", freebies);
    const skills = this.state.ownSkills;
    //  console.log("Skills", skills);
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
              <Rating rating={this.state.user.rating} />
              <div className="card-title m-4 text-center">
                <h4>
                  {this.state.user.first_name}&nbsp;
                  {this.state.user.last_name}
                </h4>
              </div>
              <div>
                <a
                  href={"mailto:" + this.state.user.email}
                  target="_blank"
                  className="btn btn-outline-dark btn-block mb-2 mx-auto"
                >
                  Send Email
                </a>
              </div>
              <div className="">
                <h6>
                  <button className="btn btn-outline-dark mb-2 btn-block mx-auto address">
                    <i className="fas fa-map-marker-alt" />
                    Address: {this.state.user.city}
                  </button>
                </h6>
              </div>

              <div className="row m-4">
                <div className="col-6">
                  <h5>Your freebies:</h5>
                  <ul>
                    {this.state.ownFreebies &&
                      this.state.ownFreebies.map((freeby) => (
                        <li>{freeby.item}</li>
                      ))}
                  </ul>
                </div>
                <div className="col-6">
                  <h5>Your timebanks:</h5>
                  <ul>
                    {this.state.ownSkills &&
                      this.state.ownSkills.map((skill) => (
                        <li>{skill.skill}</li>
                      ))}
                  </ul>
                </div>
              </div>

              <div className="card-footer text-center">
                <small className="text-muted">Last updated 30 min ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
