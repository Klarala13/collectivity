import React, { useState } from "react";
//ToDo : function for if password === repassword password confirm
//       implement the diff fields from User controller
class Register extends React.Component {
  constructor(props) {
    super(props);

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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    // if (user.password === user.repassword) &&
    // if(user.firstName && user.lastName && user.username && user.password){
    //   dispatch(userActions.register(user));
    // }
  }
  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className="container">
        <span className="text-muted">
          <form
            onSubmit={event => props.onSubmit(event, isRegister)}
            className="form-register"
            className="col-lg-10"
            name="form-group"
          >
            <h2>Register Here for a life full of Freestuff :) </h2>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Enter your First Name"
              value={user.firstName}
              onChange={this.handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              placeholder="Enter your Last Name"
              value={user.lastName}
              onChange={this.handleChange}
            />
            <label htmlFor="lastName">Email</label>
            <input
              placeholder="Enter your Email"
              type="email"
              value={user.email}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              value={user.password}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Re Enter Password please</label>
            <input
              type="password"
              placeholder="Please re-enter your Password"
              value={user.confirmPassword}
              onChange={this.handleChange}
            />
            <input
              className="btn btn-secondary"
              label="Submit"
              primary={true}
              onClick={event => props.onSubmit(event, isRegister)}
              className="form-register"
            />
          </form>
        </span>
      </div>
              );
            }
        }
        
//         function mapStateToProps(state) {
//             const { registering } = state.registration;
//             return {
//                 registering
//             };
//         }
// const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
  
export default Register;
// export { connectedRegisterPage as RegisterPage };