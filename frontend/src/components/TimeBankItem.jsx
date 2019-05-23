import React, { Component } from "react";
import TimeBank from "./TimeBank";

class TimeBankItem extends Component {
  render() {
  
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
