import React from "react";
import Forgotimage from "../Components/Forgotimage";
import ForgotLoginLink from "../Components/ForgotLoginLink";
import { Link } from "react-router-dom";

const ForgotPaddwordOtp = () => {
  return (
    <div>
      <div
        style={{
          width: "346px",
          height: "650px",
          position: "absolute",
          top: "141px",
          left: "42px",
        }}
      >
        <Forgotimage forgotdes="Enter the OTP sent on your email" />

        {/* //OTP Verification with send button */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1 className="text-center mb-4">OTP Verification</h1>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  style={{
                    height: "54px",
                    border: "1px solid rgba(121, 121, 121, 1)",
                  }}
                />
              </div>
              <Link to="/newpassword">
              <button
                style={{
                  height: "54px",
                  width: "100%",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
                class="btn btn-primary"
                type="button"
              >
                {" "}
                Verify OTP
              </button>
              </Link>
            </div>
          </div>
        </div>
        <ForgotLoginLink />
      </div>
    </div>
  );
};

export default ForgotPaddwordOtp;
