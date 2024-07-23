import React from "react";

const MultipleCards = () => {
  return (
    <>
      <div className="">
        <div
          style={{
            backgroundColor: "#EEF9FD",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
          className="Card rounded-2 my-3 mx-3 d-flex"
        >
          <div className="my-3 ">
            <i
              style={{ fontSize: "55px" }}
              className="bi bi-check-circle-fill text-primary mx-3"
            />
          </div>
          <div className="d-flex mx-3 my-3 d-flex flex-column justify-content-center">
            <p
              className="m-0"
              style={{
                fontSize: "0.8rem",
                fontWeight: "500",
                lineHeight: "19px",
              }}
            >
              Congratulations, Your bid for ABC Project has been approved
            </p>
            <p
              className="text-secondary m-0 p-0 mt-2"
              style={{
                fontSize: "0.6rem",
                fontWeight: "500",
                lineHeight: "19px",
              }}
            >
              3 hours ago
            </p>
          </div>

          <div>
            <li className="text-primary fs-5"></li>
          </div>
        </div>
      </div>
    </>
  )
}

const Notification = () => {
  return (
    <div className="">
      <div
        className=""
        style={{ backgroundColor: "#EEF9FD", borderRadius: "0 0 20px 20px" }}
      >
        <div className="container d-flex py-5">
          <i className="bi bi-arrow-left-short fs-1 fw-bold"></i>
          <h1
            className="m-auto"
            style={{
              fontWeight: "500",
              fontSize: "1.2rem",
              lineHeight: "1.2rem",
              letterSpacing: "0.25px",
            }}
          >
            Notification
          </h1>
        </div>
      </div>
      <MultipleCards />
      <MultipleCards />
      <MultipleCards />
      <MultipleCards />
    </div>
  );
};

export default Notification;
