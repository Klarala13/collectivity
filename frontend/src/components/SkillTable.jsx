import React, { Component } from "react";
class SkillTable extends Component {
  constructor(props) {
    super(props);

    // filter: "All"
  }
  // filters = category;

  // filteredItems = () => {
  //   const filtered = [];

  //   for (const skill_id in this.props.skills) {
  //     const skill = this.props.skills[skill_id];

  //     if (
  //       this.props.filter === "All" ||
  //       (this.props.filter === "House&Garden" &&
  //         skill.category === "House&Garden") ||
  //       (this.props.filter === "Fashion" && skill.category === "Fashion") ||
  //       (this.props.filter === "Motors" && skill.category === "Motors") ||
  //       (this.props.filter === "Entertainment" &&
  //         skill.category === "Entertainment") ||
  //       (this.props.filter === "Electronics" &&
  //         skill.category === "Electronics") ||
  //       (this.props.filter === "Art/Collectibles" &&
  //         skill.category === "Art/Collectibles") ||
  //       (this.props.filter === "Sports" && skill.category === "Sports") ||
  //       (this.props.filter === "Toys" && skill.category === "Toys") ||
  //       (this.props.filter === "Media" && skill.category === "Media") ||
  //       (this.props.filter === "Others" && skill.category === "Others") ||
  //       (this.props.filter === "Pets" && skill.category === "Pets")
  //     ) {
  //       filtered.push(skill);
  //     }
  //   }

  //   return filtered;
  // };

  // setFilter = filter => {
  //   this.setState(state => {
  //     state.filter = filter;
  //     return state;
  //   });
  // };

  render() {
    console.log("skills", this.props.skills);

    return (
      <div className="container">
        <div className="row">
          <table className="w-100 table">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Skill</th>
                <th scope="col">Description </th>
                {/* {this.filters.map(filter => ( */}
                <th
                  scope="col"
                  // className={`btn btn-light m-1 ${
                  //   this.props.activeFilter === filter ? "active" : ""
                  // }`}
                  // activeFilter={this.state.filter}
                  // setFilter={this.setFilter}
                  // onClick={e => {
                  //   this.props.setFilter(filter);
                  // }}
                  // key={filter}
                >
                  {/* {filter} */}
                  Category
                </th>
                {/* ))} */}
                <th scope="col">Location</th>
                <th scope="col">Hours/Week</th>
              </tr>
            </thead>
            <tbody>
              {this.props.skills.map(baby => {
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
