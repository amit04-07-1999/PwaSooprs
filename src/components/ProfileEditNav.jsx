import React, { useState } from "react";
import { FaArrowLeft, FaUpload } from "react-icons/fa";
import Img from "../../public/Images/Img";
import { Link } from "react-router-dom";

const ProfileEditNav = ({backProfile}) => {
  const [profileImage, setProfileImage] = useState("Images/Ellipse 1.png");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <img src={Img.bgProfile} alt="editbg" style={{ zIndex: "-12" }} />
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: "83px",
          left: "20px",
          alignItems: "center",
          gap: "25px",
          
        }}
      >
      <Link to="/editprofile" style={{textDecoration:"none",color:"rgba(17, 16, 16, 1)"}}>
        <FaArrowLeft style={{ width: "21px", height: "21px" }} />
        </Link>
        <h3
          style={{
            width: "250px",
            height: "24px",
            fontWeight: "500",
            fontSize: "24px",
          }}
        >
          {backProfile}
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "150px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <label
          htmlFor="file-upload"
          style={{ position: "relative", cursor: "pointer" }}
        >
          <div
            style={{
              position: "relative",
              width: "120px",
              height: "120px",
            }}
          >
            <img
              src={profileImage}
              alt="Profile"
              style={{
                width: "134px",
                height: "134px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "5px solid #007bff",
              }}
            />
            <FaUpload
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "35px",
                backgroundColor: "#007bff",
                color: "#fff",
                borderRadius: "50%",
                padding: "5px",
                width: "30px",
                height: "30px",
              }}
            />
          </div>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </label>
      </div>
      <div style={{width:"104px" ,height:"46px",textAlign:"center" , position:"absolute",top:"346px",left:"163px"}}>
        <h2>Leonardo</h2>
        <p style={{fontSize:"14px"}}>UI/UX Designer</p>
      </div>
    </div>
  );
};

export default ProfileEditNav;
