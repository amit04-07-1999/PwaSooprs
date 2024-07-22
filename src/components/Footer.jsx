import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='d-flex justify-content-around p-2 mt-5 border text-primary' style={{ borderRadius: "2rem 2rem 0 0", backgroundColor: "white", position:"fixed", bottom:"0", width:"100%", listStyle:"none" }}>
            <Link to="/">
                <div>
                    <i class="bi bi-house-door-fill p-2"></i>
                    <p>Home</p>
                </div>
            </Link>
            <Link to="/project-posting">
                <div>
                    <i class="bi bi-list-task p-3"></i>
                    <p>Projects</p>
                </div>
            </Link>
            <Link to="/">
                <div>
                    <i class="bi bi-person-lines-fill p-4"></i>
                    <p>Professional</p>
                </div>
            </Link>
            <Link to="/gig-posting">
                <div>
                    <i class="bi bi-graph-up-arrow p-1"></i>
                    <p>Gigs</p>
                </div>
            </Link>
            <Link to="/">
                <div>
                    <i class="bi bi-person-fill p-3"></i>
                    <p>Account</p>
                </div>
            </Link>
        </div>
    )
}

export default Footer