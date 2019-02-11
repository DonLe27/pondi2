import React, {Component} from "react";
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {auth} from "../actions";
// import {Link} from "react-router-dom";

class Logout extends React.Component {
  render() {
    return (
      <div>
          <a onClick={this.props.logout}>logout</a>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.auth.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(auth.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);