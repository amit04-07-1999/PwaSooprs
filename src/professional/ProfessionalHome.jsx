import React from "react";
import graph from "../../public/Images/graph.png";
import hand from "../../public/Images/hand.png";
import web from "../../public/Images/Web.png";
import SkillsCard from "../components/SkillsCard";
import { Link, NavLink } from "react-router-dom";

const SerachHere = () => {
  return (
    <div className="d-flex gap-2 mt-5">
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
            marginBottom: "0.5rem",
            boxShadow:
              "0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
      display: "none",
    },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
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
      <Link to="/prfessional-details" style={{textDecoration:"none", color:"inherit"}}>
        <SkillsCard />
      </Link>
      <Link to="/prfessional-details" style={{textDecoration:"none", color:"inherit"}}>
        <SkillsCard />
      </Link>
      <Link to="/prfessional-details" style={{textDecoration:"none", color:"inherit"}}>
        <SkillsCard />
      </Link>
      <Link to="/prfessional-details" style={{textDecoration:"none", color:"inherit"}}>
        <SkillsCard />
      </Link>
      <Link to="/prfessional-details" style={{textDecoration:"none", color:"inherit"}}>
        <SkillsCard />
      </Link>
      <Link to="/prfessional-details" style={{textDecoration:"none", color:"inherit"}}>
        <SkillsCard />
      </Link>
      <Link to="/prfessional-details" style={{textDecoration:"none", color:"inherit"}}>
        <SkillsCard />
      </Link>

    
    </div>
  );
};

export default ProfessionalHome;
