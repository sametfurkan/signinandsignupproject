import "./signin.css";

import React from "react";

const Signin = () => {
  return (
    <div className="signin">
      <div className="container">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <div class="form-options">
            <label>
              <input type="checkbox" name="rememberme" />
              <span>Remember me</span>
            </label>
            <a href="#" class="forgot-password">
              Forgot password?
            </a>
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
