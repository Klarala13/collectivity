import React, { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Register from "./Register";

function Login(props) {
  const [isSignin, setSignin] = useState(true);

  return (
    <div className="h-100">
    < NavBar />
    < Header />
      <div className="App">
        <form onSubmit={(event) => props.onSubmit(event, isSignin)} className="form-signin">
          <h1 className="h3 my-5 font-weight-normal">
            {isSignin ? "Signin" : "Register"}
          </h1>
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
          <input
            onChange={props.onChange}
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            required
          />
          <button
            disabled={props.loading}
            className={`${
              isSignin ? "btn-outline-primary" : "btn-primary"
            } mb-3 btn btn-lg  btn-block`}
          >
            {!props.loading ? (isSignin ? "Signin" : "Register") : "Loading"}
          </button>

          <span className="text-muted" onClick={() => setSignin(!isSignin)}>
            {!isSignin ? "Already account? Sign in" : "Register"}
            < Register />
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;