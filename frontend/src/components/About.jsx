import React from "react";

class About extends React.Component {
  componentDidMount() {
    document.title = "About Us";
  }

  render() {
    return (
      <div className="container">
        <div className="about card bg-light ">
          <h2 className="card-header">About It</h2>
          <p className="card-text m-5">
            Collectivity comes from Collective and Connecting. It is a platform
            for sharing skills/items to alienate us from capitalism and
            consumption. You can share/ask for items without an account in the
            Freebee section or you can create an account and also offer/ask for
            some type of activity, for example, if you are a plummer, you can
            offer your services for X hrs/week. It is not reciprocate. The idea
            is that COLLECTIVELY we are stronger. You don't have to give to
            take.{" "}
          </p>
          <div className="about card bg-light " />
          <h2 className="card-header">How It Works</h2>
          <p className="card-text m-5">
            There are two main sections: Freebees (sharing of items) and
            TimeBanks (sharing of skills). To participate in TimeBanks you must
            be registered. To be rated and boost the confidence other users have
            in you, you must be registered. To better distribute the goodies, we
            geo-locate our users to facilitate your access.{" "}
          </p>
          <div className="about card bg-light " />
          <h2 className="card-header">Donations</h2>
          <p className="card-text m-5">
            You can also collaborate in the project by making a small donation
            to our crowdfunding, so we can pay for libraries, servers and other
            technologies that allow our project to move forward!
          </p>
          <a
            href="https://www.gofundme.com/building-collectivity?teamInvite=1eVWURWMKKO7HEmkfCoH5z0AgambJoINkcxodQKFreD2CtdWhPcvjMYIHuvJMeVD"
            className="btn btn-outline-primary"
            alt="donate money"
            target="_blank"
          >
            Donate
          </a>
          <div className="mr-btm btn" />
          <div className="about card bg-light " />
          <h2 className="card-header">Rules</h2>
          <p className="card-text m-5">
            Once the transaction is done and the service was provided or item
            returned, please rate the user according to punctuality, state of
            the item returned, etc.
          </p>
          <div className="about card bg-light " />
          <h2 className="card-header">Safety</h2>
          <p className="card-text m-5">
            Please, keep in mind that we cannot control who you meet or where.
            If you are not sure about a user, try to meet in public places or
            ensure a safe situation. If you encounter any problems, contact our
            team and we will try to find a solution together.{" "}
          </p>
          <div className="about card bg-light " />
          <h2 className="card-header">Who made it</h2>
          <div className="about card bg-light " />
          <h3 className="card-header">Our awesome team</h3>
          <div className="team-link">
            <p className="card-text m-5">
              {" "}
              Elise Maschke (Front and Backend developer)
              <a
                className="btn btn-primary"
                href="https://elisemaschke.de/"
                alt="Portfolio"
                target="_blank"
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
              >
                Contact
              </a>
            </p>
          </div>
          <div>
            <p>
              {" "}
              Max
              <a />
            </p>
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
              >
                Contact
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
