import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import '../assets/login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleView = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="box-login" style={{ left: isLogin ? '27px' : '-350px' }}>
          <Login />
        </div>
        <div className="box-register" style={{ right: isLogin ? '-350px' : '25px' }}>
          <Register />
        </div>
        <div className="switch">
          <a href="#" className={`login ${isLogin ? 'active' : ''}`} onClick={toggleView}>Login</a>
          <a href="#" className={`register ${!isLogin ? 'active' : ''}`} onClick={toggleView}>Register</a>
          <div className="btn-active" id="btn" style={{ left: isLogin ? '0px' : '150px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default App;
