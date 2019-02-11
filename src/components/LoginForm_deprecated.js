import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, FormGroup, FormControl, Alert, ControlLabel } from "react-bootstrap";
import "../styles/login.css";
import validateInput from "../utils/login";
import { connect } from "react-redux";
import { login } from "../actions/login";
import PropTypes from "prop-types";

// const Login = () => (
// 	<div className="Login">
// 	<h1>Log in to Pondi</h1>
// 	<LoginForm/>
// 	<RegisterButton />
// 	</div>
// )

// const RegisterButton = () => (
//     <div>
//         <div>New to Pondi?</div>
//         <Link to='/register'>Sign up now!</Link>
//     </div>
// )


// const checkRender = (num) => {
// 	if(num < 7)
// 		return (
// 		<Alert variant='danger'>
//             Password must be at least 8 characters. ( {8 - num} characters remaining)
//         </Alert>    
// 	); 	
// }

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//toProfile: false,
			username: "",
			password: ""
		}
		this.handleChange = this.handleChange.bind(this);
      	this.handleSubmit = this.handleSubmit.bind(this);
      	//this.validateForm = this.validateForm.bind(this);
	}
	// nameHandler = () => {
	// 	// do something here
	// 	this.setState(() => ({
	// 		toProfile: true
	// 	}));
	// }
	// passHandler = (uPass) => {
	// 	// do something here
	// 		this.setState(() => ({
	// 		toProfile: true
	// 	}));	}
	// isValid() {
	// 	const {errors, isValid} = validateInput(this.state);
	// 	if (!isValid) {
	// 		this.setState({errors});
	// 	}
	// 	return isValid;
	// }
	handleChange(e) {
		this.setState({
			[e.target.id]: e.target.value
		});
	}
	handleSubmit(e) {
		encodeURIComponent.preventDefault();
		this.props.onSubmit(this.state.username, this.state.password)
		// if (this.isValid()) {
			// this.setState({errors: {}, isLoading:true})
			// this.props.login(this.state).then(
			// 	(res) => { return <Redirect to='/'/>; },
			// 	(err) => this.setState({errors: err.data.errors, isLoading:false})
			// )
		//}
	}
	validateForm() {
		return this.state.email.length > 0
		&& this.state.password.length > 7;
	}
	render() {
		const { errors, identifier, password, isLoading } = this.state;
		// if (this.state.toProfile === true) {}
		return (
			<form onSubmit={this.handleSubmit}>
				LOGIN
				{ errors.form && <div className="alert alert-danger">{errors.form}</div> }
				<FormGroup controlId="email" bsSize="large">
					<ControlLabel bsClass="LoginForm">Email</ControlLabel>
					<FormControl 
					autoFocus 
					type="email" 
					value={this.state.email} 
					onChange={this.handleChange} 
					/>
				</FormGroup>
				<FormGroup controlId="password" bsSize="large" >
            		<ControlLabel>Password</ControlLabel>
                	<FormControl
                	autoFocus
                	type="password"
                	value={this.state.password}
                	onChange={this.handleChange}
                	/>
            	</FormGroup>
            	{/* {checkRender(this.state.password.length)} */}
				<Button
					block
					bsSize="large"
					disabled={isLoading}
					type="submit"
				>
					Log In
				</Button>
			</form>
		);
	}
}

LoginForm.propTypes = {
	login: PropTypes.func.isRequired 
}

// LoginForm.contextTypes = {
// 	router: PropTypes.object.isRequired
// }

// export default Login;
export default connect(null, {login})(LoginForm);