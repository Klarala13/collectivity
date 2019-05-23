import React from "react";

class NotFound extends React.Component {
  componentDidMount() {
    document.title = "Error 404 | Not Found";
  }

  render() {
    return (
      <div className="container">
        <h1>"404 -  Page not found!"</h1>
        <div className="alert alert-warning">
          <strong>
            Ooops .... sorry!<br />
          </strong>
          The requested page could not be found.
        </div>
      </div>
    );
  }
}

export default NotFound;