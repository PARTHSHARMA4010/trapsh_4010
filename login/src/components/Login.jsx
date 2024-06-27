import React from 'react';

function myLogPassword() {
  const passwordField = document.getElementById("logPassword");
  const eye = document.getElementById("eye");
  const eyeSlash = document.getElementById("eye-slash");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    eye.style.opacity = "0";
    eyeSlash.style.opacity = "1";
  } else {
    passwordField.type = "password";
    eye.style.opacity = "1";
    eyeSlash.style.opacity = "0";
  }
}


const Login = () => {
  return (
    <div className="box-login">
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
          <input type="text" className="input-box" id="logEmail" required />
          <label htmlFor="logEmail">Email address</label>
        </div>
        <div className="input-field">
          <input type="password" className="input-box" id="logPassword" required />
          <label htmlFor="logPassword">Password</label>
          <div className="eye-area">
            <div className="eye-box" onClick={() => myLogPassword()}>
              <i className="fa-regular fa-eye" id="eye"></i>
              <i className="fa-regular fa-eye-slash" id="eye-slash"></i>
            </div>
          </div>
        </div>
        <div className="remember">
          <input type="checkbox" id="formCheck" className="check" />
          <label htmlFor="formCheck">Remember Me</label>
        </div>
        <div className="input-field">
          <input type="submit" className="input-submit" id="two" value="Sign In" required />
        </div>
        <div className="forgot">
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
