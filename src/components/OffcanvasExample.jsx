import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import './style.css'


function OffcanvasExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className='filter-1 bi bi-filter' onClick={handleShow}>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" style={{ height: "50rem", marginTop: "4rem", borderRadius: "2rem 0 0 2rem" }}>
        <Offcanvas.Header style={{ display: "flex", gap: "7rem" }} closeButton>
          <Offcanvas.Title style={{ fontWeight: "normal", color: "grey" }}>Reset</Offcanvas.Title>
          <Offcanvas.Title style={{ fontWeight: "bolder" }}>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div className='d-flex justify-content-between mt-4'>
              <h3>Category</h3>
              <p className='text-primary'>View All</p>
            </div>
            <div className='d-flex justify-content-around mt-3'>
              <p className='hover-effect'>UI/UX</p>
              <p className='hover-effect'>Web Design</p>
              <p className='hover-effect'>App Dev</p>
            </div>
          </div>
          <div>
            <hr />
            <div className='d-flex justify-content-between mt-4'>
              <h3>Skills</h3>
              <p className='text-primary'>View All</p>
            </div>
            <div className='d-flex justify-content-around mt-3'>
              <p className='hover-effect'>Python</p>
              <p className='hover-effect'>Bootstrap</p>
              <p className='hover-effect'>Jquery</p>
            </div>
          </div>
          <hr />
          <div>
            <div className='d-flex justify-content-between mt-4'>
              <h3>Verification</h3>
              {/* <p className='text-primary'>View All</p> */}
            </div>
            <div className='d-flex justify-content-around mt-3'>
              <p className='hover-effect'>All</p>
              <p className='hover-effect'>Verified</p>
              <p className=''></p>
            </div>
          </div>
          <div>
            <hr />
            <div className='d-flex justify-content-between mt-4'>
              <h3>Location</h3>
              <p className='text-primary'>View All</p>
            </div>
            <div className='d-flex justify-content-around mt-3'>
              <p className='hover-effect'>Delhi</p>
              <p className='hover-effect'>Pune</p>
              <p className='hover-effect'>Mumbai</p>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <Button style={{width:"30rem", height:"3rem"}} >Show 250 Results</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasExample;
