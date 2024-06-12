import React from 'react';
// import './loginsignup.css';
function Login(){
    return (
        <>
        <div className="container">
  <form action="http://127.0.0.1:3001/login" method="post">
    <h1 className="title">Login</h1>
    <input
      className="email"
      name="emailid"
      type="email"
      placeholder="Enter Mail ID"
      required
    />
    <input
      className="password"
      name="password"
      type="password"
      placeholder="Enter Password"
      required
    />
    <button type="submit">
      <b>Login</b>
    </button>
    <div>
      <p className="link">
        If you don't have an account{" "}
        <a className="switch" href="signup">
        Sign Up
        </a>
      </p>
      <a href="forgetpassword">Forget Password</a>
    </div>
  </form>
</div>
        </>
    )
}

export default Login;