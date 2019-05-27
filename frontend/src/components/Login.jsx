import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Login(props) {
  const [isSignin, setSignin] = useState(true);
  const [user, setUser] = useState({});
  const onSubmit = e => {
    const url = "http://localhost:4001/users/signin";
    e.preventDefault();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(response => {
        console.log("Response from the signin method in the backend", response);
        props.history.push("/profile");
      })
      .catch(error => console.error("Error:", error));
  };

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="Login">
        <form onSubmit={e => onSubmit(e)} className="form-signin">
          <h2 className="mb-2">{isSignin ? "Sign in" : "Register"}</h2>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <div className="mb-3">
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
              autoFocus
            />
          </div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className=" mb-3">
            <input
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <button
              type="submit"
              disabled={props.loading}
              className={`${
                isSignin ? "btn-primary" : "btn-primary"
              } btn-lg  btn-block`}
            >
              Login
            </button>
          </div>
          <span className="text-muted " onClick={() => setSignin(!isSignin)}>
            {!isSignin ? (
              "Already account? Sign in"
            ) : (
              <NavLink
                to="/register"
                activeClassName="active"
                className="navbar-brand"
              >
                Register
              </NavLink>
            )}
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
