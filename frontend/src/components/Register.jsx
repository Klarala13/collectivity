import Login from "./Login";
// import { connect } from 'react-redux';
//import { loginSignup } from "../actions/loginSignup";
import React, { Component } from "react";
//ToDo : function for if password === repassword password confirm

class Register extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: "",
    city: "",
    zip: "",
    agree: false,
    firstNameValidError: false,
    lastNameValidError: false,
    emailValidError: false,
    passwordValidError: false,
    confirmPasswordValidError: false,
    agreeValidError: false,
    errors: {}
  };

  
  submitRegister = event => {
    event.preventDefault();

    const { firstName, lastName, email, password, confirmPass, city, zip } = this.state;
    if (firstName === '') {
      this.setState({ firstNameValidError: true });
      return;
    } else {
      this.setState({ firstNameValidError: false });
    }

    if (lastName === '') {
      this.setState({ lastNameValidError: true });
      return;
    } else {
      this.setState({ lastNameValidError: false });
    }

    if (email === '') {
      this.setState({ emailValidError: true });
      return;
    } else {
      this.setState({ emailValidError: false });
    }

    if (password === '' || password.length < 8) {
      this.setState({ passwordValidError: true });
      return;
    } else {
      this.setState({ passwordValidError: false });
    }

    if (confirmPass === '' || confirmPass.length < 8) {
      this.setState({ confirmPasswordValidError: true });
      return;
    } else {
      this.setState({ confirmPasswordValidError: false });
    }

    if (city === "" || city.length < 3) {
      this.setState({ cityValidError: true});
      return;
    } else {
      this.setState({cityValidError: false});
    }

    if (zip === "" || zip.length < 5) {
      this.setState({ zipValidError: true});
      return;
    } else {
      this.setState({cityValidError: false});
    }

    if (this.state.agree === false) {
      this.setState({ agreeValidError: true });
      return;
    } 
    else {
      this.setState({ agreeValidError: false });
    }
    if (email === '' || password === '' || confirmPass === '') {
      return;
    } else {
      if (password === confirmPass) {
        let newUser = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          about: '',
          country: '',
          city: '',
          zip: '',
          phone: ''
        };
       this.props.register(newUser);
      } else {
        this.setState({
          errors: { confirmPass: 'Please make sure password and confirm password match' }
        });
      }
    }
  };
  
  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleAgreement = () => {
    this.setState({
      agree: !this.state.agree
    });
  };

  render() {
    const register = this.setState;
    return (
      <div className="container">
      <div className="Register">
        <form
          onSubmit={this.submitRegister}
          className="form-register">signUp
        {/* ToDo Add failed registration message  */}
          <h2 className="mb-2">{register ? "Register" : "Sign in"}</h2>
          <div className ="container">
          <label htmlFor="firstName" className="sr-only"> First Name </label>
          <input
            onChange={this.onChangeHandler}
            type="text"
            id="firstName"
            className="form-control"
            placeholder="First Name"
            invalid={this.state.firstNameValidError}
            required
            autoFocus
            autoComplete="true"             
          />
          <label htmlFor="lastName" className="sr-only">Last Name</label>
          <input
            onChange={this.onChangeHandler}
            type="text"
            id="lastName"
            className="form-control"
            placeholder="Last Name"
            invalid={this.state.firstNameValidError}
            required
            autoFocus
            autoComplete="true"  
          />
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            onChange={this.onChangeHandler}
            type="email"
            id="email"
            className="form-control"
            placeholder="example@example.com"
            invalid={this.emailValidError}
            required
            autoFocus
            autoComplete="true"
          />
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            onChange={this.onChangeHandler}
            type="password"
            id="password"
            className="form-control"
            placeholder="********"
            invalid={this.state.passwordValidError}
            required
            autoFocus
          />
          <label htmlFor="password" className="sr-only">Re-Enter Password please</label>
          <input
            onChange={this.onChangeHandler}
            type="password"
            id="confirmPass"
            className="form-control"
            placeholder="Confirm Password"
            invalid={this.state.confirmPasswordValidError}
            required
            autoFocus
          />
          {this.state.errors && (
            <div>
                {this.state.errors.confirmPass}
            </div>
          )}
          <label htmlFor="city" className="sr-only">City</label>
          <input
            onChange={this.onChangeHandler}
            type="city"
            id="city"
            className="form-control"
            placeholder="city"
            invalid={this.state.cityValidError}
            required
            autoFocus
            autoComplete="true"
          />
          <label htmlFor="city" className="sr-only">ZipCode</label>
          <input
            onChange={this.onChangeHandler}
            type="zipcode"
            id="zipcode"
            className="form-control"
            placeholder="zip code"
            invalid={this.state.zipValidError}
            required
            autoFocus
          />
          <div class="form-check">
            <h4>Agree to Terms and Conditions</h4>
            <input 
              type="checkbox" 
              class="form-check-input" 
              name="agree"
              id="agree-check-box"
              onClick={this.toggleAgreement}
              invalid={this.state.agreeValidError}
            />
            <label 
              class="form-check-label" 
              for="accept">Check to accept
            </label>
          </div>
          <button
            className="btn btn-danger"
            label="Submit"
            onClick={this.register}
          >
          Register
          </button>
          <span className="text-muted " onClick={() => register(!register)}>
            {!register ? "Don't have an account? Register!" : < Login />}
          </span>
          </div>
        </form>
      </div>
    </div>
  );
}
}
// const mapStateToProps = state => ({
//   // loggedIn: state.reducer1.loggedIn,
//   signUpFailedMessage: state.userReducer.signUpFailedMessage
// });

// export default connect(
//   mapStateToProps,
//   { register }
// )(Register);
export default Register;
  


