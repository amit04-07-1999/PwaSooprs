import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="d-flex justify-content-between mt-3">
            <img src='../Images/Ellipse 1.png' className='headImg' />
            <p className='head'>Hello, Jacob Collis</p>
            {/* <img src='../Images/wavehand.png' className='wavehand'/> */}
            <span className='wavehand'>&#128075;</span>
            <Link to="/project-posting"><button className='text-1'>Post a Project</button></Link>
            <span style={{ marginTop: "0.5vh" }}>🔔</span>
        </div>
    )
}

export default Header;
