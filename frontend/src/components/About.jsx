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
        <h1>About It</h1>
          <p>Collectivity comes from Collective and Connecting. It is a platform for sharing skills/items to alienate us from capitalism and consumption. 
          You can share/ask for items without an account in the Freebee section or you can create an account and also offer/ask for some type of activity, 
          for example, if you are a plummer, you can offer your services for X hrs/week.
          It is not reciprocate. The idea is that COLLECTIVELY we are stronger. You don't have to give to take. </p>
        <h1>How It Works</h1>
          <p>There are two main sections: Freebees (sharing of items) and TimeBanks (sharing of skills). 
            To participate in TimeBanks you must be registered. 
            To be rated and boost the confidence other users have in you, you must be registered. 
            To better distribute the goodies, we geo-locate our users to facilitate your access. </p>
        <h1>Donations</h1>
          <p>You can also collaborate in the project by making a small donation to our crowdfunding, so we can 
            pay for libraries, servers and other technologies that allow our project to move forward!
          </p>
          <a 
            href="https://www.gofundme.com/building-collectivity?teamInvite=1eVWURWMKKO7HEmkfCoH5z0AgambJoINkcxodQKFreD2CtdWhPcvjMYIHuvJMeVD"
            alt="donate money"
            target="_blank">Donate</a>
             <div class="mr-btm"></div>   
        <h1>Rules</h1>
         <p>Once the transaction is done and the service was provided or item returned, please rate the user according to 
           punctuality, state of the item returned, etc. 
         </p>
      <h1>Safety</h1>
        <p>Please, keep in mind that we cannot control who you meet or where. If you are not sure about a user, try to meet in public places or ensure a safe situation. If you encounter any problems, contact our team and we will try to find a solution together. </p>
      <h1>Who made it</h1>
      <h2>Our awesome team</h2>
      Elise Maschke (Front and Backend developer)
      Leena (designer)
      Max
      Clara Sanchez (Team leader, front and backen developer)
      </div>
    );
  }
}

export default About;