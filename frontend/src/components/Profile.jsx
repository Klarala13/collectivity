import React, { Component } from "react";
import Leena from "../assets/Leena.jpg";
class Profile extends Component {
  render() {
    return (
      <div className="card-deck">
        <div className="card">
          <img className="rounded-circle" src={Leena} alt="Logo" />
          <div className="card-body">
            <div className="card-title h3">card Title</div>
            <p className="card-text">ghhgjuiuiikijjh</p>
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
