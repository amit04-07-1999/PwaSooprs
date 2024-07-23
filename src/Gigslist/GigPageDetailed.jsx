import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowLeft, faStar, faSync, faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GigPageDetailed = () => {

    return (
        <>
           <div className="mb-5">
            <div>
                <div className='headerImg mb-4'>
                    <img src='../Images/gigdetailed.png' style={{}} alt="Profile"/>
                    <Link to="/gigs">
                    <FontAwesomeIcon icon={faArrowLeft} className="back-icon" style={{fontSize:"23px", cursor:"pointer", color:"#FFFFFF", position:"relative", top: "-350px", left:"20px", transition:"color 0.3s ease"}}/>
                    </Link>      
                </div>
                <div className='sectionone m-4 p-2 d-flex flex-row justify-content-between' style={{ padding: "10px" }}>
                    <div className='toplogo' style={{ borderColor: "blue" }}>
                        <img src='../Images/Ellipse 1.png' style={{ width: "60px", height: "60px" }} alt="Profile" />
                    </div>
                    <div className="sectionTitle d-flex flex-column">
                        <p className="" style={{ fontWeight: "650", fontSize: "21px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Automobiles Website Design</p>
                        <p style={{ color: "#407BFF", fontWeight: "550", fontSize: "22px", lineHeight: "20px", letterSpacing: "0.25px" }}>UI/UX Design</p>
                    </div>
                </div>
                <div className='sectiontwo d-flex flex-column'>
                    <p className="descText" style={{ fontFamily: "Roboto", margin: "25px", fontWeight: "650", fontSize: "22px", lineHeight: "20px", letterSpacing: "0.25px" }}>Description</p>
                    <p className="m-4 mt-1" style={{ fontFamily: "Roboto" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
            <div className="sectionthree d-flex flex-column mb-1">
                <div className="pricetext">
                    <p style={{ margin: "25px", fontWeight: "650", fontSize: "22px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Price Details</p>
                </div>
                <div className="pricebox" style={{ margin: "16px", width: "400px", height: "510px", borderRadius: "11px", background: "linear-gradient(180deg, #0078FE 0%, #004898 100%)" }}>
                    <div className='pricedetails' style={{ margin: "20px" }}>
                        <div className="pricerow d-flex p-2  flex-row justify-content-between">
                            <p className="price" style={{ fontWeight: "500", fontSize: "22px", lineHeight: "20px", letterSpacing: "0.25px", color: "#FFFFFF", fontFamily: "Roboto" }}>Price</p>
                            <p className="priceAmount" style={{ fontWeight: "500", fontSize: "20px", lineHeight: "20px", letterSpacing: "0.25px", color: "#FFFFFF" }}>₹2,000</p>
                        </div>
                        <div className="deliveryrow d-flex mb-3 p-2  flex-row justify-content-between">
                            <div className="d-flex flex-row" style={{ position: "absolute" }}>
                                <FontAwesomeIcon icon={faClock} style={{ color: "rgba(255, 255, 255, 0.7)", paddingRight: "7px" }} />
                                <p style={{ fontFamily: "Roboto", color: "rgba(255, 255, 255, 0.7)", position: "relative", top: "-5px" }}>Delivery Days</p>
                                <p className="" style={{ color: "rgba(255, 255, 255, 0.7)", position: "relative", left: "180px", bottom: "5px", fontFamily: "Roboto" }}>2 days</p>
                            </div>
                        </div>
                        <div className="revisionsrow d-flex mb-2 mt-4 p-2  flex-row justify-content-between">
                            <div className="d-flex flex-row">
                                <FontAwesomeIcon icon={faSync} style={{ color: "rgba(255, 255, 255, 0.7)" }} />
                                <p style={{ color: "#FFFFFF", position: "relative", left: "7px", top: "-5px", fontFamily: "Roboto", color: "rgba(255, 255, 255, 0.7)" }}>Revisions</p>
                            </div>
                            <div>
                                <p style={{ color: "rgba(255, 255, 255, 0.7)", position: "relative", left: "2px", top: "-5px", fontFamily: "Roboto" }}>Unlimited</p>
                            </div>
                        </div>
                        <div style={{ borderBottom: "1px solid white" }}></div>
                        <div className="seconddetails d-flex flex-column">
                            <div className="revisionsrow d-flex mt-3 flex-row justify-content-between">
                                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontFamily: "Roboto" }}>Revisions</p>

                                <p style={{ color: "rgba(255, 255, 255, 0.9)", fontFamily: "Roboto" }}>Unlimited</p>

                            </div>
                            <div className="deliverydatesrow d-flex flex-row justify-content-between">
                                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontFamily: "Roboto" }}>Delivery Dates</p>

                                <p style={{ color: "rgba(255, 255, 255, 0.9)", fontFamily: "Roboto" }}>7 Days</p>
                            </div>
                            <div className="screensrow d-flex flex-row justify-content-between">
                                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontFamily: "Roboto" }}>Number of screens</p>

                                <p style={{ color: "rgba(255, 255, 255, 0.9)", fontFamily: "Roboto" }}>10</p>
                            </div>
                            <div className="prototyperow d-flex flex-row justify-content-between">
                                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontFamily: "Roboto" }}>Prototype</p>

                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "rgba(255, 255, 255, 0.9)" }} />
                            </div>
                            <div className="uidesignrow d-flex flex-row justify-content-between">
                                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontFamily: "Roboto" }}>UI Design</p>

                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "rgba(255, 255, 255, 0.9)" }} />
                            </div>
                            <div className="sourcefilerow d-flex flex-row justify-content-between">
                                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontFamily: "Roboto" }}>Source File</p>

                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "rgba(255, 255, 255, 0.9)" }} />
                            </div>
                            <button className="offerbutton m-2" style={{ color: "white", width: "350px", height: "50px", borderRadius: "25px" }}>
                                <p className="d-flex justify-content-center" style={{ color: "#0177FB", fontWeight: "700", fontSize: "18px", marginTop: "12px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Select Offer</p></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sectionfour d-flex flex-column">
                <div className="pricetext">
                    <p style={{ margin: "25px", fontWeight: "650", fontSize: "22px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Reviews</p>
                </div>
                <div className="ratingsection m-4 d-flex flex-row justify-content-around">
                    <div className="bigrating d-flex flex-column">
                        <p style={{ fontFamily: "Roboto", fontWeight: "400", fontSize: "96px", lineHeight: "80px", letterSpacing: "0.25px", }}>4/5</p>

                        <div className="starrating d-flex m-2">
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "gray" }} />

                        </div>

                    </div>
                    <div className="progressbars d-flex flex-column">
                        <div class="fivestar d-flex flex-row">
                            <p style={{ fontWeight: "650", fontSize: "20px", lineHeight: "10px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>5</p>
                            <div className="progress-bar" style={{ width: "140px", height: "12px", backgroundColor: "#e0e0e0", marginLeft: "8px", borderRadius: "4px", overflow: "hidden" }}>
                                <div style={{ width: "40%", height: "100%", backgroundColor: "#FFD700" }}></div>
                            </div>
                        </div>
                        <div class="fourstar  d-flex flex-row">
                            <p style={{ fontWeight: "650", fontSize: "20px", lineHeight: "10px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>4</p>
                            <div className="progress-bar" style={{ width: "140px", height: "12px", backgroundColor: "#e0e0e0", marginLeft: "8px", borderRadius: "4px", overflow: "hidden" }}>
                                <div style={{ width: "90%", height: "100%", backgroundColor: "#FFD700" }}></div>
                            </div>

                        </div>
                        <div class="threestar  d-flex flex-row">
                            <p style={{ fontWeight: "650", fontSize: "20px", lineHeight: "10px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>3</p>
                            <div className="progress-bar" style={{ width: "140px", height: "12px", backgroundColor: "#e0e0e0", marginLeft: "8px", borderRadius: "4px", overflow: "hidden" }}>
                                <div style={{ width: "70%", height: "100%", backgroundColor: "#FFD700" }}></div>
                            </div>

                        </div>
                        <div class="twostar  d-flex flex-row">
                            <p style={{ fontWeight: "650", fontSize: "20px", lineHeight: "10px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>2</p>
                            <div className="progress-bar" style={{ width: "140px", height: "12px", backgroundColor: "#e0e0e0", marginLeft: "8px", borderRadius: "4px", overflow: "hidden" }}>
                                <div style={{ width: "70%", height: "100%", backgroundColor: "#FFD700" }}></div>
                            </div>

                        </div>
                        <div class="onestar  d-flex flex-row">
                            <p style={{ fontWeight: "650", fontSize: "20px", lineHeight: "10px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>1</p>
                            <div className="progress-bar" style={{ width: "140px", height: "12px", backgroundColor: "#e0e0e0", marginLeft: "8px", borderRadius: "4px", overflow: "hidden" }}>
                                <div style={{ width: "70%", height: "100%", backgroundColor: "#FFD700" }}></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="m-3 p-3 ratingprofiles d-flex flex-column">
                    <div className="firstprofile mb-4 d-flex flex-column">
                        <div className="profileinfo d-flex flex-row">
                            <img src="../Images/Ellipse 15.png" style={{ width: "25%", height: "25%" }} className="" alt="..." />
                            <div className="profilenameone d-flex flex-column m-4">
                                <p style={{ fontWeight: "650", fontSize: "20px", lineHeight: "10px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Emma</p>
                                <p style={{ fontWeight: "400", fontSize: "18px", lineHeight: "10px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>3 months ago</p>
                            </div>
                        </div>

                        <div className="starrating d-flex m-1">
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "FFD700" }} />
                            <p className="p-2" style={{ fontWeight: "500", fontSize: "18px", lineHeight: "10px", letterSpacing: "0.25px", fontFamily: "Roboto", color:"gray"}}>4.9</p>
                        </div>

                        <p style={{ fontWeight: "500", fontSize: "17px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>I recently had the pleasure of shopping at Sooprs.com, and am thrilled to share my experience</p>
                    </div>
                    <div className="secondprofile mb-4 d-flex flex-column">
                        <div className="profileinfo d-flex flex-row">
                            <img src="../Images/Ellipse 35.png" style={{ width: "25%", height: "25%" }} className="" alt="..." />
                            <div className="profilenameone d-flex flex-column m-4">
                                <p style={{ fontWeight: "650", fontSize: "20px", lineHeight: "10px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Emma</p>
                                <p style={{ fontWeight: "400", fontSize: "18px", lineHeight: "10px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>3 months ago</p>
                            </div>
                        </div>

                        <div className="starrating d-flex m-1">
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "FFD700" }} />
                            <p className="p-2" style={{ fontWeight: "500", fontSize: "18px", lineHeight: "10px", letterSpacing: "0.25px", fontFamily: "Roboto", color:"gray"}}>4.9</p>
                        </div>

                        <p style={{ fontWeight: "500", fontSize: "17px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>I recently had the pleasure of shopping at Sooprs.com, and am thrilled to share my experience</p>
                    </div>
                    <div className="thirdprofile mb-4 d-flex flex-column">
                        <div className="profileinfo d-flex flex-row">
                            <img src="../Images/Ellipse 36.png" style={{ width: "25%", height: "25%" }} className="" alt="..." />
                            <div className="profilenameone d-flex flex-column m-4">
                                <p style={{ fontWeight: "650", fontSize: "20px", lineHeight: "10px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Emma</p>
                                <p style={{ fontWeight: "400", fontSize: "18px", lineHeight: "10px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>3 months ago</p>
                            </div>
                        </div>

                        <div className="starrating d-flex m-1">
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "#FFD700" }} />
                            <FontAwesomeIcon className="p-1" icon={faStar} style={{ color: "FFD700" }} />
                            <p className="p-2" style={{ fontWeight: "500", fontSize: "18px", lineHeight: "10px", letterSpacing: "0.25px", fontFamily: "Roboto", color:"gray"}}>4.9</p>
                        </div>

                        <p style={{ fontWeight: "500", fontSize: "17px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>I recently had the pleasure of shopping at Sooprs.com, and am thrilled to share my experience</p>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default GigPageDetailed
