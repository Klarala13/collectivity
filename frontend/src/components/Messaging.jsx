//ToDo put request for message
import React, { Component } from "react";

class Messaging extends Component {
  // constructor(props) {
  //   super(props);
  // }
  handleSubmit = e => {
    console.log(e.target["message"].value);
    e.preventDefault();
    const url = "http://0.0.0.0:4001/messages";
    fetch(url, {
      method: "POST",
      body: e.target["message"].value
    })
      .then(response => response.json())
      .then(data => {
        console.log("Oh shit, i've just sent a message!", JSON.stringify(data));
        this.props.togglePopup();
      })
      .catch(error =>
        console.error("Uuuu, fucked up! Gotta try again!", error)
      );
  };
  render() {
    console.log(this.props);
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
