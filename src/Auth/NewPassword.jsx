import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";
import Img from "../../public/Images/Img";
import ForgotLoginLink from "../components/ForgotLoginLink";
import Forgotimage from "../components/Forgotimage";






const NewPassword = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);

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
      <Forgotimage forgotdes="Create a new password" />

      <div className="mt-5" style={{ width: "344px", height: "154px" }}>
        <div className="mb-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputpassword"
            style={{
              height: "54px",
              border: "1px solid rgba(121, 121, 121, 1)",
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Re-Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputpassword"
            style={{
              height: "54px",
              border: "1px solid rgba(121, 121, 121, 1)",
            }}
          />
        </div>
        <div>
          <button
            style={{
              height: "54px",
              width: "100%",
              fontSize: "16px",
              fontWeight: "700",
            }}
            className="btn btn-primary"
            type="button"
            onClick={onOpenModal}
          >
            Submit
          </button>
          <Modal
            open={open}
            center
            showCloseIcon={false}
            
            styles={{
              modal: {
                backgroundColor: "white",
                width: "100vw",
                height: "100vh",
                margin: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 0,
                flexDirection: "column",
                overflow:""
              },
            }}
          >
            <div className="mb-5" style={{ textAlign: "center" }}>
              <img
                src={Img.successtick}
                alt="successtick"
                style={{ width: "260px", height: "260px" }}
              />
              <h1
                className="mt-4"
                style={{
                  fontSize: "40px",
                  fontWeight: "500",
                  color: "rgba(0, 0, 0, 1)",
                }}
              >
                Success
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "rgba(107, 107, 107, 1)",
                }}
              >
                Your password has been changed successfully
              </p>
            </div>
            <Link to="/login">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-signup"
                style={{
                  width: "344px",
                  height: "54px",
                  marginBottom: "20px",
                }}
              >
                Login
              </button>
            </Link>
          </Modal>
        </div>
      </div>
      <ForgotLoginLink />
    </div>
  );
};

export default NewPassword;
