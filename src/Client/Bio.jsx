import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './style.css'


const Bio = () => {
  const [activeSection, setActiveSection] = useState('Company info'); // To manage which section is active

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Header />
      <div className='w-100' style={{ marginBottom: "5.5rem" }}>
        <div className='d-flex justify-content-center w-100 pt-3'>
          <img
            src="../Images/avtars.png"
            alt="avtar"
            style={{
              height: 200,
              width: 200,
            }}
          />
        </div>
        <h2 className='d-flex justify-content-center w-100 mt-3'>Leonardo</h2>
        <p className='d-flex justify-content-center w-100 mt-3'>
          <span style={{ color: '#0077FF', fontSize: 16 }}>Director at </span> ABC Firms
        </p>
        <div className="d-flex justify-content-center gap-2">
          <img
            src="../Images/rates.png"
            alt="rating"
            style={{ height: 20, width: 20 }}
          />
          <p>4.5/5</p>
        </div>
        <div className="p-3">
          <h5 className='fw-bold'>Bio</h5>
          <p>
            Hello! I’m John Doe, a passionate and skilled web developer with over 8 years of experience crafting dynamic, responsive, and user-friendly websites. With a deep understanding of both front-end and back-end development, I have the expertise to bring any digital vision to life.
          </p>
        </div>

        <div className="container" style={{ width: '100%' }}>
          <div className="d-flex justify-content-around">
            <div>
              <i className="bi bi-envelope-fill text-primary" style={{ color: '#0077FF' }} />
              <span style={{ fontSize: 14 }}> info@company.com</span>
            </div>
            <div>
              <i className="bi bi-telephone-fill text-primary" style={{ color: '#0077FF' }} />
              <span style={{ fontSize: 14 }}> 123456899</span>
            </div>
            <div>
              <i className="bi bi-geo-alt-fill text-primary" style={{ color: '#0077FF' }} />
              <span style={{ fontSize: 14 }}> New Delhi</span>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-around mt-4 ">
          <div >
            <button
              onClick={() => handleClick('Company info')}
              style={{ border: "none" }} className='hover-effect'
            >
              Company info
            </button>
          </div>
          <div>
            <button
              onClick={() => handleClick('Projects')}
              style={{ border: "none" }} className='hover-effect'
            >
              Projects
            </button>
          </div>
          <div>
            <button
              onClick={() => handleClick('Reviews')}
              style={{ border: "none" }} className='hover-effect'
            >
              Reviews
            </button>
          </div>
        </div>

        <div className='container mt-4'>
          {activeSection === 'Company info' && (
            <div className='container'>
              <h4>About Us</h4>
              <p>
                Welcome to [App Name], your ultimate solution for [briefly describe the app's primary function, e.g., "personal finance management," "fitness tracking," "task organization"]. Our mission is to [state the mission, e.g., "simplify your life by helping you manage your finances effortlessly"]. With our innovative features and user-friendly interface, we aim to provide an exceptional experience that meets all your needs.
              </p>
            </div>
          )}
          {activeSection === 'Projects' &&
            <div>
              <div className=" mt-5">
                <div className="card shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h2 className="h5 font-weight-bold">Need a food delivery app UI <br />  Design</h2>
                        <div className="d-flex align-items-center mt-1 gap-2">
                          <p className="text-muted ">Posted 5 mins ago </p>
                          <p><span className='text-primary gap-2'>•<i class="bi bi-geo-alt-fill" /></span> New Delhi</p>
                        </div>
                      </div>
                      <i class="bi bi-heart text-primary fs-1"></i>
                    </div>
                    <div className="mt-4">
                      <h3 className="h6 text-primary">Skills</h3>
                      <div className="d-flex justify-content-between mt-2">
                        <span className="bg-primary text-white rounded-5 px-2">UI Designing</span>
                        <span className="bg-primary text-white rounded-5 px-2">Web Designing</span>
                        <span className="bg-primary text-white rounded-5 px-2">UX Designing</span>
                      </div>
                    </div>
                    <p className="text-muted mt-4">
                      I am looking to develop a dynamic and user-friendly mobile application and am seeking skilled professionals to bring this vision to life. The app aims to provide a seamless and engaging
                      experience for users, combining functionality with an intuitive design.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-4 small">
                      <span className="text-dark">
                        <span className="text-primary">Budget: </span>$0 - $500
                      </span>
                      <span className="d-flex align-items-center text-dark">
                        <i class="bi bi-shield-fill-check text-primary"></i>
                        Payment Verified
                      </span>
                      <span className="text-dark">
                        <span className="text-primary">Bids: </span>4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-5">
                <div className="card shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h2 className="h5 font-weight-bold">Need a food delivery app UI <br />  Design</h2>
                        <div className="d-flex align-items-center mt-1 gap-2">
                          <p className="text-muted ">Posted 5 mins ago </p>
                          <p><span className='text-primary gap-2'>•<i class="bi bi-geo-alt-fill" /></span> New Delhi</p>
                        </div>
                      </div>
                      <i class="bi bi-heart text-primary fs-1"></i>
                    </div>
                    <div className="mt-4">
                      <h3 className="h6 text-primary">Skills</h3>
                      <div className="d-flex justify-content-between mt-2">
                        <span className="bg-primary text-white rounded-5 px-2">UI Designing</span>
                        <span className="bg-primary text-white rounded-5 px-2">Web Designing</span>
                        <span className="bg-primary text-white rounded-5 px-2">UX Designing</span>
                      </div>
                    </div>
                    <p className="text-muted mt-4">
                      I am looking to develop a dynamic and user-friendly mobile application and am seeking skilled professionals to bring this vision to life. The app aims to provide a seamless and engaging
                      experience for users, combining functionality with an intuitive design.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-4 small">
                      <span className="text-dark">
                        <span className="text-primary">Budget: </span>$0 - $500
                      </span>
                      <span className="d-flex align-items-center text-dark">
                        <i class="bi bi-shield-fill-check text-primary"></i>
                        Payment Verified
                      </span>
                      <span className="text-dark">
                        <span className="text-primary">Bids: </span>4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {activeSection === 'Reviews' &&
            <div>

              <div className="">
                <div className="d-flex align-items-center mb-4">
                  <span className="display-1 fw-bold text-primary">4/5</span>
                  <div className="d-flex align-items-center ms-4">
                    <span className="text-warning">★★★★★</span>
                    <span className="text-secondary">★</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="d-flex align-items-center">
                    <span className="text-secondary">5</span>
                    <div className="progress mx-2 w-100" style={{ height: '0.5rem' }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-secondary">25</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="text-secondary">4</span>
                    <div className="progress mx-2 w-100" style={{ height: '0.5rem' }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '45%' }}></div>
                    </div>
                    <span className="text-secondary">45</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="text-secondary">3</span>
                    <div className="progress mx-2 w-100" style={{ height: '0.5rem' }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '35%' }}></div>
                    </div>
                    <span className="text-secondary">35</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="text-secondary">2</span>
                    <div className="progress mx-2 w-100" style={{ height: '0.5rem' }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '5%' }}></div>
                    </div>
                    <span className="text-secondary">5</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="text-secondary">1</span>
                    <div className="progress mx-2 w-100" style={{ height: '0.5rem' }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '1%' }}></div>
                    </div>
                    <span className="text-secondary">1</span>
                  </div>
                </div>
              </div>



              <div className="card rounded-3 mt-5">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="rounded-circle me-3"
                      src="../Images/Ellipse 15.png"
                      alt="Customer photo"
                      style={{ width: '3rem', height: '3rem' }}
                    />
                    <div>
                      <h5 className="card-title mb-1">Emma</h5>
                      <p className="card-subtitle text-muted">3 months ago</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <span className="text-warning">★</span>
                      <span className="text-warning">★</span>
                      <span className="text-warning">★</span>
                      <span className="text-warning">★</span>
                      <span className="text-warning">★</span>
                    </div>
                    <span className="ms-2 text-muted">4.9</span>
                  </div>
                  <p className="card-text">
                    I recently had the pleasure of shopping at Sooprs.com, and am thrilled to share my experience.
                  </p>
                </div>
              </div>

              <div className="card rounded-3 mt-2">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="rounded-circle me-3"
                      src="../Images/Ellipse 15.png"
                      alt="Customer photo"
                      style={{ width: '3rem', height: '3rem' }}
                    />
                    <div>
                      <h5 className="card-title mb-1">Emma</h5>
                      <p className="card-subtitle text-muted">3 months ago</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <span className="text-warning">★</span>
                      <span className="text-warning">★</span>
                      <span className="text-warning">★</span>
                      <span className="text-warning">★</span>
                      <span className="">★</span>
                    </div>
                    <span className="ms-2 text-muted">4.9</span>
                  </div>
                  <p className="card-text">
                    I recently had the pleasure of shopping at Sooprs.com, and am thrilled to share my experience.
                  </p>
                </div>
              </div>

              <div className="card rounded-3 mt-2">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="rounded-circle me-3"
                      src="../Images/Ellipse 15.png"
                      alt="Customer photo"
                      style={{ width: '3rem', height: '3rem' }}
                    />
                    <div>
                      <h5 className="card-title mb-1">Emma</h5>
                      <p className="card-subtitle text-muted">3 months ago</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <span className="text-warning">★</span>
                      <span className="text-warning">★</span>
                      <span className="text-warning">★</span>
                      <span className="">★</span>
                      <span className="">★</span>
                    </div>
                    <span className="ms-2 text-muted">4.9</span>
                  </div>
                  <p className="card-text">
                    I recently had the pleasure of shopping at Sooprs.com, and am thrilled to share my experience.
                  </p>
                </div>
              </div>



            </div>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bio;
