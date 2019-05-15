import React, { Component } from "react";
import TimeBank from "./TimeBank";

class TimeBankItem extends Component {
  render() {
    const skills = [
      {
        name: "Funny Show",
        location: "your mom's fat ass",
        id: "12345",
        time: "12"
      },
      {
        name: "Funny Hat",
        location: "some beautiful place",
        id: "54321",
        time: "12"
      }
    ];
    return (
      <div>
        <tr>
          <th scope="row">{this.props.data.id}</th>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.time}</td>
        </tr>
        <TimeBank data={skills} />
      </div>
    );
  }
}

export default TimeBankItem;
