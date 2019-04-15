import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

class About extends React.Component {
  componentDidMount() {
    document.title = "About Us";
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <Header />
        <h2>About It</h2>
          <p>Collectivity comes from Collective and Connecting. It is a platform for sharing skills/items to alienate us from capitalism and consumption. 
          You can share/ask for items without an account in the Freebee section or you can create an account and also offer/ask for some type of activity, 
          for example, if you are a plummer, you can offer your services for X hrs/week.
          It is not reciprocate. The idea is that COLLECTIVELY we are stronger. You don't have to give to take. </p>
        <h2>How It Works</h2>
          <p>There are two main sections: Freebees (sharing of items) and TimeBanks (sharing of skills). 
            To participate in TimeBanks you must be registered. 
            To be rated and boost the confidence other users have in you, you must be registered. 
            To better distribute the goodies, we geo-locate our users to facilitate your access. </p>
        <h2>Donations</h2>
          <p>You can also collaborate in the project by making a small donation to our crowdfunding, so we can 
            pay for libraries, servers and other technologies that allow our project to move forward!
          </p>
          <a 
            href="https://www.gofundme.com/building-collectivity?teamInvite=1eVWURWMKKO7HEmkfCoH5z0AgambJoINkcxodQKFreD2CtdWhPcvjMYIHuvJMeVD"
            className ="btn btn-outline-dark"
            alt="donate money"
            target="_blank">Donate</a>
             <div className="mr-btm btn"></div>   
        <h2>Rules</h2>
         <p>Once the transaction is done and the service was provided or item returned, please rate the user according to 
           punctuality, state of the item returned, etc. 
         </p>
      <h2>Safety</h2>
        <p>Please, keep in mind that we cannot control who you meet or where. If you are not sure about a user, try to meet in public places or ensure a safe situation. If you encounter any problems, contact our team and we will try to find a solution together. </p>
      <h2>Who made it</h2>
        <h3>Our awesome team</h3>
        <div className="team-link">
          <p> Elise Maschke (Front and Backend developer) 
            <a 
              className="btn btn-dark"
              href="https://elisemaschke.de/"
              alt="Portfolio"
              target="_blank">
              Contact
            </a>
          </p>
        </div>
        <div className="team-link">
          <p> Leena (designer)
            <a 
              className="btn btn-dark"
              href=""
              alt="Portfolio"
             target="_blank">
             Contact
            </a>
          </p>
        </div>
        <div>
          <p> Max
            <a>

            </a>
          </p>
        </div>
        <div>
          <p> Clara Sanchez (Team leader, front and backend developer)
            <a
            className="btn btn-dark"
            href="https://clarasanchez.de/"
            alt="Portfolio"
            target="_blank">
            Contact
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;