import React, { useState } from 'react';
import "../../css/Signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="body">
      <div className="center">
        <div className="text">
          {isLogin ? 'Login Form' : 'Signup Form'}
        </div>
        <form action="#">
          {isLogin ? (
            <>
              <div className="data">
                <label>Email or Phone</label>
                <input type="text" required />
              </div>
              <div className="data">
                <label>Password</label>
                <input type="password" required />
              </div>
              <div className="forgot-pass">
                <a href="#">Forgot Password?</a>
              </div>
              <div className="btn">
                  <div className="inner"></div>
                  <Link to="/home"><button className="log-but" type="submit">login</button></Link>
               </div>

            </>
          ) : (
            <>
              <div className="data">
                <label>First Name</label>
                <input type="text" required />
              </div>
              <div className="data">
                <label>Last Name</label>
                <input type="text" required />
              </div>
              <div className="data">
                  <label>Username</label>
                  <input type="text" required />
               </div>
              <div className="data">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="data">
                <label>Password</label>
                <input type="password" required />
              </div>
              <div className="btn">
                  <div className="inner"></div>
                  <Link to="/home"><button className="log-but" type="submit">login</button></Link>
               </div>
            </>
          )}
          <div className="signup-link">
            {isLogin ? (
              <>
                Not a member? <a href="#" onClick={toggleForm}>Signup now</a>
              </>
            ) : (
              <>
                Already a member? <a href="#" onClick={toggleForm}>Login now</a>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;