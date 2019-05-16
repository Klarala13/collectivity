import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default props => {
  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      firstName: props.firstName,
      lastName: props.lastName,
      email: this.email.current.value,
      password: this.password.current.value,
      confirmPass: this.confirmPass.current.value,
      city: this.city.current.value,
      zip: this.zip.current.value
      //agreement: this.checkboxes.current.value
    };

    const url = `http://localhost:3000/app`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };
  //   toggleAgreement = () => {
  //   this.setState({
  //     agree: !this.state.agree
  //   });
  // };
  const handleFirstName = e => {
    if (e.target.value.length > 3) {
      this.setState({ firstName: true });
    } else {
      this.setState({ firstName: false });
    }
  };
  const handleLastName = e => {
    if (e.target.value.length > 3) {
      this.setState({ lastName: true });
    } else {
      this.setState({ lastName: false });
    }
  };
  const handleEmail = e => {
    if (e.target.value.length > 3) {
      this.setState({ email: true });
    } else {
      this.setState({ email: false });
    }
  }
  const handlePassword = e => {
    if (/^(?=.*\d).{4,8}$/.test(e.target.value.length > 7)) {
      this.setState({ password: true });
    } else {
      this.setState({ password: false });
    }
  }
  const handleConfirmPass = e => {
    if (
      this.password === this.confirmPass &&
      e.target.value.length
    ) {
      this.setState({ confirmPass: true });
    } else {
      this.setState({ confirmPass: false });
    }
  }
  const handleCity = e => {
    if (e.target.value.length > 3) {
      this.setState({ city: true });
    } else {
      this.setState({ city: false });
    }
  }
  const handleZip = e => {
    if (/^\d+$/.test(e.target.value) > 4) {
      this.setState({ zip: true });
    } else {
      this.setState({ zip: false });
    }
  }

  const [isRegister, setRegister] = useState(true);
  return (
    <div className="container">
      <div className="Register">
        <form
          onSubmit={event => handleSubmit(event, isRegister)}
          className="form-register"
        >
          Register
          <h2 className="mb-2">{isRegister ? "Register" : "Sign in"}</h2>
          <div className="container">
            <label htmlFor="firstName" className="sr-only">
              {" "}
              First Name{" "}
            </label>
            <input
              onChange={handleFirstName}
              type="text"
              id="firstName"
              className="form-control"
              placeholder="First Name"
              required
              autoFocus
              autoComplete="true"
            />
            <label htmlFor="lastName" className="sr-only">
              Last Name
            </label>
            <input
              onChange={handleLastName}
              type="text"
              id="lastName"
              className="form-control"
              placeholder="Last Name"
              required
              autoFocus
              autoComplete="true"
            />
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              onChange={handleEmail}
              type="email"
              id="email"
              className="form-control"
              placeholder="example@example.com"
              required
              autoFocus
              autoComplete="true"
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              onChange={handlePassword}
              type="password"
              id="password"
              className="form-control"
              placeholder="********"
              required
              autoFocus
            />
            <label htmlFor="password" className="sr-only">
              Re-Enter Password please
            </label>
            <input
              onChange={handleConfirmPass}
              type="password"
              id="confirmPass"
              className="form-control"
              placeholder="Confirm Password"
              required
              autoFocus
            />
            <label htmlFor="city" className="sr-only">
              City
            </label>
            <input
              onChange={handleCity}
              type="city"
              id="city"
              className="form-control"
              placeholder="city"
              required
              autoFocus
              autoComplete="true"
            />
            <label htmlFor="city" className="sr-only">
              ZipCode
            </label>
            <input
              onChange={handleZip}
              type="zipcode"
              id="zipcode"
              className="form-control"
              placeholder="zip code"
              required
              autoFocus
            />
            <div className="form-check">
              <h4>Agree to Terms and Conditions</h4>
              <input
                type="checkbox"
                className="form-check-input"
                name="agree"
                id="agree-check-box"
                //  onClick={this.toggleAgreement}
              />
              <label className="form-check-label" htmlFor="accept">
                Check to accept
              </label>
            </div>
            <button
              className="btn btn-danger"
              label="Submit"
              onClick={this.register}
            >
              Register
            </button>
            <span
              className="text-muted "
              onClick={() => setRegister(!isRegister)}
            > {!isRegister ? "Don't have an account? Register!" : 
              (<NavLink to="/login"
              activeClassName="active"
              className="navbar-brand">
              Login
              </NavLink>
              )}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

