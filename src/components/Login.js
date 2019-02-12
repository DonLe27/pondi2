import React, {Component} from "react";
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {auth} from "../actions";

import {Link} from "react-router-dom";

class Login extends Component {
    state = {
        username: "",
        password: "",
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/home" />
        }
        return (
        <form onSubmit={this.onSubmit}>
            <fieldset>
            <legend>Login</legend>
            <p>
                <label htmlFor="username">Username</label>
                <input
                type="text" id="username"
                onChange={e => this.setState({username: e.target.value})} />
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input
                type="password" id="password"
                onChange={e => this.setState({password: e.target.value})} />
            </p>
            <p>
                <button type="submit">Login</button>
            </p>

            <p>
                Don't have an account? <Link to="/register">Register</Link>
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
        login: (username, password) => {
        return dispatch(auth.login(username, password));
        }
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);