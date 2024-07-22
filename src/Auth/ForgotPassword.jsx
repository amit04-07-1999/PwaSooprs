import React from "react";
import Forgotimage from "../Components/Forgotimage";
import ForgotLoginLink from "../Components/ForgotLoginLink";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div
      style={{
        width: "346px",
        height: "650px",
        position: "absolute",
        top: "141px",
        left: "42px",
      }}
    >
      <Forgotimage
        forgotdes="Enter your registered email below to receive password reset
          instruction"
      />

      {/* //email form with send button */}
     <div className="mt-5 " style={{width:"344px",height:"154px", }} >
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          style={{height:"54px",border:"1px solid rgba(121, 121, 121, 1)"}}
        />
      </div>
      <Link to="/forgototp">
          <button style={{height:"54px", width:"100%" ,fontSize:"16px", fontWeight:"700"}} class="btn btn-primary" type="button">Send</button>
          </Link>
    </div>
    <ForgotLoginLink/>
    </div>
  );
};

export default ForgotPassword;
