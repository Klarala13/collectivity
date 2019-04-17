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
          {/* Half left of page */}
          <div className = "row">
          <section className="skill-post col-lg-5">
            <form>
              <div className="form-group">
                <h2>Insert your Skill here</h2>
                <p>What would you like to offer?</p>
                <input
                  type="text"
                  className="form-control"
                  id="skill"
                  placeholder="What can you do?"
                />
                <input
                  type="text"
                  className="form-control"
                  id="time-offered"
                  placeholder="Hrs per Week"
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
          </section>
        <section className="col-lg-2" />
        {/* Page divider (blank space) */}
        <section className="skill-board col-lg-5">
          <table>
            <thead>
              <h2>
                <tr>
                  <th>Listing of Skills Offered</th>
                </tr>
              </h2>
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
        </section>
        </div>
      </div>
    );
  }
}
export default TimeBank;
