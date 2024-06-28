import React, { useState, useRef } from 'react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      <form method="post" action="./process.php">
        <div className="input-group">
          <div className="input-field">
            <input type="text" className="input-box" name="regUsername" required />
            <label htmlFor="regUsername">Username</label>
          </div>
          <div className="input-field">
            <input type="text" className="input-box" name="regEmail" required />
            <label htmlFor="regEmail">Mobile No.</label>
          </div>
          <div className="input-field">
            <input
              type={showPassword ? 'text' : 'password'}
              className="input-box"
              name="regPassword"
              ref={passwordRef}
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
        </div>
      </form>
    </div>
  );
};

export default Register;