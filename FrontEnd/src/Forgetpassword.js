import React from 'react';
import './loginsignup.css';
function Forgetpassword(){
    return (
        <>
        <div className="container">
  <form action="http://127.0.0.1:3001/forgetpass" method="post">
    <h1 className="title">Forget Password</h1>
    <input
      className="email"
      name="emailid"
      type="email"
      placeholder="Enter Mail ID"
      required=""
    />
    <button type="submit">
      <b>Forget</b>
    </button>
  </form>
</div>

        </>
    )
}

export default Forgetpassword;