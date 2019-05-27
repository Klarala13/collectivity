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

    for (const id in this.props.items) {
      const item = this.props.items[id];

      if (
        this.props.filter === "all" ||
        (this.props.filter === "Motors" && item.tags === "Motors") ||
        (this.props.filter === "Fashion" && item.tags === "Fashion")
      ) {
        filtered.push(item);
      }
    }

    return filtered;
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Header</th>
          </tr>
        </thead>
        <tbody>
          {this.filteredItems().map(item => (
            <Item key={this.props.items.id} data={item} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default FreebieList;
