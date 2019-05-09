import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import TimeBankItem from "./TimeBankItem";

class TimeBank extends React.Component {
  render() {

    return (
      <div className="container">
        <NavBar />
        <Header />
        <h1>TimeBank</h1>
        <h2>This is a place where you can offer your skills/know-how/time.</h2>
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
        <div className="row">
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
          <h1>Get help!</h1>
          <table>
          <div className="row">
              <thead>
                <tr>
                  <th scope="col">User</th>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Time Offered</th>
                </tr>
              </thead>
          </div>
{/* ToDo link each user to it's offering so that when they click on the user, the messaging 
opens up directly and they can set up a meeting */}
              <tbody>
{/* complains that Object is undefined... but we should get the data from TimeBankItem...no? */}
              {/* {Object.keys(this.props.items).map(id => (
                <TimeBankItem key={this.props.items.id} data={this.props.items[id]}/>
                ))} */}
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
          </section>
        </div>
      </div>
    );
  }
}
export default TimeBank;
