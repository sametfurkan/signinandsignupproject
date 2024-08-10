import "./signin.css";

import React from "react";

const Signin = () => {
  return (
    <div className="signin">
      <div className="container">
        <h1>Login</h1>
        <form>
          <input
            type="email"
            placeholder="litfen email girer misin yivrim!!"
            name="email"
          />
          <input
            type="password"
            placeholder="şifre girmen lazim yivrimm"
            name="password"
          />
          <button>Gir bari</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
