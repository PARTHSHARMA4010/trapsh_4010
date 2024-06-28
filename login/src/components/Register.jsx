import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/register', {
        username,
        password,
        mobileNumber,
        otpVerified,
      });

      console.log('User registered:', response.data);
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="box-register">
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <div className="input-field">
            <input 
              type="text" 
              className="input-box" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field">
            <input 
              type="password" 
              className="input-box" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <input 
              type="text" 
              className="input-box" 
              value={mobileNumber} 
              onChange={(e) => setMobileNumber(e.target.value)} 
              required 
            />
            <label htmlFor="mobileNumber">Mobile Number</label>
          </div>
          <div className="input-field">
            <input 
              type="submit" 
              className="input-submit" 
              value="Register" 
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
