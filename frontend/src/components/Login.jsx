import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Login(props) {
  const [isSignin, setSignin] = useState(true);
  const onSubmit = e => {
    e.preventDefault();
    props.history.push("/profile");
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
              onChange={props.onChange}
              type="text"
              id="name"
              className="form-control"
              placeholder="Name"
              autoFocus
            />
          </div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className=" mb-3">
            <input
              onChange={props.onChange}
              type="password"
              id="password"
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
