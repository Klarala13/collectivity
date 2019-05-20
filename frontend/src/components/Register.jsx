import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import { Document } from "react-pdf";

export default props => {
  const [isRegister, setRegister] = useState(true);
  // const [document, setDownload] = useState({
  //   numPages: null,
  //   pageNumber: 1
  // });
  const [user, setUser] = useState({});
  const [valid, setValid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPass: false,
    city: false,
    zip: false,
    check: false
  });

  // console.log(user, valid);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(handleSubmit());
  };
  //ToDo: add agreement for security
  //ToDo Make post to DB
  //ToDo: add passport
  //ToDo: add local storage

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setDownload({ ...document, numPages });
  // };
  const handleFirstName = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.length > 3) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const handleLastName = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.length > 3) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const handleEmail = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.length > 8) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const handlePassword = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (/^(?=.*\d).{4,8}$/.test(e.target.value.length > 7)) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const handleConfirmPass = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (user.password === user.confirmPass && e.target.value.length > 7) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const handleCity = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.length > 3) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const handleZip = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (/^\d+$/.test(e.target.value) > 4) {
      return { zip: true };
    } else {
      return { zip: false };
    }
  };
  const handleChange = e => {};
  const handleCheckbox = e => {
    console.log(e.target.checked);
  };
  const isValid = Object.values(valid).filter(v => !v).length !== 0;
  // console.log(Object.values(valid).filter(v => !v));

  return (
    <div className="container">
      <div className="Register">
        <form
          onSubmit={event => handleChange(event, isRegister)}
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
              name="firstName"
              value={user.firstName}
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
              name="lastName"
              value={user.lastName}
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
              name="email"
              value={user.email}
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
              name="password"
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
              name="confirmPass"
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
              name="city"
              value={user.city}
              className="form-control"
              placeholder="city"
              required
              autoFocus
              autoComplete="true"
            />
            <label htmlFor="zip" className="sr-only">
              ZipCode
            </label>
            <input
              onChange={handleZip}
              type="zipcode"
              id="zipcode"
              name="zipcode"
              value={user.zip}
              className="form-control"
              placeholder="zip code"
              required
              autoFocus
            />
            <div className="form-check">
              <h4>Agree to Terms and Conditions</h4>{" "}
              <i className="fas fa-download" />
              {/* <span>
                <Document
                  file="Terms and Conditions.pdf"
                  onClick={onDocumentLoadSuccess}
                />
                <Page pageNumber={pageNumber} />
                <p>
                  Page {pageNumber} of {numPages}
                </p>
              </span> */}
              <input
                type="checkbox"
                className="checkbox form-check-input"
                id="check"
                name="check"
                onChange={handleCheckbox}
              />
              <label className="form-check-label" htmlFor="accept">
                Check to accept
              </label>
            </div>
            <button
              className="btn btn-danger"
              id="submit"
              label="Submit"
              disabled={isValid}
              onClick={setRegister}
            >
              Register
            </button>
            <NavLink
              to="/login"
              activeClassName="active"
              className="navbar-brand"
            >
              "Already got an account? Login"
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
