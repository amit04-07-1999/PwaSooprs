import React from "react";
import IndainFlag from "../../public/Images/indianflag.png";

const UserDetails = () => {
  return (
    <div className="d-flex justify-content-between mt-3">
      <div>
        <i class="bi bi-person-lines-fill"></i>
        <span className="fw-bold mx-2">Identity Verified</span>
      </div>
      <i class="bi bi-check-circle-fill text-success"></i>
    </div>
  );
};

const ClientDetails = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-5">
        <div>
          <i class="bi bi-flag-fill" />
          <span className="fw-bold mx-2">Nationality</span>
        </div>
        <div>
          <img src={IndainFlag} alt="indian flag" width="24px" />
          <span className="text-primary fw-bold" style={{ marginLeft: "1rem" }}>
            Indian
          </span>
        </div>
      </div>
      <UserDetails />
      <UserDetails />
      <UserDetails />
      <UserDetails />
    </div>
  );
};

export default ClientDetails;
