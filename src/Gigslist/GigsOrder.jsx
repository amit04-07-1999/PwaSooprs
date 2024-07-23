import React, { useState } from 'react'
import { faArrowLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const GigsOrder = () => {

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handlePaymentMethodSelect = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    return (
        <div className="container">
            <div className="header d-flex flex-row pl-3 m-3 pb-4" style={{ paddingTop: "50px" }}>
                <Link to="/gigpagedetailed">
                    <FontAwesomeIcon icon={faArrowLeft} className="back-icon" style={{ fontSize: "23px", cursor: "pointer", color: "black" }} />
                </Link>

                <p className="" style={{ fontWeight: "650", fontSize: "21px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto", paddingLeft: "130px" }}>Order</p>
            </div>
            <div className='card m-3' style={{ width: "370px" }}>
                <img src="../Images/Rectangle 63.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className='fw-semibold text-primary'>UI/UX</p>
                    <h5 className="card-title mt-4" style={{ fontSize: "20px", lineHeight: "20px", fontWeight: "800", fontFamily: "Roboto" }}>Top Notch Design</h5>
                    <p className="card-text text-start" style={{ color: "#49454F", fontSize: "18px", fontFamily: "Roboto" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex gap-3'>
                            <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} alt="Profile" />
                            <p>By Alexander</p>
                        </div>
                        <p className="fw-semibold" style={{ color: "#49454F" }}>
                            <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                        </p>
                    </div>
                </div>
            </div>
            <div className="orderssection">
                <div className="orders">
                    <p className="p-3" style={{ fontWeight: "650", fontSize: "21px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Order Details</p>
                </div>
                <div className="seconddetails m-3 d-flex flex-column">
                    <div className="revisionsrow d-flex mt-3 flex-row justify-content-between">
                        <p style={{ lineHeight: "25px", letterSpacing: "0.25px", color: "black", fontFamily: "Roboto" }}>Revisions</p>

                        <p style={{ fontWeight: "500", lineHeight: "25px", letterSpacing: "0.25px", color: "#0077FF", fontFamily: "Roboto" }}>Unlimited</p>
                    </div>
                    <div className="deliverydatesrow d-flex flex-row justify-content-between">
                        <p style={{ lineHeight: "25px", letterSpacing: "0.25px", color: "black", fontFamily: "Roboto" }}>Delivery Dates</p>

                        <p style={{ fontWeight: "500", lineHeight: "25px", letterSpacing: "0.25px", color: "#0077FF", fontFamily: "Roboto" }}>7 Days</p>
                    </div>
                    <div className="screensrow d-flex flex-row justify-content-between">
                        <p style={{ lineHeight: "25px", letterSpacing: "0.25px", color: "black", fontFamily: "Roboto" }}>Number of screens</p>

                        <p style={{ fontWeight: "500", lineHeight: "25px", letterSpacing: "0.25px", color: "#0077FF", fontFamily: "Roboto" }}>10</p>
                    </div>
                    <div className="prototyperow d-flex flex-row justify-content-between">
                        <p style={{ lineHeight: "25px", letterSpacing: "0.25px", color: "black", fontFamily: "Roboto" }}>Prototype</p>

                        <FontAwesomeIcon icon={faCheckCircle} style={{ lineHeight: "25px", color: "0077FF" }} />
                    </div>
                    <div className="uidesignrow d-flex flex-row justify-content-between">
                        <p style={{ lineHeight: "25px", letterSpacing: "0.25px", color: "black", fontFamily: "Roboto" }}>UI Design</p>

                        <FontAwesomeIcon icon={faCheckCircle} style={{ lineHeight: "25px", color: "0077FF" }} />
                    </div>
                    <div className="sourcefilerow d-flex flex-row justify-content-between">
                        <p style={{ lineHeight: "25px", letterSpacing: "0.25px", color: "black", fontFamily: "Roboto" }}>Source File</p>

                        <FontAwesomeIcon icon={faCheckCircle} style={{ lineHeight: "25px", color: "0077FF" }} />
                    </div>

                </div>
            </div>
            <div className="paymentmethods">
                <div className="paytext">
                    <p className="p-3" style={{ fontWeight: "650", fontSize: "21px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Payment Method</p>
                </div>
                <div className="d-flex flex-column gap-3 m-2">
                    <label className={`payment-option d-flex align-items-center ${selectedPaymentMethod === 'creditCard' ? 'selected' : ''} justify-content-around`}
                        style={{
                            border: selectedPaymentMethod === 'creditCard' ? '2px solid #0077FF' : '2px solid #ccc',
                            borderRadius: '6px',
                            width: '390px',
                            height: '72px',
                            cursor: 'pointer',
                            padding: '5px'
                        }}>
                        <img src="../Images/image6.png" alt="Credit Card" style={{ width: '50px' }} />
                        <p style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '18px', paddingTop: "15px", paddingRight: "40px" }}>Credit Card/Debit Card</p>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="creditCard"
                            checked={selectedPaymentMethod === 'creditCard'}
                            onChange={handlePaymentMethodSelect}
                            style={{ marginRight: '15px' }}
                        />
                    </label>

                    <label className={`payment-option d-flex align-items-center ${selectedPaymentMethod === 'paypal' ? 'selected' : ''} justify-content-around`}
                        style={{
                            border: selectedPaymentMethod === 'paypal' ? '2px solid #0077FF' : '2px solid #ccc',
                            borderRadius: '6px',
                            width: '390px',
                            height: '72px',
                            cursor: 'pointer',
                        }}>
                        <img src="../Images/image7.png" alt="PayPal" style={{ width: '50px' }} />
                        <p style={{ margin: 0, fontFamily: 'Roboto', fontWeight: '500', fontSize: '18px', paddingTop: "5px", paddingRight: "140px" }}>PayPal</p>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="paypal"
                            checked={selectedPaymentMethod === 'paypal'}
                            onChange={handlePaymentMethodSelect}
                            style={{ marginRight: '15px' }}
                        />
                    </label>

                    <label className={`payment-option d-flex align-items-center ${selectedPaymentMethod === 'upi' ? 'selected' : ''} justify-content-around`}
                        style={{
                            border: selectedPaymentMethod === 'upi' ? '2px solid #0077FF' : '2px solid #ccc',
                            borderRadius: '6px',
                            width: '390px',
                            height: '72px',
                            cursor: 'pointer',
                            padding: '10px'
                        }}>
                        <img src="../Images/image5.png" alt="UPI" style={{ width: '50px', marginRight: '15px' }} />
                        <p style={{ margin: 0, fontFamily: 'Roboto', fontWeight: '500', fontSize: '18px', paddingTop: "5px", paddingRight: "180px" }}>UPI</p>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="upi"
                            checked={selectedPaymentMethod === 'upi'}
                            onChange={handlePaymentMethodSelect}
                            style={{ marginRight: '15px' }}
                        />
                    </label>
                </div>
            </div>
            <div className="moreinfo">
                <div className='infotext'>
                    <p className="p-3" style={{ color: "#49454F", fontWeight: "650", fontSize: "18px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>More info</p>
                </div>
                <div className="m-3 searchoption d-flex flex-row justify-content-between ">
                    <div style={{ border: "1px solid rgba(0,0,0,0.3)", borderRadius: "10px" }}>
                        <i className="bi bi-gift" style={{ position: 'absolute', padding: '10px', color: "#CFCFCF" }}></i>
                        <input className='search-bar form-control' placeholder='Enter Coupon Code' style={{ width: "290px", height: "45px", paddingLeft: "40px" }} />
                    </div>
                    <Button variant="primary" style={{ width: "70px" }}>Apply</Button>
                </div>
                <div className="pt-4 total d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="p-3" style={{ color: "#6B6B6B", fontWeight: "650", fontSize: "18px", lineHeight: "2px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Subtotal (1 item)</p>
                        <p className="p-3" style={{ color: "black", fontWeight: "650", fontSize: "18px", lineHeight: "2px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>₹ 2,000</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <p className="p-3" style={{ color: "#6B6B6B", fontWeight: "650", fontSize: "18px", lineHeight: "2px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Voucher</p>
                        <p className="p-3" style={{ color: "black", fontWeight: "650", fontSize: "18px", lineHeight: "2px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>-</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <p className="p-3" style={{ color: "#6B6B6B", fontWeight: "650", fontSize: "18px", lineHeight: "2px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>GST%</p>
                        <p className="p-3" style={{ color: "black", fontWeight: "650", fontSize: "18px", lineHeight: "2px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>18%</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <p className="p-3" style={{ color: "#6B6B6B", fontWeight: "650", fontSize: "18px", lineHeight: "2px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Discount</p>
                        <p className="p-3" style={{ color: "#40C700", fontWeight: "650", fontSize: "18px", lineHeight: "2px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>₹200</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <p className="p-3 mt-3" style={{ fontWeight: "650", fontSize: "24px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Total</p>
                        <p className="p-3 mt-4" style={{ color: "#407BFF", fontWeight: "650", fontSize: "24px", lineHeight: "2px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>₹1,800</p>
                    </div>
                    <button className="offerbutton m-4" style={{ background: "linear-gradient(90.01deg, #0077FF 0.01%, #004799 183.06%)", width: "360px", border: "none", height: "55px", borderRadius: "25px" }}>
                        <Link to="/gigpayment">
                        <p className="d-flex justify-content-center" style={{ color: "#FFFFFF", fontWeight: "700", fontSize: "18px", marginTop: "12px", lineHeight: "20px", letterSpacing: "0.25px", fontFamily: "Roboto" }}>Pay ₹1,800</p>
                        </Link>
                      </button>
                </div>
            </div>
        </div>
    )
}

export default GigsOrder
