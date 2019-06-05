//ToDo put request for message
import React, { Component } from "react";

class Messaging extends Component {
  handleSubmit = e => {
    console.log("Sjubmitttetd")
    e.preventDefault();
    const url = "http://0.0.0.0:4001/messages";
    fetch(url,{
      method: "POST",
      // body: body //TODO create a body object with {body}
    })
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
        <form onSubmit={this.handleSubmit} action="">
          <textarea
            id="message"
            className="form-control"
            placeholder="Your Message Here"
          />
          <button id="send" className="btn btn-danger">
            Send
          </button>
        </form>
      </div>
    );
  }
}
export default Messaging;
