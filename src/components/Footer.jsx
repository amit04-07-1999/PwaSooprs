import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='d-flex justify-content-around p-2 mt-5 border text-primary' style={{ borderRadius: "2rem 2rem 0 0", backgroundColor: "white", position: "fixed", bottom: "0", width: "100%", listStyle: "none" }}>
            <Link to="/home" style={{ textDecoration: "none" }}>
        <div className='d-flex justify-content-around p-2 mt-5 border text-primary' style={{ borderRadius: "2rem 2rem 0 0", backgroundColor: "white", position:"fixed", bottom:"0", width:"100%", listStyle:"none", boxShadow:"0 -2px 10px rgba(0,0,0,0.1)", zIndex:"1000"}}>
            <Link to="/" style={{textDecoration:"none"}}>
                <div>
                    <i class="bi bi-house-door-fill p-2"></i>
                    <p>Home</p>
                </div>
            </Link>
            <Link to="/project-posting" style={{ textDecoration: "none" }}>
            <Link to="/project-posting" style={{textDecoration:"none"}}>
                <div>
                    <i class="bi bi-list-task p-3"></i>
                    <p>Projects</p>
                </div>
            </Link>
            <Link to="/professional" style={{ textDecoration: "none" }}>
            <Link to="/" style={{textDecoration:"none"}}>
                <div>
                    <i class="bi bi-person-lines-fill p-4"></i>
                    <p>Professional</p>
                </div>
            </Link>
            <Link to="/gig-posting" style={{ textDecoration: "none" }}>
            <Link to="/gig-posting" style={{textDecoration:"none"}}>
                <div>
                    <i class="bi bi-graph-up-arrow p-1"></i>
                    <p>Gigs</p>
                </div>
            </Link>
            <Link to="/bio" style={{ textDecoration: "none" }}>
            <Link to="/" style={{textDecoration:"none"}}>
                <div>
                    <i class="bi bi-person-fill p-3"></i>
                    <p>Account</p>
                </div>
            </Link>
        </div>
    )
}

export default Footer