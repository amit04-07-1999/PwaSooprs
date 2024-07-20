import React from "react";
import { useState } from "react";

const BioDetails = ({ bio, des }) => {
  return (
    <>
      <div className="p-2">
        <h5>{bio}</h5>
        <p>{des}</p>
      </div>
    </>
  );
};

const ContactUs = ({}) => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div>
          <i class="bi bi-envelope-fill text-primary"></i>
          <span style={{ fontSize: "14px" }}> info@company.com</span>
        </div>
        <div>
          <i class="bi bi-telephone-fill text-primary"></i>
          <span style={{ fontSize: "14px" }}> 123456899</span>
        </div>
        <div>
          <i class="bi bi-geo-alt-fill text-primary"></i>
          <span style={{ fontSize: "14px" }}> New Delhi</span>
        </div>
      </div>
    </div>
  );
};

const MultipleButtons = ({ btn, handleClick, activeButton }) => {
  return (
    <div className="container mt-5">
      <button
        onClick={() => handleClick(btn)}
        style={{
          backgroundColor: activeButton === btn ? "blue" : "white",
          color: activeButton === btn ? "white" : "black",
          borderRadius: "100px",
          fontSize: "14px",
          fontWeight: "500",
          letterSpacing: "1px",
          width: "120px",
          height: "40px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {btn}
      </button>
    </div>
  );
};

const Bio = () => {
  const [activeButton, setActiveButton] = useState("");
  const [data, setData] = useState({ title: "", content: "", component: null });

  const handleClick = (btn) => {
    setActiveButton(btn);
    if (btn === "Company info") {
      setData({
        title: "Company Info",
        content: "This is the Company info data.",
        component: <CompanyInfoComponent />,
      });
    } else if (btn === "Projects") {
      setData({
        title: "Projects",
        content: "This is the Projects data.",
        component: <ProjectsComponent />,
      });
    } else if (btn === "Reviews") {
      setData({
        title: "Reviews",
        content: "This is the Reviews data.",
        component: <ReviewsComponent />,
      });
    }
  };
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
      <BioDetails
        bio="Bio"
        des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          inventore amet veniam impedit. Cum, aliquid consectetur, tempora
          incidunt facere non officiis deleniti voluptate modi quae vero
          perferendis temporibus rerum saepe."
      />
      <ContactUs />
      <div className="d-flex justify-content-between">
        <MultipleButtons
          btn="Company info"
          handleClick={handleClick}
          activeButton={activeButton}
        />
        <MultipleButtons
          btn="Projects"
          handleClick={handleClick}
          activeButton={activeButton}
        />
        <MultipleButtons
          btn="Reviews"
          handleClick={handleClick}
          activeButton={activeButton}
        />
      </div>
      <div className="container mt-5 data-display">
        {data.title && <h2>{data.title}</h2>}
        {data.content && <p>{data.content}</p>}
      </div>{" "}
    </div>
  );
};

export default Bio;
