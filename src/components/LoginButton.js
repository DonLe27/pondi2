import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/login.css";
import "../styles/landing.css";

const LoginButton = () => (
  <div className=" login-landing">
    <Link to='/login' className="login-link">login</Link>
  </div>
)

export default LoginButton