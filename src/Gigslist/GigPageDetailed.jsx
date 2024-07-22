import React from 'react'

const GigPageDetailed = () => {
  return (
    <>
     <div>
      <div className='headerImg mb-5'>
      <img src='../Images/gigdetailed.png' style={{}} alt="Profile" />
      </div>
      <div className='sectionone m-2 d-flex flex-row justify-content-between' style={{padding:"10px"}}>
        <div className='toplogo' style={{borderColor:"blue"}}>
        <img src='../Images/Ellipse 1.png' style={{width:"80px", height:"80px"}} alt="Profile" />
        </div>
        <div className="sectionTitle d-flex flex-column m-2">
            <p className="" style={{fontWeight:"650", fontSize:"20px", lineHeight:"20px", letterSpacing:"0.25px"}}>Automobiles Website Design</p>
            <p style={{color:"#407BFF", fontWeight:"550", fontSize:"22px", lineHeight:"20px", letterSpacing:"0.25px"}}>UI/UX Design</p>
        </div>
      </div>
      <div className='sectiontwo d-flex flex-column'>
            <p className="descText"style={{margin:"25px", fontWeight:"650", fontSize:"22px", lineHeight:"20px", letterSpacing:"0.25px"}}>Description</p>
            <p className="m-4 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className="sectionthree d-flex flex-column"></div>
    </>
  )
}

export default GigPageDetailed
