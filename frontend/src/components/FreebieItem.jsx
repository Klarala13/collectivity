import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Item extends Component {
  render() {
    return (
      <div className="card mx-3" style={{ width: "15rem" }}>
        <img
          className="card-img-top"
          src={this.props.data.image}
          alt={this.props.data.item}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.data.item}</h5>
          <p className="card-text ellipsis">{this.props.data.description}</p>
          <NavLink
            to="/messaging"
            activeClassName="active"
            className="mr-4 btn btn-freebie"
          >
            Request Freebies
            <i className="mx-2 fas fa-angle-double-right icon-align-middle" />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Item;
