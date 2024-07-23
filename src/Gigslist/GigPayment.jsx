import React from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const GigPayment = () => {
    return (
        <div className='container'>
            <div className="header d-flex flex-row pl-3 m-3 pb-4" style={{ paddingTop: "50px" }}>
                <Link to="/gigpagedetailed">
                    <FontAwesomeIcon icon={faArrowLeft} className="back-icon" style={{ fontSize: "23px", cursor: "pointer", color: "black" }} />
                </Link>

                <p className="" style={{ fontWeight: "650", fontSize: "21px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto", paddingLeft: "60px" }}>Credit Card or Debit Card</p>
            </div>
            <div className='creditimg p-2 pt-5'>
                <img src='../Images/creditcardnew.png' />
            </div>
            <div className='carddetails mt-3 p-3'>
                <div className="cardnumber d-flex flex-column">
                    <p className="" style={{ fontWeight: "650", fontSize: "18px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Card Number</p>
                    <input className='mb-4 mt-1 search-bar form-control' placeholder='Enter your Card Number' style={{ border: "1px solid #6B6B6B", width: "370px", height: "55px", borderRadius: "10px" }} />
                </div>
                <div className='personaldetails mt-4 d-flex flex-row justify-content-between'>
                    <div className="cardnumber d-flex flex-column ">
                        <p className="" style={{ fontWeight: "650", fontSize: "18px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>First Name</p>
                        <input className='mt-1 search-bar form-control' placeholder='Your first name' style={{ border: "1px solid #6B6B6B", width: "170px", height: "55px", borderRadius: "10px" }} />
                    </div>
                    <div className="cardnumber d-flex flex-column">
                        <p className="" style={{ fontWeight: "650", fontSize: "18px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Last Name</p>
                        <input className='mb-4 mt-1 search-bar form-control' placeholder='Your last name' style={{ border: "1px solid #6B6B6B", width: "180px", height: "55px", borderRadius: "10px" }} />
                    </div>
                </div>
                <div className='personaldetails mt-4 d-flex flex-row justify-content-between'>
                    <div className="mt-3 cardnumber d-flex flex-column ">
                        <p className="" style={{ fontWeight: "650", fontSize: "18px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>MM/YY</p>
                        <input className='mt-1 search-bar form-control' placeholder='Enter MM/YY' style={{ border: "1px solid #6B6B6B", width: "170px", height: "55px", borderRadius: "10px" }} />
                    </div>
                    <div className="mt-3 cardnumber d-flex flex-column">
                        <p className="" style={{ fontWeight: "650", fontSize: "18px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>CVV</p>
                        <input className='mt-1 search-bar form-control' placeholder='Enter CVV' style={{ border: "1px solid #6B6B6B", width: "180px", height: "55px", borderRadius: "10px" }} />
                    </div>
                </div>
            </div>
            <button className="offerbutton p-2" style={{ backgroundColor:"#407BFF", width: "390px", marginLeft:"10px", marginTop:"60px" ,border: "none", height: "70px", borderRadius: "25px" }}>
                      
                        <p className="d-flex justify-content-center" style={{ color: "#FFFFFF", fontWeight: "700", fontSize: "18px", marginTop: "12px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Pay Now (₹1,800)</p>
                </button>
        </div>
    )
}

export default GigPayment
