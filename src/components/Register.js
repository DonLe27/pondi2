import React, { Component } from "react";
import LoginButton from './LoginButton';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import '../styles/register.css'
import { connect } from "react-redux";
import { auth } from "../actions";

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
            error_message: "",
            avatar: "",
            color: ""
        };

        // Avatars:
        this.avatars = [
            "crab",
            "kangaroo",
            "shrimp",
            "turtle",
            "snake",
            "squirrel",
            "stingray",
            "hedgehog"
        ]

        this.avatarButtons = [];



        // Color pallette:



        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);


    }

    validateForm() {
        return this.state.firstName.length > 0 &&
            this.state.lastName.length > 0 &&
            this.state.username.length > 0 &&
            this.state.email.length > 0 &&
            this.state.password.length > 0;
        //&& this.state.repeated_password.length > 0;
    }

    setAvatar(item) {
      this.setState(
        {avatar: {item}}
        );
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


    componentDidMount() {
        document.body.style.backgroundColor = "#D6E4EE";
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = null;
    }

    render() {
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

        <hr />

        <p className="register-wide-label"> Choose your Spirit Animal </p>


       <Button className="avatar-button" onClick={() => (this.setState({avatar: "crab"}))}><img src={process.env.PUBLIC_URL + "crab.png"} /></Button>
       <Button className="avatar-button" onClick={() => (this.setState({avatar: "kangaroo"}))}><img src={process.env.PUBLIC_URL + "kangaroo.png"} /></Button>
       <Button className="avatar-button" onClick={() => (this.setState({avatar: "shrimp"}))}><img src={process.env.PUBLIC_URL + "shrimp.png"} /></Button>
       <Button className="avatar-button" onClick={() => (this.setState({avatar: "turtle"}))}><img src={process.env.PUBLIC_URL + "turtle.png"} /></Button>
       <Button className="avatar-button" onClick={() => (this.setState({avatar: "snake"}))}><img src={process.env.PUBLIC_URL + "snake.png"} /></Button>
       <Button className="avatar-button" onClick={() => (this.setState({avatar: "squirrel"}))}><img src={process.env.PUBLIC_URL + "squirrel.png"} /></Button>
       <Button className="avatar-button" onClick={() => (this.setState({avatar: "stingray"}))}><img src={process.env.PUBLIC_URL + "stingray.png"} /></Button>
       <Button className="avatar-button" onClick={() => (this.setState({avatar: "hedgehog"}))}><img src={process.env.PUBLIC_URL + "hedgehog.png"} /></Button>

  

       <p className="register-wide-label">{this.state.avatar}</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            


        <hr />

        <p className="register-wide-label"> Choose a Color </p>

       <Button className="color-button" style={{background: "#7F91A8"}} onClick={() => (this.setState({color: "#7F91A8"}))}></Button>
       <Button className="color-button" style={{background: "#BFD9A9"}} onClick={() => (this.setState({color: "#BFD9A9"}))}></Button>
       <Button className="color-button" style={{background: "#9895C1"}} onClick={() => (this.setState({color: "#9895C1"}))}></Button>
       <Button className="color-button" style={{background: "#A0A0A0"}} onClick={() => (this.setState({color: "#A0A0A0"}))}></Button>
       <Button className="color-button" style={{background: "#7AA1A4"}} onClick={() => (this.setState({color: "#7AA1A4"}))}></Button>
       <Button className="color-button" style={{background: "#EBD08C"}} onClick={() => (this.setState({color: "#EBD08C"}))}></Button>
       <Button className="color-button" style={{background: "#ECA586"}} onClick={() => (this.setState({color: "#ECA586"}))}></Button>
       <Button className="color-button" style={{background: "#DC8282"}} onClick={() => (this.setState({color: "#DC8282"}))}></Button>
       <p className="register-wide-label">{this.state.color}</p>


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
            return { field, message: state.auth.errors[field] };
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