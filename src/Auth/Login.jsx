import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../../public/Images/Img";


const Login = () => {
  return (
    <div>
      <img src={Img.Logo} alt="img" />
      <div
        className="d-flex  flex-column justify-content-center"
        style={{
          width: "344px",
          height: "362px",
          position: "absolute",
          top: "425px",
          left: "43px",
        }}
      >
        <h1
          className="text-primary  mb-4"
          style={{ fontSize: "32px", fontWeight: "500", lineHeight: "48px" }}
        >
          Login
        </h1>
        <form className="w-100" style={{ maxWidth: "400px" }}>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              style={{
                outline: "none",
                padding: "16px 12px 16px 12px",
                width: "100%",
                border: "1px solid rgba(121, 121, 121, 1)",
                borderRadius: "8px",
              }}
            />
          </div>
          <div className="form-group mb-3" style={{ marginBottom: "10px" }}>
            <label htmlFor="email">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your Password"
              style={{
                outline: "none",
                padding: "16px 12px 16px 12px",
                width: "100%",
                border: "1px solid rgba(121, 121, 121, 1)",
                borderRadius: "8px",
              }}
            />
          </div>
          <Link to="/home"> <button
            type="submit"
            className="btn btn-primary btn-block btn-signup"
            style={{
              width: "344px",
              height: "54px",
              marginBottom: "20px",
            }}
          >
            Login
          </button></Link>
        </form>
        <Link to="/forgotpassword" style={{ textDecoration: "none", textAlign: "end", }}>
          <span
            className=""
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "600",

              color: "rgba(24, 73, 214, 1)",

            }}
          >
            Forgot Password?
          </span>
        </Link>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>
            Or signUp using
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span className="text-primary ms-2">SIGN UP</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
