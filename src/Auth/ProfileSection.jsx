import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Img from "../../public/Images/Img";

const ProfileSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const profiles = [
    { id: 1, name: "John Doe", des: "Developer", img: Img.clientlogo },
    { id: 2, name: "Jane Smith", des: "Designer", img: Img.professionallogo },
    // Add more profiles as needed
  ];

  const handleRadioChange = (id) => {
    setSelectedCard(id);
  };
  return (
    <>
      <div style={{ height: "335px" }}>
        <img src={Img.Logo} alt="image" />
      </div>
      <h1
        style={{
          width: "380px",
          height: "31px",
          position: "absolute",
          top: "447px",
          left: "30px",
          color: "rgba(8, 9, 13, 1)",
          fontSize: "26px",
          fontWeight: "700",
          gap:"0,",
          lineHeight:"31.2px"
        }}
      >
        Join as a Client or Professional
      </h1>
      <div
        style={{
          width: "390px",
          height: "164px",
          position: "absolute",
          top: "504px",
          left: "21px",
          gap: " 0px",
          opacity: "0px",
        }}
      >
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            {...profile}
            isSelected={selectedCard === profile.id}
            onRadioChange={() => handleRadioChange(profile.id)}
          />
        ))}
      </div>
      <div
        className="text-center"
        style={{
          width: "390px",
          height: "155px",
          position: "absolute",
          top: "704px",
          left: "20px",
        }}
      >
        <Link to="/signup">
          <button
            type="button"
            class="btn btn-outline-primary w-100 rounded-pill"
            style={{ height: "57px", fontWeight: "500" }}
          >
            Sign Up
          </button>
        </Link>
        <span style={{ color: "#407BFF", lineHeight: "45px" }}>or</span>
        <Link to="/login"><button
          class="btn btn-primary w-100 rounded-pill "
          style={{ height: "57px", fontWeight: "500" }}
          type="button"
        >
          Login
        </button></Link>
      </div>
    </>
  );
};

export default ProfileSection;
