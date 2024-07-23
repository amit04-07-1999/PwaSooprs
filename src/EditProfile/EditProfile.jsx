import React from "react";
import ProfileEditNav from "../components/ProfileEditNav";
import { IoPerson } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaWallet } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsFileEarmarkPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div>
      <ProfileEditNav backProfile="Edit Profile" />
      <div
        style={{
          width: "404px",
          height: "99px",
          position: "absolute",
          top: "424px",
          left: "10px",
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
        }}
      >
        <div>
          <h3 style={{ fontSize: "18px", color: "rgba(0, 119, 255, 1)" }}>
            {" "}
            <IoPerson style={{ fontSize: "18px" }} /> Profile Settings
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
          <Link to="/managedetail" style={{textDecoration:"none",color:"rgba(17, 16, 16, 1)"}}>
            <p style={{ fontSize: "16px", fontWeight: "500" }}>
              Manage Details
            </p>
            </Link>
            <IoIosArrowForward style={{ fontSize: "16px" }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
          <Link to="/managepassword" style={{textDecoration:"none",color:"rgba(17, 16, 16, 1)"}}>
            <p style={{ fontSize: "16px", fontWeight: "500" }}>
              Manage Password
            </p>
            </Link>
            <IoIosArrowForward style={{ fontSize: "16px" }} />
          </div>
        </div>

        {/* Wellet */}

        <div>
          <h3 style={{ fontSize: "18px", color: "rgba(0, 119, 255, 1)" }}>
            {" "}
            <FaWallet style={{ fontSize: "18px" }} /> Wallet
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
         
            <p style={{ fontSize: "16px", fontWeight: "500" }}>
              Add card details
            </p>
           
            <IoIosArrowForward style={{ fontSize: "16px" }} />
          </div>
        </div>

        {/* Bank details */}

        <div>
          <h3 style={{ fontSize: "18px", color: "rgba(0, 119, 255, 1)" }}>
            {" "}
            <FaBuilding style={{ fontSize: "18px" }} />
            Bank Details
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
           <Link to="/bankdetails" style={{textDecoration:"none",color:"rgba(17, 16, 16, 1)"}}>
            <p style={{ fontSize: "16px", fontWeight: "500" }}>
              Add Bank details
            </p>
            </Link>
            <IoIosArrowForward style={{ fontSize: "16px" }} />
          </div>
        </div>

        {/* portfolio */}

        <div>
          <h3 style={{ fontSize: "18px", color: "rgba(0, 119, 255, 1)" }}>
            {" "}
            <MdContacts />
            Portfolio
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
          <Link to="/manageportfolio" style={{textDecoration:"none",color:"rgba(17, 16, 16, 1)"}}>
            <p style={{ fontSize: "16px", fontWeight: "500" }}>
              Manage Portfolio
            </p>
            </Link>
            <IoIosArrowForward style={{ fontSize: "16px" }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            <p style={{ fontSize: "16px", fontWeight: "500" }}>Skills</p>
            <IoIosArrowForward style={{ fontSize: "16px" }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
          <Link to="/addexperience" style={{textDecoration:"none",color:"rgba(17, 16, 16, 1)"}}>
            <p style={{ fontSize: "16px", fontWeight: "500" }}>Experience</p>
            </Link>
            <IoIosArrowForward style={{ fontSize: "16px" }} />
          </div>
        </div>

        {/* service */}

        <div>
          <h3 style={{ fontSize: "18px", color: "rgba(0, 119, 255, 1)" }}>
            {" "}
            <RiCustomerService2Fill style={{ fontSize: "18px" }} />
            Lead Services
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            <p style={{ fontSize: "16px", fontWeight: "500" }}>
              Manage Services
            </p>
            <IoIosArrowForward style={{ fontSize: "16px" }} />
          </div>
        </div>

        {/* Resume */}

        <div>
          <h3 style={{ fontSize: "18px", color: "rgba(0, 119, 255, 1)" }}>
            {" "}
            <BsFileEarmarkPlusFill />
            Resume
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            <p style={{ fontSize: "16px", fontWeight: "500" }}>Resume</p>
            <IoIosArrowForward style={{ fontSize: "16px" }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            <p style={{ fontSize: "16px", fontWeight: "500" }}>Academics</p>
            <IoIosArrowForward style={{ fontSize: "16px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
