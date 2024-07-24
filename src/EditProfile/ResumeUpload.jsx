import React, { useState } from "react";
import ProfileEditNav from '../components/ProfileEditNav'
import { FaImage } from "react-icons/fa";

const ResumeUpload = () => {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  return (
    <div>
     <ProfileEditNav  backProfile="Upload your resume" />
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
              htmlFor="imageUpload"
              style={{ marginBottom: "5px", fontWeight: "00" }}
            >
              Upload Resume
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px dashed rgba(166, 166, 166, 1)",
                borderRadius: "10px",
                padding: "10px",
                height: "337px",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  background: "rgba(217, 217, 217, 1)",
                  width: "47px",
                  height: "47px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaImage />
                </span>

                <input
                  type="file"
                  className="form-control-file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              

              <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
                {imagePreview ? "Change Image" : "Upload Image"}
              </label>
            </div>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{
                  marginTop: "10px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "10px",
                }}
              />
            )}
          </div>
          <button
            style={{ height: "51px", }}
            type="submit"
            className="btn btn-primary mb-5"
          >
            Upload Resume
          </button>
          </form>
      
    </div>
  )
}

export default ResumeUpload
