import React from "react";
import ProfileEditNav from "../components/ProfileEditNav";

const ManagePassword = () => {
  return (
    <div>
      <ProfileEditNav backProfile="Manage Password" />
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
              htmlFor="currentPassword"
              style={{ marginBottom: "5px", fontWeight: "500" }}
            >
              Current Password
            </label>
            <input
              style={{
                height: "55px",
                border: "1px solid rgba(166, 166, 166, 1)",
                borderRadius: "10px",
              }}
              type="password"
              className="form-control"
              id="currentPassword"
              placeholder="Enter your current password"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="newPassword"
              style={{ marginBottom: "5px", fontWeight: "500" }}
            >
              New Password
            </label>
            <input
              style={{
                height: "55px",
                border: "1px solid rgba(166, 166, 166, 1)",
                borderRadius: "10px",
              }}
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="Enter your new password"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="confirmPassword"
              style={{ marginBottom: "5px", fontWeight: "500" }}
            >
              Confirm Password
            </label>
            <input
              style={{
                height: "55px",
                border: "1px solid rgba(166, 166, 166, 1)",
                borderRadius: "10px",
              }}
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your new password"
            />
          </div>
          <button style={{height:"51px"} }type="submit" className="btn btn-primary mb-5">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManagePassword;
