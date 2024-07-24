
import React from "react";

const ProfessionalHeader = () => {

  return (
    <div>
        <div className="d-flex justify-content-between p-1 mt-2">
          <i class="bi bi-arrow-left-short" style={{fontSize:"35px"}}></i>
          <p className="mt-3" style={{fontSize:"17px", fontWeight:"500"}}>Professional Details</p>
          <i class="bi bi-bell-fill text-primary mt-3" style={{fontSize:"22px"}}></i>
      </div>
    </div>
  );
};

export default ProfessionalHeader;
