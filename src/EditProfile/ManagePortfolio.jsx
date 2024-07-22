import React, { useState } from "react";
import ProfileEditNav from "../components/ProfileEditNav";
import { FaImage } from "react-icons/fa";

const ManagePortfolio = () => {
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
      <ProfileEditNav backProfile="Manage your portfolio" />
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
              htmlFor="title"
              style={{ marginBottom: "5px", fontWeight: "500" }}
            >
              Title
            </label>
            <input
              style={{
                height: "55px",
                border: "1px solid rgba(166, 166, 166, 1)",
                borderRadius: "10px",
              }}
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter the title"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="description"
              style={{ marginBottom: "5px", fontWeight: "500" }}
            >
              Description
            </label>
            <textarea
              style={{
                height: "195px",
                border: "1px solid rgba(166, 166, 166, 1)",
                borderRadius: "10px",
              }}
              className="form-control"
              id="description"
              placeholder="Enter the description"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="imageUpload"
              style={{ marginBottom: "5px", fontWeight: "500" }}
            >
              Upload Image
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px dashed rgba(166, 166, 166, 1)",
                borderRadius: "10px",
                padding: "10px",
                height: "195px",
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
          <div className="form-group">
            <label
              htmlFor="link"
              style={{ marginBottom: "5px", fontWeight: "500" }}
            >
              Link
            </label>
            <input
              style={{
                height: "55px",
                border: "1px solid rgba(166, 166, 166, 1)",
                borderRadius: "10px",
              }}
              type="text"
              className="form-control"
              id="link"
              placeholder="Enter the link"
            />
          </div>
          <button
            style={{ height: "51px" }}
            type="submit"
            className="btn btn-primary mb-5"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManagePortfolio;
