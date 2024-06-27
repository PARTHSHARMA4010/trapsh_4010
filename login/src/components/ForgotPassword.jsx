import React, { useState } from 'react';

const ForgotPassword = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const sendOtp = () => {
    // Implement the logic to send OTP to the mobile number
    console.log(`Sending OTP to ${mobileNumber}`);
    setOtpSent(true);
  };

  const verifyOtp = () => {
    // Implement the logic to verify the OTP
    console.log(`Verifying OTP: ${otp}`);
    setOtpVerified(true);
  };

  return (
    <div className="box-forgot-password">
      <div className="input-group">
        <div className="input-field">
          <input 
            type="text" 
            className="input-box" 
            id="mobileNumber" 
            value={mobileNumber} 
            onChange={(e) => setMobileNumber(e.target.value)} 
            required 
            disabled={otpSent}
          />
          <label 
            htmlFor="mobileNumber" 
            className={otpSent ? 'placeholder-hidden' : ''}
          >
            Mobile Number
          </label>
        </div>
        {!otpSent && (
          <div className="input-field">
            <input 
              type="button" 
              className="input-submit" 
              value="Send OTP" 
              onClick={sendOtp} 
            />
          </div>
        )}
      </div>
      {otpSent && (
        <div className="input-group">
          <div className="input-field">
            <input 
              type="text" 
              className="input-box" 
              id="otp" 
              value={otp} 
              onChange={(e) => setOtp(e.target.value)} 
              required 
            />
            <label htmlFor="otp">OTP</label>
          </div>
          <div className="input-field">
            <input 
              type="button" 
              className="input-submit" 
              value="Verify OTP" 
              onClick={verifyOtp} 
            />
          </div>
        </div>
      )}
      {otpVerified && <div>OTP Verified! You can now reset your password.</div>}
    </div>
  );
};

export default ForgotPassword;
