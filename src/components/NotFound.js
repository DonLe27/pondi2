import React from 'react';
import { Link } from "react-router-dom";
import '../styles/notfound.css';
import wave from '../styles/vectors/notfound-wave.png';
import logo from '../styles/svg/logo.svg';

class NotFound extends React.Component {
    render() {
      return(
        <div className="page">
          <link href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet"></link>
          <img className="wave" src={wave} alt="wave" />
          <img className="logo" src={logo} alt="logo" />
          <div className="oops">Oops, the page you're looking for does not exist.</div>
          <div className="uncharted">These are uncharted waters.</div>
          <div className="return">
            Still lost? Return home <Link to='/' className="link">here!</Link>
          </div>
        </div>
      )
    }
}

export default NotFound;