import React, { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Register from "./Register";

function Login(props) {
  const [isSignin, setSignin] = useState(true);

  return (
    <div className="container">
      <div className="App">
        <form
          onSubmit={event => props.onSubmit(event, isSignin)}
          id="form-signin"
        >
          <h2 className=" my-5 ">{isSignin ? "Sign in" : "Register"}</h2>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            onChange={props.onChange}
            type="text"
            id="name"
            className="form-control"
            placeholder="User Name"
            required
            autoFocus
          />
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
              required
            />
          </div>
          <div className=" mb-3">
            <button
              disabled={props.loading}
              className={`${
                isSignin ? "btn-outline-primary" : "btn-primary"
              } mb-3 btn btn-lg  btn-block`}
            >
              {!props.loading ? (isSignin ? "Signin" : "Register") : "Loading"}
            </button>
          </div>
          <span className="text-muted" onClick={() => setSignin(!isSignin)}>
            {!isSignin ? "Already account? Sign in" : "Register"}
            {/* Gotta manage to make Register inside a span  */}
            <Register />
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
