import React from 'react'
import LoginButton from './LoginButton';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Register = () => (
  <div>
    <LoginButton />
    <h1>sign up for pondi</h1>
    <RegisterForm />
    <LoginLink />
  </div>
)

const LoginLink = () => (
    <div>
        <div>Already have an account?</div>
        <Link to='/login'>Log in</Link>
    </div>
)

class RegisterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
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
        return this.state.name.length > 0 
        && this.state.username.length > 0
        && this.state.email.length > 0
        && this.state.password.length > 0
        && this.state.repeated_password.length > 0;
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
    }

    showAlert(event) {
        return (
            <Alert bsStyle="danger">
              <p>{this.props.error_message}</p>
            </Alert>
        );
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
                <FormControl
                autoFocus
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                />
            </FormGroup>

            <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
                <FormControl
                autoFocus
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                />
            </FormGroup>

            <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
                <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                />
            </FormGroup>

            <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
                <FormControl
                autoFocus
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                />
            </FormGroup>

            <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
            >Sign Up
            </Button>
        </form>
      );
    }
}

export default Register