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
        console.log(
          "Response from the profile method in the backend",
          response
        );
        this.setState({ skills: response });
        console.log("state", this.state);
      })
      .catch(error => {
        console.error("Error:", error);
        console.error("User not found. Please try again.");
      });
  }

  render() {
    // const { data } = this.props;
    return (
      <div className="container">
        <div className="row">
          <table className="w-100">
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
              {console.log("hello", this.state)}
              {this.state.skills.map(baby => {
                return (
                  <tr>
                    <td>The Admin</td>
                    <td>{baby.skill}</td>
                    <td>{baby.description}</td>
                    <td>{baby.category}</td>
                    <td>{baby.location}</td>
                    <td>{baby.time_span}</td>
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
