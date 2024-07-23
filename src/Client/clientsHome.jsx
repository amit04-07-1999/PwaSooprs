import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import OffcanvasExample from '../components/OffcanvasExample';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';

const ClientsHome = () => {
    return (
        <>
            <Header />
            <div className='container mt-3' style={{marginBottom:"5.5rem"}}>
                <div>
                    <p className='text-2'>Find the Top <span style={{ color: "#0077FF" }}>Professionals</span> for you with super <span style={{ color: "#0077FF" }}>speed !</span></p>
                </div>
                <div className='d-flex gap-3'>
                    <div>
                        <i class="bi bi-search" style={{ position: 'absolute', padding: '12px', color: "#CFCFCF" }}></i>
                        <input className='search-bar form-control' />
                    </div>
                    {/* <button className='filter-1 bi bi-filter'></button> */}
                    <OffcanvasExample />

                </div>
                <div>
                    <img src='../Images/Screenshot_2.png' className='headImg-1' />
                </div>
                <div>
                    <div className='d-flex mt-5'>
                        <p className='text-2'>Our <span style={{ color: "#0077FF" }}>Professionals</span> </p>
                        <span style={{ color: "#0077FF" }}>See all</span>
                    </div>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="card" style={{ width: "25rem", marginLeft: "0.2rem" }}>
                                    <img src="../Images/image 3.png" style={{ backgroundColor: "#d1d1e0", height: "15rem" }} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Leonardo</h5>
                                        <p className="card-text" style={{ color: "#49454F" }}>UI/UX Designer</p>
                                        <div className='d-flex justify-content-between'>
                                            <p className="fw-semibold" style={{ color: "#49454F" }}>
                                                <i className="text-warning bi bi-star-fill"></i> 4.5/5
                                            </p>
                                            <i className="bi bi-arrow-right text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="card" style={{ width: "25rem", marginLeft: "0.2rem" }}>
                                    <img src="../Images/image 4.png" style={{ backgroundColor: "pink", height: "15rem" }} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Aleena</h5>
                                        <p className="card-text" style={{ color: "#49454F" }}>UI/UX Designer</p>
                                        <div className='d-flex justify-content-between'>
                                            <p className="fw-semibold" style={{ color: "#49454F" }}>
                                                <i className="text-warning bi bi-star-fill"></i> 4.5/5
                                            </p>
                                            <i className="bi bi-arrow-right text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="card" style={{ width: "25rem", marginLeft: "0.2rem" }}>
                                    <img src="../Images/image 3.png" style={{ backgroundColor: "#d1d1e0", height: "15rem" }} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Leonardo</h5>
                                        <p className="card-text" style={{ color: "#49454F" }}>UI/UX Designer</p>
                                        <div className='d-flex justify-content-between'>
                                            <p className="fw-semibold" style={{ color: "#49454F" }}>
                                                <i className="text-warning bi bi-star-fill"></i> 4.5/5
                                            </p>
                                            <i className="bi bi-arrow-right text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" style={{ backgroundColor: "grey", borderRadius: "5px" }} aria-hidden="true"></span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" style={{ backgroundColor: "grey", borderRadius: "5px" }} aria-hidden="true"></span>
                        </a>
                    </div>

                </div>
                <div className='mb-5'>
                    <div className='d-flex mt-5'>
                        <p className='text-2'>Checkout <span style={{ color: "#0077FF" }}>GIGS</span> </p>
                        <span style={{ color: "#0077FF" }}>See all</span>
                    </div>
                    <div id="carouselExampleControls1" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="card" style={{ width: "25rem", }}>
                                    <img src="../Images/Rectangle 63.png" style={{ backgroundColor: "#d1d1e0", height: "15rem" }} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className='fw-semibold text-primary'>UI/UX</p>
                                        <h5 className="card-title mt-4">Top Notch Design</h5>
                                        <p className="card-text text-start" style={{ color: "#49454F" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex gap-3'>
                                                <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} />
                                                <p>By Alexander</p>
                                            </div>
                                            <p className="fw-semibold" style={{ color: "#49454F" }}>
                                                <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="card" style={{ width: "25rem", }}>
                                    <img src="../Images/Rectangle 64.png" style={{ backgroundColor: "#d1d1e0", height: "15rem" }} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className='fw-semibold text-primary'>UI/UX</p>
                                        <h5 className="card-title mt-4">Top Notch Design</h5>
                                        <p className="card-text text-start" style={{ color: "#49454F" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex gap-3'>
                                                <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} />
                                                <p>By Alexander</p>
                                            </div>
                                            <p className="fw-semibold" style={{ color: "#49454F" }}>
                                                <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="carousel-item">
                                <div className="card" style={{ width: "25rem", }}>
                                    <img src="../Images/Rectangle 63.png" style={{ backgroundColor: "#d1d1e0", height: "15rem" }} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className='fw-semibold text-primary'>UI/UX</p>
                                        <h5 className="card-title mt-4">Top Notch Design</h5>
                                        <p className="card-text text-start" style={{ color: "#49454F" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex gap-3'>
                                                <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} />
                                                <p>By Alexander</p>
                                            </div>
                                            <p className="fw-semibold" style={{ color: "#49454F" }}>
                                                <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" style={{ backgroundColor: "grey", borderRadius: "5px" }} aria-hidden="true"></span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" style={{ backgroundColor: "grey", borderRadius: "5px" }} aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ClientsHome