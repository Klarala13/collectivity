import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Login(props) {
  const [user, setUser] = useState({});
  const onSubmit = e => {
    const url = "http://localhost:4001/users/signin";
    e.preventDefault();

    fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log("Response from the signin method in the backend", response);
        if (response.status === 200) {
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            props.history.push("/profile");
            window.location.reload()
          }
        } else {
          alert(response.message);
        }
      })
      .catch(error => {
        console.error("Error:", error);
        console.error("User not found. Please try again.");
      });
  };

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="row Login">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={e => onSubmit(e)} className="form-signin">
            <h2 className="mb-2">Sign in</h2>
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
                className="btn-primary btn-lg btn-block"
              >
                Login
              </button>
            </div>
            <NavLink
              to="/register"
              activeClassName="active "
              className="navbar-brand"
            >
              New user? Then go to register.
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
