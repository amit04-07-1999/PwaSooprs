import React from 'react'
import { Link } from 'react-router-dom'

const ForgotLoginLink = () => {
  return (
    <div className='mt-5'>
      <p style={{fontWeight:"600",fontSize:"16px"}}>
      remember your password? 
      <Link to="/login" style={{color:"rgba(0, 119, 255, 1)",textDecoration:"none"}}>
      <span style={{fontSize:"16px",fontWeight:"700",color:"blue"}}>Login</span>
      </Link>
      </p>
    </div>
  )
}

export default ForgotLoginLink
