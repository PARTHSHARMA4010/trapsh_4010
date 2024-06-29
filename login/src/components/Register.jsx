import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
      });
      console.log(res.data); // Handle token storage or user redirection here
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="box-register">
      <div className="top-header">
        <h2 style={{ marginTop: '-20px' }}>
          <span style={{ color: 'brown' }}>R</span>oti-
          <span style={{ color: 'brown' }}>S</span>abji
        </h2>
        <br />
        <h3>Sign Up, Now!</h3>
        <small>We are happy to have you with us.</small>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-field">
            <input type="text" className="input-box" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <label htmlFor="regUsername">Username</label>
          </div>
          <div className="input-field">
            <input type="text" className="input-box" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="regEmail">Mobile No.</label>
          </div>
          <div className="input-field">
            <input
              type={showPassword ? 'text' : 'password'}
              className="input-box"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="regPassword">Password</label>
            <div className="eye-area">
              <div className="eye-box" onClick={togglePasswordVisibility}>
                <i className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} id="eye-2"></i>
              </div>
            </div>
          </div>
          <div className="remember">
            <input type="checkbox" id="formCheck2" className="check" />
            <label htmlFor="formCheck2">Remember Me</label>
          </div>
          <div className="input-field">
            <input type="submit" className="input-submit" id="one" value="Sign Up" />
          </div>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default Register;
