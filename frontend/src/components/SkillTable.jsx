import React, { Component } from "react";
class SkillTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:4001/skills", {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        console.log("Response from the skill method in the backend", response);
        this.setState({ skills: response });
        console.log("state", this.state);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <table className="w-100 table">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Skill</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Location</th>
                <th scope="col">Hours/Week</th>
              </tr>
            </thead>
            <tbody>
              {this.state.skills.map(baby => {
                return (
                  <tr>
                    <td>The Admin</td>
                    <td>{baby.skill}</td>
                    <td style={{ width: "300px" }}>{baby.description}</td>
                    <td>{baby.category}</td>
                    <td>{baby.location}</td>
                    <td className="text-center">{baby.time_span}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SkillTable;
