import React from 'react'
import { Link } from 'react-router-dom'

const ForgotLoginLink = () => {
  return (
    <div style={{width:"254px",height:"22px", textAlign:"center", position:"absolute" ,top:"620px",left:"45px"}}>
      <p style={{fontWeight:"600",fontSize:"16px"}}>
      remember your password? <Link to="/login" style={{fontSize:"16px",fontWeight:"700",color:"blue"}}>Login</Link>
      </p>
    </div>
  )
}

export default ForgotLoginLink
