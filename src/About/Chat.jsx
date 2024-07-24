import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const MultipleChat = () => {
    return (
        <>
            <div className="">
                <div
                    style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}
                    className="Card rounded-2 my-3 mx-3 d-flex"
                >
                    <div className="my-3 mx-3">
                        <img
                            style={{ width: "3.5rem", height: "3.5rem" }}
                            src="../Images/img2.png"
                            alt=""
                        />
                    </div>

                    <div className="d-flex mx-3 my-3 w-100 justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                            <p
                                className="m-0"
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: "500",
                                    lineHeight: "19px",
                                }}
                            >
                                Jack
                            </p>
                            <p
                                className="text-secondary m-0 p-0 mt-2"
                                style={{
                                    fontSize: "0.8rem",
                                    fontWeight: "400",
                                    lineHeight: "19px",
                                }}
                            >
                                Time is running
                            </p>
                        </div>
                        <div className="d-flex flex-column text-end">
                            <p
                                className="text-end m-0"
                                style={{
                                    lineHeight: "2rem",
                                    fontSize: "0.7rem",
                                    fontWeight: "500",
                                    color: "#6B6B6B",
                                }}
                            >
                                3m
                            </p>
                            <p
                                className="text-white bg-primary text-center rounded-circle m-0"
                                style={{
                                    width: "1.2rem",
                                    height: "1.2rem",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                }}
                            >
                                4
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Chat = () => {
    return (
        <div className="">
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
                        Chat
                    </h1>
                </div>
            </div>
            <Link to="/personalchat" style={{textDecoration:"none"}}><MultipleChat /></Link>
            <MultipleChat />
            <MultipleChat />
            <MultipleChat />
            <Footer/>
        </div>
    );
};

export default Chat;
