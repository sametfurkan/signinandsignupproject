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
          <label>
            <input
              type="checkbox"
              name="rememberme"
              placeholder="Remember me"
            />
            Remember me
          </label>
          <p>Forgot Password?</p>

          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
