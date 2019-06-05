import React, { Component } from "react";
import Item from "./FreebieItem";

class FreebieList extends Component {
  //ToDo: Add search field
  //ToDo: Get request
  //Create the form for posting the FREEBIES
  //Add validation, search f(inputting) ield, etc.

  // const url = "http://0.0.0.0:4001/items";
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => console.log("Yay!", JSON.stringify(response)))
  //     .catch(error =>
  //       console.error("Uuuu, u fucked up! try again buddy", error)
  //     );
  // };

  filteredItems = () => {
    const filtered = [];

    for (const itemId in this.props.freebies) {
      const item = this.props.freebies[itemId];

      if (
        this.props.filter === "All" ||
        (this.props.filter === "House&Garden" && item.category === "House&Garden") ||
        (this.props.filter === "Fashion" && item.category === "Fashion") ||
        (this.props.filter === "Motors" && item.category === "Motors") ||
        (this.props.filter === "Entertainment" && item.category === "Entertainment") ||
        (this.props.filter === "Electronics" && item.category === "Electronics") ||
        (this.props.filter === "Art/Collectibles" && item.category === "Art/Collectibles") ||
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
      <div className="row">
        {this.filteredItems().map(item => (
                  <Item key={this.props.freebies.itemId} data={item} />
                ))}
      </div>
    );
  }
}

export default FreebieList;
