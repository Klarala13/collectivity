import React, { useState, useEffect } from "react";
import SkillTable from "./SkillTable";

const TimeBank = props => {
  useEffect(() => {
    fetch("http://localhost:4001/skills", {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        console.log("Response from the skill method in the backend", response);
        setSkills(response);
        //console.log("state", this.state);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);
  const [skill, setSkill] = useState(false);
  const [skills, setSkills] = useState([]);
  const [valid, setValid] = useState({
    skill: false,
    description: false,
    category: true,
    location: false,
    time_span: true,
    token: true
  });
  //Need to turn res object INTO AN ARRAY BECAUSE PUSH IS AN ARRAY METHOD
  const handleSubmit = e => {
    e.preventDefault();
    const url = "http://0.0.0.0:4001/skills";
    const formData = new FormData();
    formData.append("skill", e.target.elements["skill"].value);
    formData.append("description", e.target.elements["description"].value);
    formData.append("category", e.target.elements["category"].value);
    formData.append("location", e.target.elements["location"].value);
    formData.append("time_span", e.target.elements["time_span"].value);
    formData.append("token", localStorage.getItem("token"));
    const skillObj = {};
    for (const [key, value] of formData.entries()) {
      skillObj[key] = value;
    }
    console.log(skillObj);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(skillObj),
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log("Good job! u posted ur skill!", res);
        setSkills(res);
      })
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
  const isDisabled = Object.values(valid).filter(v => !v).length !== 0;
  // console.log("disabled", isDisabled);
  // console.log("skill", skill);
  // console.log("isValid?", valid["skill"]);

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
            <form onSubmit={handleSubmit} className="form-skill" method="post">
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
                <label>Zip Code</label>
                <input
                  onChange={e => handleValid(e, e.target.value.length >= 3)}
                  type="number"
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
                    className="mdb-select md-form center form-control"
                    name="category"
                    id="category"
                    required
                  >
                    <option value="">Make a selection</option>
                    <option value="House_Garden">House_Garden</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Motors">Motors</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Art_Collectibles">Art_Collectibles</option>
                    <option value="Sports">Sports</option>
                    <option value="Toys">Toys</option>
                    <option value="Media">Media</option>
                    <option value="Others">Others</option>
                    <option value="Pets">Pets</option>
                  </select>
                </div>
                <label>Time Span</label>
                <input
                  type="number"
                  className="form-control mb-2"
                  id="time_span"
                  step=".01"
                  name="time_span"
                  value={skill.time_span}
                  placeholder="Hrs/Week"
                  required
                />
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-primary"
                  id="submit"
                  type="submit"
                  disabled={isDisabled}
                  onChange={setSkill}
                >
                  Post Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <SkillTable skills={skills} />
    </div>
  );
};
export default TimeBank;
