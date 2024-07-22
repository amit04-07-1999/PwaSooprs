import React from "react";
import ProfileEditNav from "../components/ProfileEditNav";

const ManageDetail = () => {
  return (
    <div>
      <ProfileEditNav backProfile="Manage Details" />
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
            <label htmlFor="name" style={{ marginBottom: "5px" ,fontWeight:"500"}}>Name</label>
            <input
              style={{ height: "55px",border:"1px solid rgba(166, 166, 166, 1)", borderRadius:"10px"}}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ marginBottom: "5px",fontWeight:"500" }}>Email</label>
            <input
            style={{ height: "55px",border:"1px solid rgba(166, 166, 166, 1)", borderRadius:"10px"}}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile" style={{ marginBottom: "5px",fontWeight:"500" }}>Mobile</label>
            <input
             style={{ height: "55px",border:"1px solid rgba(166, 166, 166, 1)", borderRadius:"10px"}}
              type="text"
              className="form-control"
              id="mobile"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city" style={{ marginBottom: "5px",fontWeight:"500" }}>City</label>
            <input
            style={{ height: "55px",border:"1px solid rgba(166, 166, 166, 1)", borderRadius:"10px"}}
              type="text"
              className="form-control"
              id="city"
              placeholder="Enter your city"
            />
          </div>
          <div className="form-group">
            <label htmlFor="shortBio" style={{ marginBottom: "5px",fontWeight:"500" }}>Short Bio</label>
            <textarea
             style={{ height: "55px",border:"1px solid rgba(166, 166, 166, 1)", borderRadius:"10px"}}
              className="form-control"
              id="shortBio"
              rows={2}
              placeholder="Write a short bio"
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="about" style={{ marginBottom: "5px",fontWeight:"500" }}>About</label>
            <textarea
             style={{ height: "55px",border:"1px solid rgba(166, 166, 166, 1)", borderRadius:"10px"}}
              className="form-control"
              id="about"
              rows={4}
              placeholder="Tell us more about yourself"
              defaultValue={""}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-5">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageDetail;
