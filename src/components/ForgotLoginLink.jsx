import React from 'react'
import { Link } from 'react-router-dom'

const ForgotLoginLink = () => {
  return (
    <div className='mt-5'>
      <p style={{fontWeight:"600",fontSize:"16px"}}>
<<<<<<< HEAD
      remember your password? 
      <Link to="/login" style={{color:"rgba(0, 119, 255, 1)",textDecoration:"none"}}>
      <span style={{fontSize:"16px",fontWeight:"700",color:"blue"}}>Login</span>
      </Link>
=======
      remember your password? <Link to="/login" style={{fontSize:"16px",fontWeight:"700",color:"blue"}}>Login</Link>
>>>>>>> 70e4574ee003988f0118c5db99363cc157e46874
      </p>
    </div>
  )
}

export default ForgotLoginLink
