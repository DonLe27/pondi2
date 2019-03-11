import React from "react";
import {connect} from "react-redux";
import {auth} from "../actions";
import '../styles/logout.css';

class Logout extends React.Component {
  render() {
    return (
      <div >
        <button onClick={this.props.logout} className="logout-button">logout</button>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(auth.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);