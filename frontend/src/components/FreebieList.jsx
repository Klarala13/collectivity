import React, { Component } from "react";
import Item from "./FreebieItem";

class FreebieList extends Component {
  //Add validation, search (inputting)field, etc.

  filteredItems = () => {
    const filtered = [];

    for (const item_id in this.props.freebies) {
      const item = this.props.freebies[item_id];

      if (
        this.props.filter === "All" ||
        (this.props.filter === "House_Garden" &&
          item.category === "House_Garden") ||
        (this.props.filter === "Fashion" && item.category === "Fashion") ||
        (this.props.filter === "Motors" && item.category === "Motors") ||
        (this.props.filter === "Entertainment" &&
          item.category === "Entertainment") ||
        (this.props.filter === "Electronics" &&
          item.category === "Electronics") ||
        (this.props.filter === "Art_Collectibles" &&
          item.category === "Art_Collectibles") ||
        (this.props.filter === "Sports" && item.category === "Sports") ||
        (this.props.filter === "Toys" && item.category === "Toys") ||
        (this.props.filter === "Media" && item.category === "Media") ||
        (this.props.filter === "Others" && item.category === "Others") ||
        (this.props.filter === "Pets" && item.category === "Pets")
      ) {
        filtered.push(item);
      }
    }

    return filtered;
  };
  render() {
    return (
      <div>
        <div className="row">
          {this.filteredItems().map((item) => (
            <Item key={this.props.freebies.item_id} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default FreebieList;
