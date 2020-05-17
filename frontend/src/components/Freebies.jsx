import React, { useState, useEffect } from "react";
import FreebieList from "./FreebieList";
import FreebieFilter from "./FreebieFilter";

const Freebies = (props) => {
  useEffect(() => {
    fetch("http://localhost:4001/freebies", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(
          "Response from the freebie method in the backend",
          response
        );
        setFreebie(response);
        console.log("state", this.state);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  //TODO filter setFilter fro freebieFilter
  const [freebie, setFreebie] = useState(false);
  const [freebies, setFreebies] = useState([]);
  const [filter, setFilter] = useState([]);
  const [valid, setValid] = useState({
    freebie: false,
    description: false,
    category: true,
    location: false,
    time_span: true,
    token: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://0.0.0.0:4001/freebies";
    const formData = new FormData();
    formData.append("freebie", e.target.elements["freebie"].value);
    formData.append("description", e.target.elements["description"].value);
    formData.append("category", e.target.elements["category"].value);
    formData.append("location", e.target.elements["location"].value);
    formData.append("time_span", e.target.elements["time_span"].value);
    formData.append("token", localStorage.getItem("token"));
    const freebieObj = {};
    for (const [key, value] of formData.entries()) {
      freebieObj[key] = value;
    }
    console.log(freebieObj);

    fetch(url, {
      method: "POST",
      body: JSON.stringify(freebieObj),
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Good job! u posted ur freebie!", res);
        setFreebies(res);
      })
      .catch((error) =>
        console.error("Uuuu, u fucked up! try again buddy", error)
      );
  };
  const handleValid = (e, condition) => {
    setFreebie({ ...freebie, [e.target.name]: e.target.value });
    if (condition) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const isDisabled = Object.values(valid).filter((v) => !v).length !== 0;

  return (
    <div className="container freebies">
      <div className="row text-left">
        <h2>Freebies</h2>
        <div className="d-flex flex-row flex-container">
          <div className="p-2 bg-light flex-item">
            <h3 className="freebie text-left">
              <span>What is a Freebie?</span>{" "}
            </h3>
            <h2>It's an object you can get for free from another user</h2>
            <p className="text-left">
              This project aims to minimize our consumption, which is why we
              want to offer the possibility that you no longer have to acquire
              objects but you can just get them from someone else. Have fun, be
              respectful and responsible!
            </p>
          </div>
          <div className="p-2 bg-light flex-item ">
            <form
              onSubmit={handleSubmit}
              className="form-freebie"
              method="post"
            >
              <div className="form-group p-2">
                <h4 className="text-left">Insert your Freebie here</h4>
                <label>Freebie</label>
                <input
                  onChange={(e) =>
                    handleValid(
                      e,
                      e.target.value.length >= 3 && e.target.value.length <= 50
                    )
                  }
                  type="text"
                  name="skill"
                  value={freebie.name}
                  className="form-control mb-2"
                  id="skill"
                  placeholder="What can you give?"
                  required
                  autoFocus
                  autoComplete="true"
                />
                <label>Description</label>
                <input
                  onChange={(e) =>
                    handleValid(
                      e,
                      e.target.value.length >= 3 && e.target.value.length <= 300
                    )
                  }
                  type="text"
                  name="description"
                  value={freebie.description}
                  className="form-control mb-2"
                  id="description"
                  placeholder="What is it?"
                  autoFocus
                  autoComplete="true"
                />
                <label>Zip Code</label>
                <input
                  onChange={(e) => handleValid(e, e.target.value.length >= 3)}
                  type="number"
                  name="location"
                  value={freebie.location}
                  className="form-control mb-2"
                  id="location"
                  placeholder="12345"
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
                  value={freebie.time_span}
                  placeholder="Hrs/Week"
                  required
                />
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-dark"
                  id="submit"
                  type="submit"
                  disabled={isDisabled}
                  onChange={setFreebie}
                >
                  Post Freebie
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <h1 className="mb-4">Freebies near you</h1>
        </div>
        {/*     <FreebieFilter activeFilter={filter} setFilter={setFilter} /> */}
        <FreebieList freebies={freebies} filter={filter} />
      </div>
    </div>
  );
};

export default Freebies;
