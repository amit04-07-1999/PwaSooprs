import React from "react";
import graph from "../../public/Images/graph.png";
import hand from "../../public/Images/hand.png";
import web from "../../public/Images/Web.png";

const SerachHere = () => {
  return (
    <div className="d-flex gap-2">
      <div>
        <i
          class="bi bi-search"
          style={{ position: "absolute", padding: "12px", color: "#CFCFCF" }}
        ></i>
        <input
          style={{ paddingLeft: "3rem" }}
          type="text"
          className="search-bar form-control"
          placeholder="Search Gigs"
        />
      </div>
      <button className="filter-1 bi bi-filter"></button>
    </div>
  );
};

const Categrorys = ({ img, title }) => {
  return (
    <>
      <div className="mt-4">
        <div
          style={{
            borderRadius: "30px",
            width: "200px", 
            boxShadow: "0px 1px 4px 5px rgba(205, 237, 255, 0.4)",
          }}
          className="p-2"
        >
          <div className="d-flex gap-3 mt-1 mx-2">
            <img src={img} alt="" style={{ width: "33px", height: "35px" }} />
            <p
              style={{
                fontWeight: "600",
                fontSize: "14px",
                textAlign: "center",
                margin: 0,
              }}
            >
              {title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const ProfessionalHome = () => {
  const scrollContainerStyle = {
    overflowX: "auto",
    display: "flex",
    gap: "15px",
    WebkitScrollbar: {
      display: "none"
    },
    msOverflowStyle: "none", 
    scrollbarWidth: "none" 
  };

  return (
    <div className="container">
      <SerachHere />
      <div className="mt-4">
        <h4>Categories</h4>
        <div style={scrollContainerStyle}>
          <Categrorys img={graph} title="Graphic Designer" />
          <Categrorys img={web} title="Web Designer" />
          <Categrorys img={hand} title="Graphic Designer" />
          <Categrorys img={hand} title="Graphic Designer" />
          <Categrorys img={hand} title="Graphic Designer" />
        </div>
      </div>
    </div>
  );
};


export default ProfessionalHome;
