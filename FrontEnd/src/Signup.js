import React from 'react';
import './loginsignup.css';
function Login(){
    return (
        <>
        <div className="container">
  <form
    onsubmit="return passwordvalidate(this)"
    action="http://127.0.0.1:3001/register"
    method="post"
  >
    <h1 className="title">Signup</h1>
    <input
      className="name"
      name="name"
      type="text"
      placeholder="Enter Name"
      required
    />
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
      placeholder="Enter Password (8 Characters)"
      minLength={8}
      required
    />
    <input
      className="confirmpassword"
      name="confirmpassword"
      type="password"
      placeholder="Re-Enter Password"
      required
    />
    <button type="submit">
      <b>Sign up</b>
    </button>
  </form>
  <div>
    <p className="link">
      If already have account{" "}
      <a className="switch" href="login.html">
        {" "}
        Login
      </a>
    </p>
  </div>
</div>

        </>
    )
}

export default Login