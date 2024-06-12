import React from 'react';
import './loginsignup.css';
function Login(){
    return (
        <>
        <div className="container">
  <form
    onsubmit="return passwordvalidate(this)"
    action="http://127.0.0.1:3001/changepassword"
    method="post"
  >
    <h1 className="title">Change Password</h1>
    <input
      className="email"
      name="emailid"
      type="email"
      placeholder="Enter Mail ID"
      required=""
    />
    <input
      className="password"
      name="currentpassword"
      type="password"
      placeholder="Current Password"
      minLength={8}
      required=""
    />
    <input
      className="password"
      name="password"
      type="password"
      placeholder="Enter Password (8 Characters)"
      minLength={8}
      required=""
    />
    <input
      className="confirmpassword"
      name="confirmpassword"
      type="password"
      placeholder="Re-Enter Password"
      required=""
    />
    <button type="submit">
      <b>Change</b>
    </button>
  </form>
</div>


        </>
    )
}

export default Login;