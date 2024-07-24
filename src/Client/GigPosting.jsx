import React, { useRef, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import OffcanvasProjectPosting from '../components/OffcanvasProjectPosting';
import './style.css'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GigPosting = () => {



    const [currentStage, setCurrentStage] = useState(1);
    const [completionStatus, setCompletionStatus] = useState({
        stage1: false,
        stage2: false,
        stage3: false,
    });

    const handleNext = (stage) => {
        setCompletionStatus({ ...completionStatus, [stage]: true });
        setCurrentStage(currentStage + 1);
    };


    return (
        <div className='container'>
            {currentStage < 4 && (
                <>
                    <div className='d-flex gap-4 mt-5'>
                        {currentStage === 1 &&
                            <Link to="/home" style={{}}><i className="bi bi-arrow-left fs-2"></i></Link>}

                        {currentStage > 1 &&
                            <i className="bi bi-arrow-left fs-2" onClick={() => setCurrentStage(currentStage - 1)}></i>}

                        <div>
                            <span className='text-2 fs-2'>Provide details about<span style={{ color: "#0077FF" }}> your GIG </span></span>
                            <span className='text-mute'>Let's create the perfect brief together. The more details you include, the better</span>
                        </div>
                    </div>

                    <div className='d-flex justify-content-around mt-5'>
                        <div>
                            <h2 className={completionStatus.stage1 ? " d-flex justify-content-center border border-secondary p-3 rounded-5 bg-primary text-white" : "d-flex justify-content-center border border-secondary py-3 px-1 rounded-circle"}>{completionStatus.stage1 ? '✓' : '1'}</h2>
                            <p>Category</p>
                        </div>
                        <div className='line'></div>
                        <div>
                            <h2 style={{ width: "4rem" }} className={completionStatus.stage2 ? " d-flex justify-content-center border border-secondary p-3 rounded-5 bg-primary text-white" : "d-flex justify-content-center border border-secondary py-3 px-1 rounded-circle"}>{completionStatus.stage2 ? '✓' : '2'}</h2>
                            <p>Details</p>
                        </div>
                        <div className='line'></div>
                        <div>
                            <h2 style={{ width: "4rem" }} className={completionStatus.stage3 ? " d-flex justify-content-center border border-secondary p-3 rounded-5 bg-primary text-white" : "d-flex justify-content-center border border-secondary py-3 px-1 rounded-circle"}>{completionStatus.stage3 ? '✓' : '3'}</h2>
                            <p>Budget</p>
                        </div>
                    </div>

                    {currentStage === 1 && <Stage1Form onComplete={() => handleNext('stage1')} />}
                    {currentStage === 2 && <Stage2Form onComplete={() => handleNext('stage2')} />}
                    {currentStage === 3 && <Stage3Form onComplete={() => handleNext('stage3')} />}
                </>
            )}
            {currentStage === 4 && <SuccessMessage />}
            <Footer />
        </div>
    );
};

const Stage1Form = ({ onComplete }) => {

    const inputRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        onComplete();
    };
    const handelfiles = () => {
        inputRef.current.click()
    }


    return (
        <form className='mt-5' onSubmit={handleSubmit}>
            <div>
                <h6 className='fw-bold'>Project Title</h6>
                <input type='text' className='form-control' placeholder='Project Name' style={{ height: "3.5rem" }} />
            </div>
            <DropdownButton id="dropdown-basic-button" title="Select Category" className='mt-3'>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <input type='text' className='form-control mt-4' placeholder='Ctegory' style={{ height: "3.5rem" }} />
            <div className='mt-4'>
                <h6 className='fw-bold'>Technologies</h6>
                <input type='text' className='form-control ' placeholder='Technologies...' style={{ height: "3.5rem" }} />
            </div>
            <div className='mt-4'>
                <h6 className='fw-bold'>Tags</h6>
                <input type='text' className='form-control' placeholder='Tags' style={{ height: "3.5rem" }} />
            </div>
            <div className='mt-4'>
                <h6 className='fw-bold'>Gig Type</h6>
                <input type='text' className='form-control ' placeholder='Gig Type' style={{ height: "3.5rem" }} />
            </div>
            <div className='mt-4'>
                <h6 className='fw-bold'>Description</h6>
                <textarea typeof='text' className='form-control' rows="11" placeholder='Enter Desctiption...' />
            </div>
            <div className='mt-4'>
                <h6 className='fw-bold'>Photos</h6>
                <input type='file' ref={inputRef} hidden />
                <div style={{ border: "1px solid #8080804f", height: "20rem", borderRadius: "1rem", }} className='d-flex justify-content-center' onClick={handelfiles}>
                    <img src='../Images/Camera.png' height="70rem" style={{ marginTop: "8rem" }} />
                </div>
            </div>

            <button type="submit" className='form-control mt-4  bg-primary text-white' style={{ height: "4rem", marginBottom: "7rem" }}>Next</button>
        </form>
    );
};

