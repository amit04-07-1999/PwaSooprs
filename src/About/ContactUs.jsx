import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <div
                className=""
                style={{ backgroundColor: "#EEF9FD", borderRadius: "0 0 20px 20px" }}
            >
                <div className="container d-flex" style={{ height: "138px" }}>
                    <i className="bi bi-arrow-left-short d-flex justify-content-center align-items-center fs-1 fw-bold"></i>
                    <h1
                        className="m-auto"
                        style={{
                            fontWeight: "500",
                            fontSize: "1.2rem",
                            lineHeight: "1.2rem",
                            letterSpacing: "0.25px",
                        }}
                    >
                        Contact Us
                    </h1>
                </div>
            </div>



            <div className="">
                <div
                    style={{
                        boxShadow:
                            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px", backgroundColor: "#407BFF1A"
                    }}
                    className="Card rounded-2 my-3 mx-3 d-flex"
                >
                    <div style={{ height: "60px", width: "80px" }} className="ms-3 my-3 d-flex justify-content-center align-items-center bg-primary rounded-circle">
                        <i style={{ fontSize: "2.2rem", width: "2.2rem" }}
                            class="bi bi-envelope-fill text-white"></i>
                    </div>

                    <div className="d-flex mx-3 my-3 w-100 justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                            <p
                                className="m-0"
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: "500",
                                    lineHeight: "21px",
                                    letterSpacing: "0.25px",
                                    textAlign: "center",
                                }}
                            >
                                contact@sooprs.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="">
                <div
                    style={{
                        boxShadow:
                            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px", backgroundColor: "#407BFF1A"
                    }}
                    className="Card rounded-2 my-3 mx-3 d-flex"
                >
                    <div style={{ height: "60px", width: "80px" }} className="mx-4 my-3 d-flex justify-content-center align-items-center rounded-circle">
                        <i style={{ fontSize: "2.5rem", width: "2.5rem" }}
                            class="bi bi-map-fill text-primary"></i>
                    </div>

                    <div className="d-flex my-3 justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                            <p
                                className="m-0 pe-2"
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: "500",
                                    lineHeight: "20px",
                                    letterSpacing: "0.20px",
                                    textAlign: "start",
                                    // color: "#6B6B6B"
                                }}
                            >
                                BlueOne Square, Udyog Vihar Phase 4 Rd, Gurugram, Haryana 122016
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***************ContactUs Card****************** */}
            <div className="container">
                <div className="card mx-1">
                    <div className="row mx-3">
                        <div className="col d-flex justify-content-center align-items-center">
                            <img className='' style={{ width: "116px" }} src="./Images/contactUs.png" alt="contactUs" />
                        </div>

                        <div className="text-center">
                            <h1 style={{ fontSize: "20px", fontWeight: "600", lineHeight: "23px", letterSpacing: "0.25px" }} className=''>Get in Touch</h1>
                            <p style={{ fontSize: "13px", fontWeight: "600", lineHeight: "23px", letterSpacing: "0.25px", color: "#787878" }}>How can help I you? Please write down your query</p>
                        </div>

                        <div className="d-flex flex-column gap-3 my-2">
                            <label style={{ fontSize: "12px", fontWeight: "500", lineHeight: "23px", letterSpacing: "0.25px", }} htmlFor="name-client">Name</label>
                            <input style={{ backgroundColor: "#E6F1FF", height: "41px", borderRadius: "3px", border: "none" }} type="text" name="name" id="name-client" />

                            <label style={{ fontSize: "12px", fontWeight: "500", lineHeight: "23px", letterSpacing: "0.25px", }} htmlFor="email-client">Email</label>
                            <input style={{ backgroundColor: "#E6F1FF", height: "41px", borderRadius: "3px", border: "none" }} type="email" name="email" id="email-client" />

                            <label style={{ fontSize: "12px", fontWeight: "500", lineHeight: "23px", letterSpacing: "0.25px", }} htmlFor="phone-client">Phone</label>
                            <input style={{ backgroundColor: "#E6F1FF", height: "41px", borderRadius: "3px", border: "none" }} type="number" name="phone" id="phone-client" />

                            <label style={{ fontSize: "12px", fontWeight: "500", lineHeight: "23px", letterSpacing: "0.25px", }} htmlFor="massage-client">Massage</label>
                            <input style={{ backgroundColor: "#E6F1FF", height: "154px", borderRadius: "3px", border: "none" }} type="text" name="massage" id="massage-client" />

                            <button style={{ height: "54px", borderRadius: "3px", border: "none", fontWeight: "600", fontSize: "16px", lineHeight: "22px"}} className="btn btn-primary mb-2">Send Massage</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
