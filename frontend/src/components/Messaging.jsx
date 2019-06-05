//ToDo put request for message
import React, { Component } from "react";

class Messaging extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const url = "http://0.0.0.0:4001/messages";
    fetch(url)
      .then(response => response.json())
      .then(data =>
        console.log("Oh shit, i've just sent a message!", JSON.stringify(data))
      )
      .catch(error =>
        console.error("Uuuu, fucked up! Gotta try again!", error)
      );
  };
  render() {
    return (
      <div className="container messages">
        <h3>Send Message</h3>
        <input id="name" className="form-control" placeholder="Name" />
        <textarea
          id="message"
          className="form-control"
          placeholder="Your Message Here"
        />
        <button id="send" className="btn btn-danger">
          Send
        </button>
      </div>
    );
  }
}
export default Messaging;
