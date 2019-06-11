import React, { Component } from "react";

class FreebieFilter extends Component {
  filters = [
    "All",
    "House_Garden",
    "Fashion",
    "Motors",
    "Entertainment",
    "Electronics",
    "Art_Collectibles",
    "Sports",
    "Toys",
    "Media",
    "Others",
    "Pets"
  ];

  render() {
    return (
      <div className="freebie-filters mb-5">
        <div role="group" aria-label="Set a filter to show items">
          {this.filters.map(filter => (
            <button
              type="button"
              className={`btn btn-light m-1 ${
                this.props.activeFilter === filter ? "active" : ""
              }`}
              onClick={e => {
                this.props.setFilter(filter);
              }}
              key={filter}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default FreebieFilter;
