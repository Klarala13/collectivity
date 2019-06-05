import React from "react";
import clara from "../assets/clara.JPG";
import elise from "../assets/elise.jpg";
import Leena from "../assets/Leena.jpg";

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
            <div className="col-md-3 px-6">
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
              </div>
            </div>
            <div className="col-md-7">
              <div
                data-spy="scroll"
                data-target="#list"
                data-offset="50"
                className="scroll"
              >
                <div className="mb-5">
                <h3 id="about">About</h3>
                <p>
                  Collectivity comes from Collective and Connecting. It is a
                  platform for sharing skills/items to alienate us from
                  capitalism and consumption. You can share/ask for items
                  without an account in the Freebee section or you can create an
                  account and also offer/ask for some type of activity, for
                  example, if you are a plummer, you can offer your services for
                  X hrs/week. It is not reciprocate. The idea is that
                  COLLECTIVELY we are stronger. You don't have to give to take.{" "}
                </p>
                </div>
              
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
                  className="btn btn-primary mx-auto"
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
                <div className="row w-100">
                  <div className="card col-lg-6">
                    <img
                      className="card-img-top"
                      src={elise}
                      alt="profile pic"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Elise Maschke</h5>
                      <p className="card-text">Full Stack Developer</p>
                      <a
                        href="https://elisemaschke.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check out my portfolio!
                      </a>
                    </div>
                  </div>
                  <div className="card col-lg-6">
                    <img
                      className="card-img-top"
                      alt="Profile pic"
                      src={clara}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Clara Sanchez</h5>
                      <p className="card-text">Full Stack Developer</p>
                      <a
                        href="https://clarasanchez.de/"
                        alt="Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check out my portfolio!
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="card col-lg-6">
                    <img
                      className="card-img-top"
                      src={Leena}
                      alt="profile pic"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Max Meeks</h5>
                      <p className="card-text">Front End Developer</p>
                      <a
                        href="https://maximilianmeeks.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check out my portfolio!
                      </a>
                    </div>
                  </div>
                  <div className="card col-lg-6" style={{ padding: "1rem" }}>
                    <img className="card-img-top" alt="Profile pic" src={""} />
                    <div className="card-body">
                      <h5 className="card-title"> Leena MK </h5>
                      <p className="card-text">
                        Designer and Front End Developer
                      </p>
                      <a
                        href="https://leenamk.com/"
                        alt="Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check out my portfolio!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
