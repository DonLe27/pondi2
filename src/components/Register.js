import React, {Component} from "react";
import {connect} from "react-redux";

import {Link, Redirect} from "react-router-dom";

import {auth} from "../actions";

class Login extends Component {

  state = {
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    animal: "", 
    color: ""
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.register(this.state.username, this.state.password);
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />
    }
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Register</legend>
          {this.props.errors.length > 0 && (
            <ul>
              {this.props.errors.map(error => (
                <li key={error.field}>{error.message}</li>
              ))}
            </ul>
          )}
          <p>
            <label htmlFor="username">Username</label>
            <input
              type="text" id="username"
              onChange={e => this.setState({username: e.target.value})} />
          </p>
          <p>
            <label htmlFor="firstname">First name</label>
            <input
              type="text" id="firstname"
              onChange={e => this.setState({firstname: e.target.value})} />
          </p>
          <p>
            <label htmlFor="lastname">Last name</label>
            <input
              type="text" id="lastname"
              onChange={e => this.setState({lastname: e.target.value})} />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input
              type="text" id="password"
              onChange={e => this.setState({password: e.target.value})} />
          </p>
          <p>
            <label htmlFor="animal">Animal</label>
            <input
              type="text" id="animal"
              onChange={e => this.setState({animal: e.target.value})} />
          </p>
          <p>
            <label htmlFor="animal">Color</label>
            <input
              type="text" id="color"
              onChange={e => this.setState({color: e.target.value})} />
          </p>
          <p>
            <button type="submit">Register</button>
          </p>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </fieldset>
      </form>
    )
  }
}

const mapStateToProps = state => {
  let errors = [];
  if (state.auth.errors) {
    errors = Object.keys(state.auth.errors).map(field => {
      return {field, message: state.auth.errors[field]};
    });
  }
  return {
    errors,
    isAuthenticated: state.auth.isAuthenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    register: (username, password) => dispatch(auth.register(username, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);