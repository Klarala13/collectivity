import React from "react";

class TimeBank extends React.Component {
  render() {
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
                We all have abilities, things we like to do, special skills...
                and you don't need to have material things to be able to share
                with people. Are you a plumber? Maybe you can offer to fix pipes
                2hrs/week. You know languages? Maybe you can offer your
                translating skills... This platform recognizes that we all have
                something to give. Something that makes us worth wile. We all
                have something to contribute in this world and can help each
                other out. We all count. We are all worth something, no matter
                what our CV and bank account says ;)
              </p>
            </div>

            <div className="p-2 bg-light flex-item ">
              <form>
                <div className="form-group p-2">
                  <h3 className="text-left">Insert your Skill here</h3>
                  <label>My know-how</label>
                  <p>Listing of Activities you Offer</p>
                  <input
                    type="text"
                    className="form-control mb-2"
                    id="skill"
                    placeholder="What can you do?"
                  />
                  <label>Availabilty</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    id="time-offered"
                    placeholder="Hrs/Week"
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-primary "
                    onSubmit={this.handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Listing of Skills Offered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Action</th>
                    <th scope="row">Time offered</th>
                  </tr>
                  <tr>
                    <td>Translation</td>
                    <td>2Hrs/Week</td>
                  </tr>
                </h2>
              </thead>
              <tbody>
                <tr>
                  <th>Action</th>
                  <th>Time offered</th>
                </tr>
              </h2>
              <p className='text-left'>
                We all have abilities, things we like to do, special skills...
                and you don't need to have material things to be able to share
                with people. Are you a plumber? Maybe you can offer to fix pipes
                2hrs/week. You know languages? Maybe you can offer your
                translating skills... This platform recognizes that we all have
                something to give. Something that makes us worth wile. We all
                have something to contribute in this world and can help each
                other out. We all count. We are all worth something, no matter
                what our CV and bank account says ;)
              </p>
            </div>

          <div className="p-2 bg-light flex-item ">
            {/* Half left of page */}
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
          <section className="col-lg-2" />
          {/* Page divider (blank space) */}
          <section className="skill-board col-lg-5">
            <table>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Time Offered</th>
                </tr>
              </thead>
              <tbody>
                {/* {Object.keys(this.props.skills).map(id => (
                <TimeSkills key={this.props.skills.id} data={this.props.skills[id]}/>
                ))} */}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    );
  }
}
export default TimeBank;
