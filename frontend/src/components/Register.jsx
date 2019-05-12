import React, { useState } from "react";
import Login from "./Login";
//ToDo : function for if password === repassword password confirm

function Register (props) {
  const [isRegister, setRegister] = useState(true);

  this.state = {
    user: {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      email: ""
    },
    submitted: false
    
  };
  // render(){

  // handleSubmit(event) {
  //   event.preventDefault();

  //   this.setState({ submitted: true });
  //   const { user } = this.state;
  //   const { dispatch } = this.props;
  //   // if (user.password === user.repassword) &&
  //   // if(user.firstName && user.lastName && user.username && user.password){
  //   //   dispatch(userActions.register(user));
  //   // }
  // }
  
  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);

  return (
    <div className="container">
      <div className="Register">
        <form
          onSubmit={event => props.onSubmit(event, isRegister)}
          className="form-register">
          <h2 className="mb-2">{isRegister ? "Register" : "Sign in"}</h2>
          <div className ="container">
          <label htmlFor="firstName" className="sr-only"> First Name </label>
          <input
            onChange={props.onChange}
            type="text"
            id="firstName"
            className="form-control"
            placeholder="First Name"
            value={user.firstName}
            required
            autoFocus             
          />
          <label htmlFor="lastName" className="sr-only">Last Name</label>
          <input
            onChange={props.onChange}
            type="text"
            id="lastName"
            className="form-control"
            placeholder="Last Name"
            value={user.lastName}
            required
            autoFocus
          />
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            onChange={props.onChange}
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your Email"
            value={user.email}
            required
            autoFocus
          />
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            onChange={props.onChange}
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            value={user.password}
            required
            autoFocus
          />
          <label htmlFor="password" className="sr-only">Re-Enter Password please</label>
          <input
            onChange={props.onChange}
            type="password"
            id="repassword"
            className="form-control"
            placeholder="Please re-enter your Password"
            value={user.confirmPassword}
            required
            autoFocus
            />
  
          
            <button
              disabled={props.loading}
              className={`${
                isRegister ? "btn-outline-primary" : "btn-secondary"
              } mb-3 btn btn-lg  btn-block`}
              label="Submit"
              primary={true}
              //onClick={event => props.onSubmit(event, isRegister)}
            >
              {!props.loading ? (isRegister ? "Register" : "Sign in") : "Loading"}
            </button>
            <span className="text-muted " onClick={() => setRegister(!isRegister)}>
              {!isRegister ? "Don't have an account? Register!" : < Login />}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
