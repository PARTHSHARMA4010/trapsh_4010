import React from 'react';

  function myRegPassword() {
    const passwordField = document.getElementById("regPassword");
    const eye = document.getElementById("eye-2");
    const eyeSlash = document.getElementById("eye-slash-2");
  
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

const Register = () => {
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
            <label htmlFor="regEmail">Email address</label>
          </div>
          <div className="input-field">
            <input type="password" className="input-box" name="regPassword" required />
            <label htmlFor="regPassword">Password</label>
            <div className="eye-area">
              <div className="eye-box" onClick={() => myRegPassword()}>
                <i className="fa-regular fa-eye" id="eye-2"></i>
                <i className="fa-regular fa-eye-slash" id="eye-slash-2"></i>
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
