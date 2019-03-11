import React, {Component} from "react";
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {auth} from "../actions";
import {Link} from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap"
import "../styles/login.css";

const RegisterButton = () => (
    <div className="RegisterButton">
        <div>New to Pondi?</div>
        <Link to='/register' >Sign up now!</Link>
    </div>
)

class Login extends Component {
    state = {
        toProfile: false,
        username: "",
        password: "",
    }
    nameHandler = () => {
		this.setState(() => ({
			toProfile: true
		}));
	}
	passHandler = (uPass) => {
			this.setState(() => ({
			toProfile: true
        }));	
    }
	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}
	handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password);
	}

	 componentDidMount() {
        document.body.style.backgroundColor = "#D6E4EE";
        document.body.style.margin = "0";
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
            <h1 className="Login-H1">Login</h1>
            <div className="Login">
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="username" bsSize="large">
                	<FormControl className="login-wide"
					placeholder="username" 
					autoFocus 
					type="string" 
					value={this.state.email} 
					onChange={this.handleChange} 
					/>
				</FormGroup>
				<FormGroup controlId="password" bsSize="large" >
                	<FormControl className="login-wide"
                	placeholder="password"
                	autoFocus
                	type="password"
                	value={this.state.password}
                	onChange={this.handleChange}
                	/>
            	</FormGroup>
                            <RegisterButton/>

                <Button className="login-button"
                    block
                    bsSize="large"
                    // disabled={!this.validateForm()}
                    type="submit"
                >Log In
                </Button>
            </form>
            </div>
            </div>
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
        login: (username, password) => {
        return dispatch(auth.login(username, password));
        }
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);