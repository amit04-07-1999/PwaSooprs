import React from "react";
import Img from "../../public/Images/Img"
const Forgotimage = ({forgotdes}) => {
  return (
    <div style={{ height: "180px", textAlign: "center", width: "346px" }}>
      <img
        style={{ width: "75px", height: "64px" }}
        src={Img.forgotpassword}
        alt="img"
      />
      <div
        className="mt-5"
        style={{ width: "346px", height: "80px", boxSizing: "border-box" }}
      >
        <h2
          className="mt-4"
          style={{ fontSize: "20px", fontWeight: "700", lineHeight: "28px" }}
        >
          Forgot your password?
        </h2>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "400",
            color: "rgba(120, 120, 120, 1)",
          }}
        >
       {forgotdes}
        </p>
      </div>
    </div>
  );
};

export default Forgotimage;
