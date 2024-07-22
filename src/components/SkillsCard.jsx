import React from "react";

const Technolog = ({ title }) => {
  return (
    <>
      <div>
        <div
          className="py-2 text-center bg-primary text-white d-flex justify-content-center"
          style={{ borderRadius: "30px", width: "110px" }}
        >
          <h6 className="m-1" style={{ fontSize: "12px" }}>
            {title}
          </h6>
        </div>
      </div>
    </>
  );
};

const SkillsCard = () => {
  const titles = ["Graphic Designer", "Web Designer", "UX Designer"];

  return (
    <div className="card mt-4 mb-5" style={{  boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", border:"none"}}>
      <div className="container">
        <div className="mt-3">
          <div className="d-flex justify-content-between">
            <h5>Need a food delivery app UI Design</h5>
            <i class="bi bi-heart text-primary mt-1"></i>
          </div>
          <div className="d-flex gap-4 mt-2">
            <p className="text-secondary">Posted 5 mins ago</p>
            <span className="fw-bold">
              {" "}
              <i class="bi bi-geo-alt-fill text-primary"></i> New Delhi
            </span>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-primary fs-3">Skills</p>
          <div className="d-flex justify-content-between card-wrapper">
            {titles.map((title, index) => (
              <Technolog key={index} title={title} />
            ))}
          </div>
          <p className="mt-3" style={{ lineHeight: "1.3rem", fontSize:"12px" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            pariatur reiciendis eaque adipisci perferendis et repellendus, modi
            sequi aspernatur esse excepturi quae dolorum, possimus reprehenderit
            quisquam numquam. Magnam, iusto minus.
          </p>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div>
            <p className="text-primary fw-bold" style={{fontSize:"12px"}}>
              Budget: <span className="fw-bold text-black">$0 - $500</span>
            </p>
          </div>
          <div>
              <i class="bi bi-shield-fill-check text-primary fw-bold" style={{fontSize:"14px"}}></i>{" "}
              <span className="fw-bold text-black" style={{fontSize:"12px"}}>Payment Verified</span>
          </div>
          <div>
            <p className="text-primary fw-bold" style={{fontSize:"12px"}}>
              Bids: <span className="fw-bold text-black" style={{fontSize:"12px"}}> 4</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
