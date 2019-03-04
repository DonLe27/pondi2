import React, {Component} from 'react';
import LoginButton from './LoginButton';
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import "../styles/landing.css";

class Landing extends Component {
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />
    }
    return (
      <div className="Landing" >
      < LoginButton />
    
          <div className="PondiCircles one"></div>
          <div className="PondiCircles two" ></div>
          <div className="PondiCircles three" ></div>
          <div className="PondiCircles four" ></div>
          <h1 className="LandingTitle">pondi</h1>
          <Form className="LandingPrompt"/>
      </div>
    )
  }
}

class Form extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({value: event.target.value});
  }

  handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
  }
  
  render() {
      return (
          <div className="form-group LandingForm">
          <form onSubmit={this.handleSubmit}>
              <label>
                   Is water wet?
                   <textarea type="text" value={this.state.value} onChange={this.handleChange} placeholder="Respond Here..." />
              </label>
              <Link to='/register'>
                  <button className="btn btn-primary">Register</button>
              </Link>
          </form>
          </div>

         
      );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);