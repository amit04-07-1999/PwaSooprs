import React from "react";
import Img from "../assets/Img";
import ProfileCard from "../Components/ProfileCard";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProfileSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const profiles = [
    { id: 1, name: 'John Doe', des: 'Developer', img: Img.clientlogo },
    { id: 2, name: 'Jane Smith', des: 'Designer', img: Img.professionallogo },
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
      <h1 className="profileH1">Join as a Client or Professional</h1>
      <div className="client-conatainer">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          {...profile}
          isSelected={selectedCard === profile.id}
          onRadioChange={() => handleRadioChange(profile.id)}
        />
      ))}
      </div>
      <div className="text-center" style={{width:"390px",height:"155px",position:"absolute",top:"704px",left:"20px"}}>
      <Link to="/signup">
      <button type="button" class="btn btn-outline-primary w-100 rounded-pill" style={{height:"57px",fontWeight:"500"}}>Sign Up</button>
      </Link>
      <span style={{ color:"#407BFF",lineHeight:"45px"}}>or</span>
      <button class="btn btn-primary w-100 rounded-pill " style={{height:"57px",fontWeight:"500"}} type="button">Button</button>

      </div>
    </>
  );
};

export default ProfileSection;
