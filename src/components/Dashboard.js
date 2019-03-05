import React from 'react';
//import { Redirect } from 'react-router-dom';
import Logout from './Logout';
import {connect} from "react-redux";
//import {auth} from "../actions";

class Dashboard extends React.Component {
    constructor(props) {
      super(props);

      this.streamData = "";
      this.userData = "";
    }
    // componentDidMount() {
    //   this.props.loadUser();
    // }
    render() {
      return(
        <div>
          pondi
          < Logout />
        </div>
        
      )
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);