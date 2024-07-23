import React from 'react'
import ProfileEditNav from '../components/ProfileEditNav'


const BankDetails = () => {
  return (
    <div>
       <div>
      <ProfileEditNav backProfile="Add Your Bank Details" />
      <div>
        <form
          style={{
            position: "absolute",
            top: "450px",
            left: "20px",
            width: "390px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <div className="form-group">
            <label
              htmlFor="bankName"
              style={{ marginBottom: "5px", fontWeight: "500" }}
            >
              Bank Name
            </label>
            <input
              style={{
                height: "55px",
                border: "1px solid rgba(166, 166, 166, 1)",
                borderRadius: "10px",
              }}
              type="text"
              className="form-control"
              id="bankName"
              placeholder="Enter your bank name"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="bankAccountNumber"
              style={{ marginBottom: "5px", fontWeight: "500" }}
            >
              Bank Account Number
            </label>
            <input
              style={{
                height: "55px",
                border: "1px solid rgba(166, 166, 166, 1)",
                borderRadius: "10px",
              }}
              type="text"
              className="form-control"
              id="bankAccountNumber"
              placeholder="Enter your bank account number"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="bankIFSC"
              style={{ marginBottom: "5px", fontWeight: "500" }}
            >
              Bank IFSC Code
            </label>
            <input
              style={{
                height: "55px",
                border: "1px solid rgba(166, 166, 166, 1)",
                borderRadius: "10px",
              }}
              type="text"
              className="form-control"
              id="bankIFSC"
              placeholder="Enter your bank IFSC code"
            />
          </div>
          <button style={{ height: "51px" }} type="submit" className="btn btn-primary mb-5">
            Save
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default BankDetails
