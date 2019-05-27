import React, { Component } from "react";
import Leena from "../assets/Leena.jpg";

class Profile extends Component {

  render() {
    const freebiesOpen = true
    return (
      <div className="card-deck">
        <div className="card">
          <img className="rounded-circle center pt-4" src={Leena} alt="Logo" />
          <div className="card-body text-center">
            <div className="card-title h3">User Name</div>
            <p className="card-text">Founder, Example</p>
            <button type="button" className="btn btn-primary btn-block mb-2 mx-auto" >Posts</button>
            <button type="button" className="btn btn-primary btn-block mx-auto" >Orders</button>
            <div className="card-footer">
              <small className="text-muted">Last updat 30 min</small>
              {freebiesOpen && <p>Freebies</p>}
              {console.log(this.props)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
