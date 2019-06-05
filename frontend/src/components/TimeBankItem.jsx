import React, { Component } from "react";
import TimeBank from "./TimeBank";

class TimeBankItem extends Component {
  render() {
    return (
      <div>
        <tr>
          <th scope="row">{e.target.value.name}</th>
          <td>{e.target.value.skill.description}</td>
          <td>{e.target.value.skill.location}</td>
          <td>{e.target.value.skill.category}</td>
          <td>{e.target.value.skill.time_span}</td>
          <td>{e.target.value.skill.isActive}</td>
        </tr>
        <TimeBank />
      </div>
    );
  }
}

export default TimeBankItem;