const Stage2Form = ({ onComplete }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onComplete();
    };

    return (
        <form className='mt-4' onSubmit={handleSubmit}>
            <div className='mt-4'>
                <h6 className='fw-bold'>Delivery Days</h6>
                <input type='text' className='form-control' placeholder='Type here' style={{ height: "3.5rem" }} />
            </div>
            <div className='mt-4'>
                <h6 className='fw-bold'>Revision</h6>
                <input type='text' className='form-control' placeholder='Type here' style={{ height: "3.5rem" }} />
            </div>
            <div className='mt-4'>
                <h6 className='fw-bold'>Source File </h6>
                <input type='text' className='form-control' placeholder='Type here' style={{ height: "3.5rem" }} />
            </div>
            <div className='mt-4'>
                <h6 className='fw-bold text-primary'>Add Other Details </h6>
                <input type='text' className='form-control mt-4' placeholder='Type here' style={{ height: "3.5rem" }} />
                <input type='text' className='form-control mt-4' placeholder='Type here' style={{ height: "3.5rem" }} />
            </div>
            <button type="submit" className='form-control mt-5 bg-primary text-white' style={{ height: "4rem", marginBottom: "7rem" }}>Next</button>
        </form>
    );
};

const Stage3Form = ({ onComplete }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onComplete();
    };

    return (
        <form className='mt-3' onSubmit={handleSubmit}>
            <h6 className=' fw-bold'>What is your approx. budget ( in US Dollars)?</h6>

            <div className="d-flex flex-wrap gap-4 mt-4">
                <label className="d-flex align-items-center p-3 border rounded cursor-pointer" style={{ width: "40%" }}>
                    <input type="radio" name="range" className="form-check-input me-2" />
                    <span>0 - 500</span>
                </label>
                <label className="d-flex align-items-center p-3 border rounded cursor-pointer" style={{ width: "40%" }}>
                    <input type="radio" name="range" className="form-check-input me-2" />
                    <span>500 - 1,000</span>
                </label>
                <label className="d-flex align-items-center p-3 border rounded cursor-pointer" style={{ width: "40%" }}>
                    <input type="radio" name="range" className="form-check-input me-2" />
                    <span>1,000 - 2,000</span>
                </label>
                <label className="d-flex align-items-center p-3 border rounded cursor-pointer" style={{ width: "40%" }}>
                    <input type="radio" name="range" className="form-check-input me-2" />
                    <span>2,000 - 3,000</span>
                </label>
                <label className="d-flex align-items-center p-3 border rounded cursor-pointer" style={{ width: "40%" }}>
                    <input type="radio" name="range" className="form-check-input me-2" />
                    <span>Other</span>
                </label>
            </div>
            <div>
                <div className='mt-3'>Min. Budget
                    <input type='text' className='form-control' placeholder='Enter Min. Budget' style={{ height: "3.5rem" }} />
                </div>
                <div className='mt-2'>Max. Budget
                    <input type='text' className='form-control' placeholder='Enter Max. Budget' style={{ height: "3.5rem" }} />
                </div>
            </div>
            <button type="submit" className='form-control mt-3 bg-primary text-white' style={{ height: "4rem" }}>Complete</button>
        </form>
    );
};


const SuccessMessage = () => {
    return (
        <div className='text-center' style={{ marginTop: "10rem" }}>
            <div className='rounded-circle' style={{ height: "20rem", backgroundColor: "#D4E3FC", width: "20rem", marginLeft: "2.7rem" }}>
                <img src='../Images/Vector.png' style={{ marginTop: "8rem" }} />
            </div>
            <h1 className='mt-5' style={{ fontSize: "40px" }}>Success</h1>
            <p className='text-muted'>Your project has been posted successfully</p>
            <Link to="/home"><button className='form-control bg-primary text-white' style={{ height: "4rem", marginTop: "9rem" }}>Back to Home Screen</button></Link>
        </div>
    );
};

export default GigPosting;
