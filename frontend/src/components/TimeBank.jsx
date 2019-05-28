//import React from "react";
import React, { useState } from "react";

//ToDo: Post request(on it)
//Add validation, search field, etc.

export default props => {
  const [skill, setSkill] = useState(true);
  const [valid, setValid] = useState({
    name: false,
    description: false,
    location: false,
    category: false,
    timeSpan: false,
    isActive: false
  });

  const handleSubmit = e => {
    e.preventDefault();
    //Check if DB table is called skills or skill
    const url = "http://0.0.0.0:4001/skills";
    fetch(url)
      .then(response => response.json())
      .then(data =>
        console.log(
          "Yay! U submitted the shit out of the form!",
          JSON.stringify(data)
        )
      )
      .catch(error =>
        console.error("Uuuu, u fucked up! try again buddy", error)
      );
  };

  const handleName = e => {
    setSkill({ ...skill, [e.target.name]: e.target.value });
    if (e.target.value.length > 3 && e.target.value.length < 50) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const handleDescription = e => {
    setSkill({ ...skill, [e.target.name]: e.target.value });
    if (e.target.value.length > 3 && e.target.value.length < 300) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  //   handleLocation( ) {

  //   }
  //   handleActive() {

  //   }
  //   handleTime(){

  //   }

  return (
    <div className="container">
      <div className="timeBanks">
        <h3 className="text-left">Timebank</h3>
        <div className="d-flex flex-row flex-container">
          <div className="p-2 bg-light flex-item">
            <h2 className="timeBank text-left">
              <span>What is a TimeBank?</span> <br />
              It is a place where you can offer your skills, knowhow, time.
            </h2>
            <p className="text-left">
              We all have abilities, things we like to do, special skills... and
              you don't need to have material things to be able to share with
              people. Are you a plumber? Maybe you can offer to fix pipes
              2hrs/week. You know languages? Maybe you can offer your
              translating skills... This platform recognizes that we all have
              something to give. Something that makes us worth wile. We all have
              something to contribute in this world and can help each other out.
              We all count. We are all worth something, no matter what our CV
              and bank account says ;)
            </p>
          </div>

          <div className="p-2 bg-light flex-item ">
            <form
              onSubmit={handleSubmit}
              className="form-register"
              method="post"
            >
              <div className="form-group p-2">
                <h3 className="text-left">Insert your Skill here</h3>
                <p>Post what you offer!</p>
                <label>Skill</label>
                <input
                  onChage={handleName}
                  type="text"
                  name="skill"
                  value={skill.name}
                  className="form-control mb-2"
                  id="skill"
                  placeholder="What can you do?"
                  required
                  autoFocus
                  autoComplete="true"
                />
                <label>Description</label>
                <input
                  onChage={handleDescription}
                  type="text"
                  name="description"
                  value={skill.description}
                  className="form-control mb-2"
                  id="description"
                  placeholder="What is it?"
                  autoFocus
                  autoComplete="true"
                />
                <label>Location</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  className="form-control mb-2"
                  id="location"
                  placeholder="Where can u perform"
                  required
                />
                <label>Category</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  className="form-control mb-2"
                  id="category"
                  placeholder="tags"
                  required
                />
                <label>Time Span</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  className="form-control mb-2"
                  id="time-offered"
                  placeholder="Hrs/Week"
                />
                <label>Active</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  className="form-control mb-2"
                  id="active"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  id="submit"
                  label="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <table>
              <thead>
                {/* //When submited, send the info to the table below */}
                <tr>
                  <th scope="col">User</th>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Time Offered</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ashley</td>
                  <td>32</td>
                  <td>Pluming</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>3</td>
                  <td>Sewing</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Thomas</td>
                  <td>6</td>
                  <td>Cleaning</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
