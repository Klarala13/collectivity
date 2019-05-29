//import React from "react";
import React, { useState } from "react";

//ToDo: Post request(on it)
//Disable button
//Make sure inputed skill shows in outputed table

export default props => {
  const [skill, setSkill] = useState(false);
  const [valid, setValid] = useState({
    skill: false,
    description: false,
    location: false,
    timeSpan: false
  });

  const handleSubmit = e => {
    e.preventDefault();
    const url = "http://0.0.0.0:4001/timebanks";
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
  const handleValid = (e, condition) => {
    setSkill({ ...skill, [e.target.name]: e.target.value });
    if (condition) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };

  const handleCheckbox = e => {
    if (e.target.checked) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const handleDisable = e => {
    if (Object.values(valid).filter(v => !v).length !== 0) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  console.log("isValid?", valid["skill"]);

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
                <label>Skill</label>
                <input
                  onChange={e =>
                    handleValid(
                      e,
                      e.target.value.length >= 3 && e.target.value.length <= 50
                    )
                  }
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
                  onChange={e =>
                    handleValid(
                      e,
                      e.target.value.length >= 3 && e.target.value.length <= 300
                    )
                  }
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
                  onChange={e => handleValid(e, e.target.value.length >= 3)}
                  type="text"
                  name="location"
                  value={skill.location}
                  className="form-control mb-2"
                  id="location"
                  placeholder="Where can u perform"
                  required
                />
                <div className="form-group category">
                  <label htmlFor="select">Category</label>
                  <select
                    className="mdb-select md-form form-control"
                    name="select"
                    id="category"
                    required
                  >
                    <option value="">Make a selection</option>
                    <option value="House+Garden">House+Garden</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Motors">Motors</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Art/Collectibles">Art/Collectibles</option>
                    <option value="Sports">Sports</option>
                    <option value="Toys">Toys</option>
                    <option value="Media">Media</option>
                    <option value="Others">Others</option>
                    <option value="Pets">Pets</option>
                  </select>
                </div>
                <div>
                  <label>Time Span</label>
                  <input
                    onChange={e => handleValid(e, e.target.value.length >= 1)}
                    type="number"
                    className="form-control mb-2"
                    id="time-offered"
                    placeholder="Hrs/Week"
                    required
                  />
                </div>

                <label className="form-check-label" htmlFor="accept">
                  Activate
                </label>
                <input
                  onChange={handleCheckbox}
                  type="checkbox"
                  className="checkbox form-check-input"
                  id="check"
                  required
                  name="check"
                />
                <div className="mb-3">
                  <button
                    className="btn btn-danger"
                    onClick={handleDisable}
                    id="submit"
                    type="submit"
                  >
                    Post Skill
                  </button>
                </div>
              </div>
            </form>
            {/* <table>
              <thead>
                {/* //When submited, send the info to the table below */}
            {/* <tr>
                  <th scope="col">User</th>
                  <th scope="col">Skill</th>
                  <th scope="col">Time Offered</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ashley</td>
                  {e.target.value.skill.description}
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
            </table> */}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
