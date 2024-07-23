import React from 'react'
import ProfileEditNav from '../components/ProfileEditNav'

const AddExperience = () => {
  return (
    <div>
    <ProfileEditNav backProfile="Add Experience" />
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
            <label htmlFor="organization" style={{ marginBottom: "5px", fontWeight: "500" }}>Organization</label>
            <input
              style={{ height: "55px", border: "1px solid rgba(166, 166, 166, 1)", borderRadius: "10px" }}
              type="text"
              className="form-control"
              id="organization"
              placeholder="Enter organization name"
            />
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}} >
          <div className="form-group">
            <label htmlFor="dateFrom" style={{ marginBottom: "5px", fontWeight: "500" }}>From</label>
            <input
              style={{ height: "55px",border: "1px solid rgba(166, 166, 166, 1)", borderRadius: "10px" }}
              type="date"
              className="form-control"
              id="dateFrom"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateTo" style={{ marginBottom: "5px", fontWeight: "500" }}>To</label>
            <input
              style={{ height: "55px", border: "1px solid rgba(166, 166, 166, 1)", borderRadius: "10px" }}
              type="date"
              className="form-control"
              id="dateTo"
            />
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="designation" style={{ marginBottom: "5px", fontWeight: "500" }}>Designation</label>
            <input
              style={{ height: "55px", border: "1px solid rgba(166, 166, 166, 1)", borderRadius: "10px" }}
              type="text"
              className="form-control"
              id="designation"
              placeholder="Enter your designation"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-5" style={{height:"51px"}}>
            Save
          </button>
        </form>
      </div>
      
    </div>
  )
}

export default AddExperience
