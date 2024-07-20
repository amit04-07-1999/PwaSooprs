import React from "react";

const BioDetails = () => {
  return (
    <>
      <div className="p-2">
        <h5>Bio</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          inventore amet veniam impedit. Cum, aliquid consectetur, tempora
          incidunt facere non officiis deleniti voluptate modi quae vero
          perferendis temporibus rerum saepe.{" "}
        </p>
      </div>
    </>
  );
};

const ContactUs = ({}) => {
  return (
    <div>
      <i class="bi bi-envelope-fill text-primary"></i>
      <span style={{ fontSize: "12px" }}> info@company.com</span>
    </div>
  );
};

const Bio = () => {
  return (
    <div className="container">
      <img
        src="./public/images/avtars.png"
        alt="avtar"
        style={{
          height: "200px",
          width: "200px",
          textAlign: "center",
          margin: "auto",
          marginRight: "auto",
          width: "50%",
          display: "block",
          marginTop: "4rem",
        }}
      />
      <div className="text-center mt-3">
        <p className="m-0" style={{ fontWeight: "600", fontSize: "24px" }}>
          Leonardo
        </p>
        <p>
          <span style={{ color: "#0077FF", fontSize: "16px" }}>
            Director at
          </span>{" "}
          ABC Firms
        </p>
        <div className="d-flex justify-content-center gap-2">
          <img
            src="./public/images/rates.png"
            alt="rating"
            style={{ height: "20px", width: "20px" }}
          />
          <p>4.5/5</p>
        </div>
      </div>
      <BioDetails />
      <ContactUs />
    </div>
  );
};

export default Bio;
