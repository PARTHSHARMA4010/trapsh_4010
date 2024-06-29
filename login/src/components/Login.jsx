import React, { useState } from 'react';
import ForgotPassword from './ForgotPassword';
import axios from 'axios';

const Login = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      console.log(res.data); // Handle token storage or user redirection here
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="box-login">
      {showForgotPassword ? (
        <ForgotPassword />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="top-header">
            <h2 style={{ marginTop: '-20px' }}>
              <span style={{ color: 'brown' }}>R</span>oti-
              <span style={{ color: 'brown' }}>S</span>abji
            </h2>
            <br />
            <h3>Hello, Again!</h3>
            <small>We are happy to have you back.</small>
          </div>
          <div className="input-group">
            <div className="input-field">
              <input type="text" className="input-box" id="logEmail" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label htmlFor="logEmail">Username</label>
            </div>
            <div className="input-field">
              <input type="password" className="input-box" id="logPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label htmlFor="logPassword">Password</label>
            </div>
            <div className="remember">
              <input type="checkbox" id="formCheck" className="check" />
              <label htmlFor="formCheck">Remember Me</label>
            </div>
            <div className="input-field">
              <input type="submit" className="input-submit" id="two" value="Sign In" required />
            </div>
            {error && <div className="error">{error}</div>}
            <div className="forgot">
              <a href="#" onClick={handleForgotPasswordClick}>Forgot password?</a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
