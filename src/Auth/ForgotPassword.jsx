import React from "react";
import { Link } from "react-router-dom";
import ForgotLoginLink from "../components/ForgotLoginLink";
import Forgotimage from "../components/Forgotimage";


const ForgotPassword = () => {
  return (
    <div
    className="container"
      style={{
        width: "100%",
        marginTop:"40%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        
      }}
    >
      <Forgotimage
        forgotdes="Enter your registered email below to receive password reset
          instruction"
      />

      {/* //email form with send button */}
     <div className="mt-5 " style={{width:"100%"}}>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          placeholder="Enter Email Address"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          style={{height:"54px",border:"1px solid rgba(121, 121, 121, 1)"}}
        />
      </div>
<<<<<<< HEAD
      <Link to="/forgototp">
          <button style={{height:"54px", width:"100%" ,fontSize:"16px", fontWeight:"700",background:"rgba(0, 119, 255, 1)",color:"white"}} class="btn" type="button">Send</button>
=======
      <Link to="/forgotpasswordotp">
          <button style={{height:"54px", width:"100%" ,fontSize:"16px", fontWeight:"700"}} class="btn btn-primary" type="button">Send</button>
>>>>>>> 70e4574ee003988f0118c5db99363cc157e46874
          </Link>
    </div>
    <ForgotLoginLink/>
    </div>
  );
};

export default ForgotPassword;
