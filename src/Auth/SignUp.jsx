import React, { useState } from "react";
import Img from "../assets/Img";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Link } from "react-router-dom";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');
  const [passwordIcon, setPasswordIcon] = useState(eyeOff);
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(eyeOff);

  const togglePasswordVisibility = () => {
    if (passwordType === 'password') {
      setPasswordIcon(eye);
      setPasswordType('text');
    } else {
      setPasswordIcon(eyeOff);
      setPasswordType('password');
    }
  };

  const toggleConfirmPasswordVisibility = () => {
    if (confirmPasswordType === 'password') {
      setConfirmPasswordIcon(eye);
      setConfirmPasswordType('text');
    } else {
      setConfirmPasswordIcon(eyeOff);
      setConfirmPasswordType('password');
    }
  };

  return (
    <div>
      <h1
        className="text-primary"
        style={{
          width: "121px",
          height: "48px",
          position: "absolute",
          top: "73px",
          left: "42px",
          font: "poppins",
          fontWeight: "500",
          fontSize: "32px",
          lineHeight: "48px",
          textAlign: "center",
        }}
      >
        Sign Up
      </h1>
      <div className="container form-container">
        <form
          style={{
            width: "344px",
            height: "556px",
            position: "absolute",
            top: "148px",
            left: "42px",
            gap: "20px",
          }}
        >
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              style={{
                  outline: "none",
                  padding: "16px 12px 16px 12px",
                  width: "100%",
                  border:"1px solid rgba(121, 121, 121, 1)",
                  borderRadius:"8px",
                }}
            />
          </div>
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
                  border:"1px solid rgba(121, 121, 121, 1)",
                  borderRadius:"8px",
                }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="Enter your mobile number"
              style={{
                  outline: "none",
                  padding: "16px 12px 16px 12px",
                  width: "100%",
                  border:"1px solid rgba(121, 121, 121, 1)",
                  borderRadius:"8px",
                }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              placeholder="Enter your country"
              style={{
                  outline: "none",
                  padding: "16px 12px 16px 12px",
                  width: "100%",
                  border:"1px solid rgba(121, 121, 121, 1)",
                  borderRadius:"8px",
                }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor="password">Password</label>
            <div className="input-group " style={{ position: "relative" }}>
              <input
                type={passwordType}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                style={{
                  outline: "none",
                  padding: "16px 12px 16px 12px",
                  width: "100%",
                  border:"1px solid rgba(121, 121, 121, 1)",
                  borderRadius:"8px",
                }}
              />
              <span
                className="icon-container"
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                <Icon icon={passwordIcon} size={25} />
              </span>
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-group" style={{ position: "relative" }}>
              <input
                type={confirmPasswordType}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{
                  outline: "none",
                  border:"1px solid rgba(121, 121, 121, 1)",
                  borderRadius:"8px",
                  padding: "16px 12px 16px 12px",
                  width: "100%",
                }}
              />
              <span
                className="icon-container"
                onClick={toggleConfirmPasswordVisibility}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                <Icon icon={confirmPasswordIcon} size={25} />
              </span>
            </div>
          </div>
        </form>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-block btn-signup"
        style={{
          width: "344px",
          height: "54px",
          position: "absolute",
          top: "727px",
          left: "42px",
        }}
      >
        Sign Up
      </button>
      <div style={{ textAlign: "center", marginTop: "10px",position:"absolute",top:"813px",left:"90px" }}>
          <p>Don't have a Account? 
          <Link to="/login" style={{textDecoration:"none"}}>
            <span className="text-primary ms-2"> LOGIN NOW</span>
          </Link>
          </p>
        </div>
    </div>
  );
};

export default SignUp;
