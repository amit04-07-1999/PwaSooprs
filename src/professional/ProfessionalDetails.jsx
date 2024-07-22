import React, { useState } from "react";
import ProfessionalHeader from "../components/ProfessionalHeader";
import CommonButton from "../components/CommonButton";
import Description from "./Description";
import ClientDetails from "./ClientDetails";

const Skills = ({ title }) => {
  return (
    <div>
      <div
        className="py-1 text-center bg-primary text-white d-flex justify-content-center"
        style={{ borderRadius: "30px", width: "120px" }}
      >
        <h6 className="m-1" style={{ fontSize: "12px" }}>
          {title}
        </h6>
      </div>
    </div>
  );
};

const ProfessionalDetails = () => {
  const [activeButton, setActiveButton] = useState("Description");

  const renderComponent = () => {
    switch (activeButton) {
      case "Description":
        return <Description/>;
      case "Skills":
      case "Client Details":
        return <ClientDetails/>;
      default:
        return <div>Please select a component to display</div>;
    }
  };
  const titles = ["UI Designing", "Web Designing", "UX Designing"];

  return (
    <div className="container">
      <ProfessionalHeader />
      <div className="p-2">
        <p className="mt-3" style={{ fontSize: "22px", fontWeight: "600" }}>
          Need a food delivery app UI Design
        </p>
      </div>
      <div className="d-flex justify-content-between mb-2 p-2">
        <div>
          <p className="text-primary fw-bold" style={{ fontSize: "12px" }}>
            Posted: <span className="fw-bold text-black">5 mins ago</span>
          </p>
        </div>
        <div>
          <p className="text-primary fw-bold" style={{ fontSize: "12px" }}>
            Budget: <span className="fw-bold text-black">$0 - $500</span>
          </p>
        </div>
        <div>
          <p className="text-primary fw-bold" style={{ fontSize: "12px" }}>
            <i class="bi bi-geo-alt-fill"></i>{" "}
            <span className="fw-bold text-black" style={{ fontSize: "12px" }}>
              {" "}
              New Delhi
            </span>
          </p>
        </div>
      </div>
      <CommonButton />
      <div className="container mt-5">
        <p className="text-primary fw-bold">Skills</p>
        <div className="d-flex justify-content-between card-wrapper mt-3">
          {titles.map((title, index) => (
            <Skills key={index} title={title} />
          ))}
        </div>
      </div>
      <hr className="mt-4" />
      <div className="d-flex justify-content-between gap-2 mt-4">
        <button
          className="p-2 w-100 fw-bold"
          style={{
            backgroundColor: activeButton === "Description" ? "black" : "white",
            color: activeButton === "Description" ? "white" : "black",
            borderRadius: "50px",
            border: "none",
          }}
          onClick={() => setActiveButton("Description")}
        >
          Description
        </button>
        <button
          className="p-2 w-100 fw-bold"
          style={{
            backgroundColor:
              activeButton === "Client Details" ? "black" : "white",
            color: activeButton === "Client Details" ? "white" : "black",
            borderRadius: "50px",
            border: "none",
          }}
          onClick={() => setActiveButton("Client Details")}
        >
          Client Details
        </button>
      </div>
      <div className="component-container">{renderComponent()}</div>
    </div>
  );
};

export default ProfessionalDetails;
