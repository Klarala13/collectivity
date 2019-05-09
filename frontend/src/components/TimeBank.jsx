import React from "react";
// import TimeBankItem from "./TimeBankItem";

class TimeBank extends React.Component {
  render() {
    return (
      <div className="container timeBanks">
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
        </div>
        <div className="container skill-board">
          <div className="col-lg-4">
            {/* Half left of page */}
            <form>
              <div className="form-group">
                <h3>Insert your Skill here</h3>
                <p>Listing of Activities you Offer</p>
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
          </div>
          <section className="col-lg-1" />
          {/* Page divider (blank space) */}
          {/* Other half of page */}
          <section className="col-lg-4">
            <div>
              <table>
                <thead>
                  {/* ToDo link each user to it's offering so that when they click on the user, the messaging 
opens up directly and they can set up a meeting */}
                  <tr>
                    <th scope="col">User</th>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Time Offered</th>
                  </tr>
                </thead>
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
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default TimeBank;
