import React from "react";

class About extends React.Component {
  componentDidMount() {
    document.title = "About Us";
  }
  scrollToAnchor = e => {
    e.preventDefault();
    window.scroll({
      top:
        document.querySelector(e.target.attributes.href.value).offsetTop + 50,
      left: 0,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <div className="container">
        <div id="list-example" className="list-group bd-example">
          <div className="row">
            <div className="col-3 px-6">
              <div className="sticky-top top-100" id="list">
                <a
                  className="list-group-item list-group-item-action"
                  href="#about"
                  onClick={this.scrollToAnchor}
                >
                  About
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#how"
                  onClick={this.scrollToAnchor}
                >
                  How It Works
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#donation"
                  onClick={this.scrollToAnchor}
                >
                  Donations
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#rules"
                  onClick={this.scrollToAnchor}
                >
                  Rules
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#safety"
                  onClick={this.scrollToAnchor}
                >
                  Safety
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#whoMade"
                  onClick={this.scrollToAnchor}
                >
                  Who made it
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#ourTeam"
                  onClick={this.scrollToAnchor}
                >
                  Our awesome team
                </a>
              </div>
            </div>
            <div className="col-7">
              <div
                data-spy="scroll"
                data-target="#list"
                data-offset="50"
                className="scroll"
              >
                <h3 id="about">About</h3>
                <p> 
                  Collectivity comes from Collective and Connecting. 
                  It is a platform for sharing skills/items to alienate us from
                  capitalism and consumption. You can share/ask for items
                  without an account in the Freebee section or you can create an
                  account and also offer/ask for some type of activity, for
                  example, if you are a plummer, you can offer your services for
                  X hrs/week. It is not reciprocate. The idea is that
                  COLLECTIVELY we are stronger. You don't have to give to take.{" "}
                </p>
                <h3 id="how">How It Works</h3>
                <p>
                  There are two main sections: Freebees (sharing of items) and
                  TimeBanks (sharing of skills). To participate in TimeBanks you
                  must be registered. To be rated and boost the confidence other
                  users have in you, you must be registered. To better
                  distribute the goodies, we geo-locate our users to facilitate
                  your access.{" "}
                </p>
                <h3 id="donation">Donations</h3>
                <p>
                  You can also collaborate in the project by making a small
                  donation to our crowdfunding, so we can pay for libraries,
                  servers and other technologies that allow our project to move
                  forward!
                </p>
                <a
                  href="https://www.gofundme.com/building-collectivity?teamInvite=1eVWURWMKKO7HEmkfCoH5z0AgambJoINkcxodQKFreD2CtdWhPcvjMYIHuvJMeVD"
                  className="btn btn-outline-primary"
                  alt="donate money"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate
                </a>
                <h3 id="rules">Rules</h3>
                <p>
                  {" "}
                  Once the transaction is done and the service was provided or
                  item returned, please rate the user according to punctuality,
                  state of the item returned, etc.
                </p>
                <h3 id="safety">Safety</h3>
                <p>
                  {" "}
                  Please, keep in mind that we cannot control who you meet or
                  where. If you are not sure about a user, try to meet in public
                  places or ensure a safe situation. If you encounter any
                  problems, contact our team and we will try to find a solution
                  together.{" "}
                </p>
                <h3 id="whoMade">Who made it</h3>
                <p>...</p>
                <h3 id="ourTeam">Our awesome team</h3>
                <p>
                  {" "}
                  Elise Maschke (Front and Backend developer)
                  <a
                    className="btn btn-primary"
                    href="https://elisemaschke.de/"
                    alt="Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact
                  </a>
                </p>
              </div>
              <div className="team-link">
                <p className="card-text m-5">
                  {" "}
                  Leena (designer)
                  <a
                    className="btn btn-primary"
                    href=""
                    alt="Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact
                  </a>
                </p>
              </div>
              <div>
              </div>
              <div>
                <p className="card-text m-5">
                  {" "}
                  Clara Sanchez (Team leader, front and backend developer)
                  <a
                    className="btn btn-primary"
                    href="https://clarasanchez.de/"
                    alt="Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
