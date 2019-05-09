import React, { useState } from "react";
import Register from "./Register";

function Login(props) {
  const [isSignin, setSignin] = useState(true);

  function Register(props) {
    const [isRegister, setRegister] = useState(true);
  }
  return (
    <div className="container">
      <div className="App">
        <form
          onSubmit={event => props.onSubmit(event, isSignin)}
          className="form-signin"
        >
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
              required
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
              required
            />
          </div>
          <div className="mb-3">
            <button
              disabled={props.loading}
              className={`${
                isSignin ? "btn-outline-primary" : "btn-primary"
              } mb-3 btn btn-lg  btn-block`}
            >
              {!props.loading ? (isSignin ? "Signin" : "Register") : "Loading"}
            </button>
          </div>
          <span className="text-muted " onClick={() => setSignin(!isSignin)}>
            {!isSignin ? "Already account? Sign in" : < Register />}
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
