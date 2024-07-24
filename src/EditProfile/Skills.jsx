import ProfileEditNav from "../components/ProfileEditNav";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { FaPlus } from "react-icons/fa";

const Skills = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [skills, setSkills] = useState([]);
  const [availableSkills, setAvailableSkills] = useState([
    "JavaScript",
    "React",
    "CSS",
    "HTML",
    "Node.js",
    "Python",
    "Django",
    "Ruby",
    "Rails",
    "Java",
    "Spring",
    "Kotlin",
  ]);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const addSkill = (skill) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };
  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s!== skill));
  };
  return (
    <div>
      <ProfileEditNav backProfile="Manage your portfolio" />
      <div
        style={{
          width: "390px",
          height: "412px",
          position: "absolute",
          top: "450px",
          left: "20px",
        
        }}
      >
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="my-2">
          <DropdownToggle
            caret
            style={{
              backgroundColor: "white",
              border: "1px solid rgb(64, 123, 255)",
              width: "389px",
              height:"51px",
              color:"rgb(64, 123, 255)",
              display:"flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize:"16px"

            }}
          >
            Select
          </DropdownToggle>

          <DropdownMenu style={{ width: "389px" }}>
           {availableSkills.map((skill, index) => (
              <DropdownItem
                key={index}
                onClick={() => addSkill(skill)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {skill} <FaPlus />
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <div>
          <div className="d-flex flex-wrap ">
            {skills.map((skill, index) => (
              <div key={index} className="badge m-1 p-2" style={{color:"rgba(0, 119, 255, 1)",border:"1px solid rgba(0, 119, 255, 1)",width:"187px",height:"53px",fontSize:"16px",borderRadius:"16px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"500",position:"relative"}}>
                {skill}
                <RxCross2 onClick={()=>removeSkill(skill)}  style={{position:"absolute",top:"8px",right:"10"}}/>

              </div>
            ))}
          </div>
          {skills.length > 0 && (
            <Button className="mt-3" color="primary" style={{width:"100%",height:"51px"}}>
              Save
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
