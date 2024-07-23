import React from 'react'
import ProfileEditNav from '../components/ProfileEditNav'
import { IoPerson } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";



const EditProfile = () => {
  return (
    <div>
      <ProfileEditNav/>
      <div style={{width:"404px",height:"99px",position:"absolute",top:"424px",left:"10px",display:"flex",justifyContent:"start",flexDirection:"column"}}>
      <div style={{color:"rgba(0, 119, 255, 1)"}}>
      <h3 style={{fontSize:"18px"}}>  < IoPerson style={{fontSize:"18px",}} /> Profile Settings</h3>
      
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16px",fontWeight:"400"}}>
      <p style={{fontSize:"16px",fontWeight:"500"}}>Manage Details</p>
      <IoIosArrowForward style={{fontSize:"16px"}} />
      </div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16px",fontWeight:"400" }}>
      <p style={{fontSize:"16px",fontWeight:"500"}}>Manage Password</p>
      <IoIosArrowForward style={{fontSize:"16px"}} />
      </div>
      </div>
      </div>
    </div>

  )
}

export default EditProfile
