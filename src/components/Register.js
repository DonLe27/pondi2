import React, {Component} from "react";
import LoginButton from './LoginButton';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import '../styles/register.css'
import {connect} from "react-redux";
import {auth} from "../actions";

// const Register = () => (
//   <div>
//     <LoginButton />
//     <h1 className="Register-H1">Registration</h1>
//     <div className="Register" >
//         <RegisterForm className="RegisterForm" />
//     </div>
//   </div>
// )

// const LoginLink = () => (
//     <div>
//         <div>Already have an account?</div>
//         <Link to='/login'>Log in</Link>
//     </div>
// )

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      show_error: false,
      error_message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm() {
    return this.state.firstName.length > 0
    && this.state.lastName.length > 0  
    && this.state.username.length > 0
    && this.state.email.length > 0
    && this.state.password.length > 0;
    //&& this.state.repeated_password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
      // if (this.state.password !== this.state.repeated_password) {
      //     this.state.show_error = true;
      //     this.state.error_message = "Passwords do not match.";
      // }
      event.preventDefault();
      this.props.register(
        this.state.username, 
        this.state.password, 
        this.state.firstName,
        this.state.lastName,
        this.state.email,
      );
  }

  showAlert(event) {
      return (
          <Alert bsStyle="danger">
            <p>{this.props.error_message}</p>
          </Alert>
      );
  }

  render() {
    document.body.style = 'background: #D6E4EE;';
    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />
    }
  return (
    <div>
      <LoginButton />
      <h1 className="Register-H1">Registration</h1>
      <div className="Register" >    
        <form onSubmit={this.handleSubmit} className="RegisterForm">
          <FormGroup controlId="firstName" bsSize="large">
              <FormControl className="register-fname"
              autoFocus
              type="text"
              placeholder="first name"
              value={this.state.firstName}
              onChange={this.handleChange}
              />
          </FormGroup>
          <FormGroup controlId="lastName" bsSize="large">
              <FormControl className="register-lname"
              autoFocus
              type="text"
              placeholder="last name"
              value={this.state.lastName}
              onChange={this.handleChange}
              />
          </FormGroup>

          <FormGroup controlId="username" bsSize="large">
              <FormControl className="register-wide"
              autoFocus
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
              />
          </FormGroup>

          <FormGroup controlId="email" bsSize="large">
              <FormControl className="register-wide"
              placeholder="email"
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              />
          </FormGroup>

          <FormGroup controlId="password" bsSize="large">
              <FormControl className="register-wide"
              placeholder="password"
              autoFocus
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              />
          </FormGroup>

          <Button className="register-button"
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
          >next
          </Button>
      </form>
      </div>
    </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);