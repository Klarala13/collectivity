import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";

class TimeBank extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Header />
        <h1>Timebank</h1>
        <h2>
          What is a TimeBank? It is a place where you can offer your
          skills/knowhow/time.
        </h2>
        <p>
          We all have abilities, things we like to do, special skills... and you
          don't need to have material things to be able to share with people.
          Are you a plumber? Maybe you can offer to fix pipes 2hrs/week. You
          know languages? Maybe you can offer your translating skills... This
          platform recognizes that we all have something to give. Something that
          makes us worth wile. We all have something to contribute in this world
          and can help each other out. We all count. We are all worth something,
          no matter what our CV and bank account says ;)
        </p>
        <div className="container-halfpages">
          {/* Half left of page */}
          <div className="skill-post col-lg-4">
            <form>
              <div className="form-group">
                <h3>Insert your Skill here</h3>
                <label>My know-how</label>
                <p>Listing of Activities you Offer</p>
                <input
                  type="text"
                  className="form-control"
                  id="skill"
                  placeholder="What can you do?"
                />
                <label>Availabilty</label>
                <input
                  type="text"
                  className="form-control"
                  id="time-offered"
                  placeholder="Hrs/Week"
                />
                <button
                  type="submit"
                  className="btn btn-outline-dark"
                  onSubmit={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-1" />
        {/* Page divider (blank space) */}
        <div className="skill-board col-lg-4">
          <table>
            <thead>
              <tr>
                <th>Listing of Skills Offered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Action</th>
                <th>Time offered</th>
              </tr>
              <tr>
                <td>Translation</td>
                <td>2Hrs/Week</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default TimeBank;
