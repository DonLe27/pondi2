import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/login.css";

const LoginButton = () => (
  <div className="login-button">
    <Link to='/login' className="login-link">login</Link>
  </div>
)

export default LoginButton