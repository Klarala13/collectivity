import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default props => {
  const handleSubmit = e => {
    e.preventDefault();

    const user = props.input.user;
    const input = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      confirmPass: user.confirmPass,
      city: user.city,
      zip: user.zip,
      check: check.current.value
    };
    console.log(input);
  };
  //ToDo: add agreement for security
  const disableSubmit = e => {
    document.getElementById("check").disabled = true;
    console.log(e);
  };
  const activateButton = element => {
    if (element.checked) {
      document.getElementById("check").disabled = false;
    } else {
      document.getElementById("check").disabled = true;
    }
  };

  //ToDo Make post to DB
  //ToDo: add passport
  //ToDo: add local storage

  const handleFirstName = e => {
    setUser(e.target.value);
    if (e.target.value.length > 3) {
      return { firstName: true };
    } else {
      return { firstName: false };
    }
  };
  const handleLastName = e => {
    setUser(e.target.value);
    if (e.target.value.length > 3) {
      return { lastName: true };
    } else {
      return { lastName: false };
    }
  };
  const handleEmail = e => {
    setUser(e.target.value);
    if (e.target.value.length > 3) {
      return { email: true };
    } else {
      return { email: false };
    }
  };
  const handlePassword = e => {
    setUser(e.target.value);
    if (/^(?=.*\d).{4,8}$/.test(e.target.value.length > 7)) {
      return { password: true };
    } else {
      return { password: false };
    }
  };
  const handleConfirmPass = e => {
    setUser(e.target.value);
    if (user.password === user.confirmPass && e.target.value.length > 7) {
      return { confirmPass: true };
    } else {
      return { confirmPass: false };
    }
  };
  const handleCity = e => {
    setUser(e.target.value);
    if (e.target.value.length > 3) {
      return { city: true };
    } else {
      return { city: false };
    }
  };
  const handleZip = e => {
    setUser(e.target.value);
    if (/^\d+$/.test(e.target.value) > 4) {
      return { zip: true };
    } else {
      return { zip: false };
    }
  };

  const [isRegister, setRegister] = useState(true);
  const [user, setUser] = useState("");
  return (
    <div className="container">
      <div className="Register">
        <form
          onload={disableSubmit()}
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
              value={user}
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
              value={user}
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
              value={user}
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
              value={user.password}
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
              value={user.confirmPass}
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
              value={user.city}
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
              value={user.zip}
              className="form-control"
              placeholder="zip code"
              required
              autoFocus
            />
            <div className="form-check">
              <h4>Agree to Terms and Conditions</h4>
              <input
                type="checkbox"
                className="checkbox form-check-input"
                name="terms"
                id="check"
                onChange={activateButton(this)}
              />
              <label className="form-check-label" htmlFor="accept">
                Check to accept
              </label>
            </div>
            <button
              className="btn btn-danger"
              id="submit"
              label="Submit"
              onClick={setRegister}
            >
              Register
            </button>
            <span
              className="text-muted "
              onClick={() => setRegister(!isRegister)}
            >
              {" "}
              {!isRegister ? (
                "Don't have an account? Register!"
              ) : (
                <NavLink
                  to="/login"
                  activeClassName="active"
                  className="navbar-brand"
                >
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
