import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


const Error404 = () => {
    return (
        <div>
            <div className='d-flex justify-content-center' style={{ marginTop: "9rem" }}>
                <img src='../Images/404.png' />
            </div>
            <p className='d-flex justify-content-center mt-5'>We’re Sorry, the page you requested could not be found</p>
            <p className='d-flex justify-content-center text-muted'>Please go back to the home page!</p>
            <div className='d-flex justify-content-center'>
                <Link to="/home"><button className=' form-control bg-primary text-white' style={{ width: "24rem", height: "4rem", marginTop: "5rem" }}>Back to Home Screen</button></Link>
            </div>
            <Footer />

        </div>
    )
}

export default Error404