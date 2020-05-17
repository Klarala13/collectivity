import React, { Component } from "react";
import { Link } from "react-router-dom";
import FreebieItemPage from "./FreebieItemPage";

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
          <div className="row">
            <div className="col-6 d-flex justify-content-center">
              <Link
                to={`/freebie/${this.props.data.item_id}`}
                /* {{ pathname: "/freebie", search: `?id=${this.props.data.item_id}`}} */
              >
                <i
                  className="fas fa-info-circle text-primary fa-2x"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="More Info"
                />
              </Link>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <a href={"mailto:" + this.props.data.user} target="_blank">
                <i
                  className="far fa-envelope text-primary fa-2x"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Contact User"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
