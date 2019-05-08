import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import TimeBankItem from "./TimeBankItem";

class Skills extends React.Component {
  render() {
const skills = [ 
    {
      name: "Funny Show",
      location: "your mom's fat ass",
      id: "12345",
      time: "12", 
    },
    {
      name: "Funny Hat",
      location: "some beautiful place",
      id: "54321",
      time: "12", 
    }
  ]

    return (
      <div className="container">
        <NavBar />
        <Header />
        <div className="row">
          <div className="col-6">
            <h1>Get help!</h1>
          </div>
          <div className="col-6" />
          <TimeBankItem items={skills}/>
        </div>
      </div>
    );
  }
}
export default Skills