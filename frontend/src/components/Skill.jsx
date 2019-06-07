import React, { Component } from "react";
class Skill extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="row">
        <table className="w-100">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col"> Skill</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Location</th>
              {/* <th scope="col">Time Span</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.data_id}</td>
              <td>{data.skill}</td>
              <td>{data.description}</td>
              <td>{data.ref.category}</td>
              <td>{data.location}</td>
              {/* <td>{data.time_span}</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Skill;
