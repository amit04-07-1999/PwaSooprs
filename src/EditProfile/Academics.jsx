import React from 'react'
import ProfileEditNav from '../components/ProfileEditNav'

const Academics = () => {
  return (
    <div>
    <ProfileEditNav backProfile="Add Academics" />
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
            <label htmlFor="organization" style={{ marginBottom: "5px", fontWeight: "500" }}>Course Name</label>
            <input
              style={{ height: "55px", border: "1px solid rgba(166, 166, 166, 1)", borderRadius: "10px" }}
              type="text"
              className="form-control"
              id="organization"
              placeholder="Enter your Course Name"
            />
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}} >
          <div className="form-group">
            <label htmlFor="dateFrom" style={{ marginBottom: "5px", fontWeight: "500" }}>Year</label>
            <input
              style={{ height: "55px",width:"187px",border: "1px solid rgba(166, 166, 166, 1)", borderRadius: "10px" }}
              type="number"
              className="form-control"
              id="dateFrom"
              placeholder='Enter Year'
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateTo" style={{ marginBottom: "5px", fontWeight: "500" }}>Percentage/CGPA</label>
            <input
              style={{ height: "55px",width:"187px" ,border: "1px solid rgba(166, 166, 166, 1)", borderRadius: "10px" }}
              type="number"
              className="form-control"
              id="dateTo"
              placeholder='Enter CGPA'
            />
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="designation" style={{ marginBottom: "5px", fontWeight: "500" }}>School/College</label>
            <input
              style={{ height: "55px", border: "1px solid rgba(166, 166, 166, 1)", borderRadius: "10px" }}
              type="text"
              className="form-control"
              id="designation"
              placeholder="Enter your School/College Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="designation" style={{ marginBottom: "5px", fontWeight: "500" }}>University/Board Name</label>
            <input
              style={{ height: "55px", border: "1px solid rgba(166, 166, 166, 1)", borderRadius: "10px" }}
              type="text"
              className="form-control"
              id="designation"
              placeholder="Enter your University/Board Name"
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

export default Academics
