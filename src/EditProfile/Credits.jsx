import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaWallet } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Credits = () => {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [totalCredits, setTotalCredits] = useState(50);
  const [active, setActive] = useState("All");

  const renderComponent = () => {
    switch (active) {
      case "All":
        return <div>All Transactions</div>;
      case "Credited":
        return <div>Credited Transactions</div>;
      case "Debited":
        return <div>Debited Transactions</div>;
      default:
        return null;
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addCredits = (amount) => {
    const credits = amount;
    setTotalCredits(totalCredits + credits);
    handleClose();
  };

  const handleAddCredits = () => {
    if (inputValue) {
      const amount = parseFloat(inputValue);
      if (!isNaN(amount)) {
        addCredits(amount);
      }
    }
  };

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
          margin: "4rem 0px 40px 0px",
        }}
      >
        <Link
          to="/editprofile"
          style={{ textDecoration: "none", color: "rgba(17, 16, 16, 1)" }}
        >
          <FaArrowLeft style={{ width: "21px", height: "21px" }} />
        </Link>
        <h3
          style={{
            width: "250px",
            height: "24px",
            fontWeight: "500",
            fontSize: "24px",
          }}
        >
          Add Credits
        </h3>
      </div>
      <div
        style={{
          width: "100%",
          height: "274px",
          borderRadius: "20px",
          background: "rgba(30, 30, 30, 1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <span
          style={{
            background: "rgba(255, 255, 255, 1)",
            width: "83px",
            height: "83px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaWallet
            style={{
              color: "rgba(0, 119, 255, 1)",
              width: "42.62px",
              height: "37.07px",
            }}
          />
        </span>
        <p style={{ fontSize: "20px", fontWeight: "400", lineHeight: "40px" }}>
          Total Credits
        </p>
        <p style={{ fontSize: "32px", fontWeight: "600", lineHeight: "20px" }}>
          {totalCredits}
        </p>
        <Button
          onClick={handleShow}
          style={{
            height: "44px",
            width: "169px",
            fontSize: "16px",
            fontWeight: "600",
            background: "rgba(64, 123, 255, 1)",
          }}
        >
          Add Credits
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header
            closeButton
            className="text-white gap-3"
            style={{ background: "rgba(64, 123, 255, 1)" }}
          >
            <FaArrowLeft
              style={{ width: "21px", height: "21px" }}
              onClick={handleClose}
            />
            <Modal.Title id="contained-modal-title-vcenter">
              Add Credits
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={{ fontWeight: "500" }}>
                  Amount (In Dollars)
                </Form.Label>
                <Form.Control
                  style={{
                    height: "55px",
                    border: "1px solid rgba(166, 166, 166, 1)",
                    borderRadius: "10px",
                    color: "rgba(107, 107, 107, 1)",
                  }}
                  type="number"
                  placeholder="Enter Amount"
                  value={inputValue}
                  onChange={handleInputChange}
                  autoFocus
                />
              </Form.Group>
              <p
                style={{
                  fontSize: "10px",
                  color: "rgba(64, 123, 255, 1)",
                  float: "right",
                }}
              >
                (US $1 = 5 Credits)
              </p>
            </Form>
            <div style={{ marginTop: "15%" }}>
              <p
                style={{
                  textAlign: "center",
                  color: "rgba(107, 107, 107, 1)",
                  fontWeight: "500",
                }}
              >
                OR
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "30px 0px 30px 0px",
              }}
            >
              <button
                style={{
                  width: "107px",
                  height: "49px",
                  border: "1px solid rgba(64, 123, 255, 1)",
                  borderRadius: "10px",
                  fontWeight: "500",
                }}
                onClick={() => addCredits(10)}
              >
                $10
              </button>
              <button
                style={{
                  width: "107px",
                  height: "49px",
                  border: "1px solid rgba(64, 123, 255, 1)",
                  borderRadius: "10px",
                  fontWeight: "500",
                }}
                onClick={() => addCredits(20)}
              >
                $20
              </button>
              <button
                style={{
                  width: "107px",
                  height: "49px",
                  border: "1px solid rgba(64, 123, 255, 1)",
                  borderRadius: "10px",
                  fontWeight: "500",
                }}
                onClick={() => addCredits(50)}
              >
                $50
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleAddCredits}
              style={{
                background: "rgba(64, 123, 255, 1)",
                height: "48px",
                width: "100%",
                fontWeight: "500",
                borderRadius: "10px",
              }}
            >
              Add Credits
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "30px",
          }}
        >
          <button
            onClick={() => setActive("All")}
            style={{
              backgroundColor: active === "All" ? "rgba(64, 123, 255, 1)" : "white",
              color: active === "All" ? "white" : "black",
              borderRadius: "50px",
              border: "none",
              padding: "10px 20px",
            }}
          >
            All
          </button>
          <button
            onClick={() => setActive("Credited")}
            style={{
              backgroundColor: active === "Credited" ? "rgba(64, 123, 255, 1)" : "white",
              color: active === "Credited" ? "white" : "black",
              borderRadius: "50px",
              border: "none",
              padding: "10px 20px",
            }}
          >
            Credited
          </button>
          <button
            onClick={() => setActive("Debited")}
            style={{
              backgroundColor: active === "Debited" ? "rgba(64, 123, 255, 1)" : "white",
              color: active === "Debited" ? "white" : "black",
              borderRadius: "50px",
              border: "none",
              padding: "10px 20px",
            }}
          >
            Debited
          </button>
        </div>
        <div style={{ marginTop: "20px" }}>{renderComponent()}</div>
      </div>
      <button
        type="submit"
        className="btn btn-primary mb-5"
        style={{
          height: "51px",
          width: "100%",
          fontWeight: "500",
          backgroundColor: "rgba(64, 123, 255, 1)",
        }}
      >
        Save
      </button>
    </div>
  );
};

export default Credits;
