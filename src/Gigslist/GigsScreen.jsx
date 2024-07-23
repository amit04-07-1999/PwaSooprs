import React from 'react'
import Header from '../components/Header';
import "./GigsScreen.css";
import OffcanvasExample from '../components/OffcanvasExample';
import "../Client/style.css"
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GigsScreen = () => {

    const cardData = [
        { imgSrc: '../Images/gdlogo.png', text: 'Graphic Designer' },
        { imgSrc: '../Images/webdlogo.png', text: 'Web Developer' },
        { imgSrc: '../Images/profileLogo.png', text: 'SEO Specialist' },
    ];

    return (
        <>
            <Header />
            <div className='container mt-4 mb-5' style={{ marginLeft: "10px" }}>
                <div>
                    <p className=' gig-text'>
                        Find the Perfect <span style={{ color: "#0077FF" }}>Gig</span> for You!
                    </p>
                </div>
                <div className='d-flex gap-3' style={{ marginTop: "20px" }}>
                    <div>
                        <i className="bi bi-search" style={{ position: 'absolute', padding: '12px', color: "#CFCFCF" }}></i>
                        <input className='search-bar form-control' placeholder='Search Gigs' style={{ paddingLeft: "40px" }} />
                    </div>
                    {/* <button className='filter-1 bi bi-filter'></button> */}
                    <OffcanvasExample />

                </div>
                <div className='p-3 mt-5 exploreCard d-flex justify-content-between'>
                    <div className="textSection d-flex" style={{ flexDirection: "column" }}>
                        <p className="cardText">Explore Exciting & <span>Useful Gigs Near </span><span>You</span></p>
                        <button className="border-0" style={{ height: "4rem", width: "80%", fontSize: "16px", fontWeight: "700", borderRadius: "8px", backgroundColor: "#FA7733", color: "#FFFFFF" }} type="button">Explore</button>
                    </div>
                    <div>
                        <img src='../Images/gigslogo.png' className='' />
                    </div>
                </div>
                <div className="catSection mt-4">
                    <p className="cardText" style={{ color: "#000000", fontSize: "19px" }}>Categories</p>
                    <div className="catSectionContainer d-flex " style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                        {cardData.map((card, index) => (
                            <div key={index} className="catSectionItem d-flex align-items-center m-2" style={{ display: 'inline-block', marginRight: '15px' }}>
                                <div className="itemImg" style={{ borderRadius: "25px", width: "42px", height: "42px", backgroundColor: "lightblue", padding: "4px", marginRight: "10px" }}>
                                    <img src={card.imgSrc} alt={card.text} style={{ width: '100%', height: '100%', borderRadius: 'inherit' }} />
                                </div>
                                <p className="cardText mt-2" style={{ color: "#000000", fontSize: "17px" }}>
                                    {card.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-4 cardText">
                    <p style={{ color: "#000000" }}>Graphic <span style={{ color: "#407BFF" }}>Designing</span></p>
                    <div className="scrollable-container">
                        <div className='card'>
                          <Link to="/gigpagedetailed" style={{textDecoration:"none"}}>
                            <img src="../Images/Rectangle 63.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className='fw-semibold text-primary'>UI/UX</p>
                                <h5 className="card-title mt-4" style={{ fontSize: "26px", fontWeight: "800" }}>Top Notch Design</h5>
                                <p className="card-text text-start" style={{ color: "#49454F", fontSize: "20px" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-3'>
                                        <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} alt="Profile" />
                                        <p>By Alexander</p>
                                    </div>
                                    <p className="fw-semibold" style={{ color: "#49454F" }}>
                                        <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                    </p>
                                </div>
                            </div>
                            </Link>
                            </div>
                        <div className='card'>
                        <Link to="/gigpagedetailed" style={{textDecoration:"none"}}>
                            <img src="../Images/Rectangle 64.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className='fw-semibold text-primary'>UI/UX</p>
                                <h5 className="card-title mt-4" style={{ fontSize: "26px", fontWeight: "800" }}>Top Notch Design</h5>
                                <p className="card-text text-start" style={{ color: "#49454F", fontSize: "20px" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-3'>
                                        <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} alt="Profile" />
                                        <p>By Alexander</p>
                                    </div>
                                    <p className="fw-semibold" style={{ color: "#49454F" }}>
                                        <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                    </p>
                                </div>
                            </div>
                            </Link>
                            </div>
                            <div className='card'>
                          <Link to="/gigpagedetailed" style={{textDecoration:"none"}}>
                            <img src="../Images/Rectangle 63.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className='fw-semibold text-primary'>UI/UX</p>
                                <h5 className="card-title mt-4" style={{ fontSize: "26px", fontWeight: "800" }}>Top Notch Design</h5>
                                <p className="card-text text-start" style={{ color: "#49454F", fontSize: "20px" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-3'>
                                        <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} alt="Profile" />
                                        <p>By Alexander</p>
                                    </div>
                                    <p className="fw-semibold" style={{ color: "#49454F" }}>
                                        <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                    </p>
                                </div>
                            </div>
                            </Link>
                            </div>
                        <div className='card'>
                        <Link to="/gigpagedetailed" style={{textDecoration:"none"}}>
                            <img src="../Images/Rectangle 64.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className='fw-semibold text-primary'>UI/UX</p>
                                <h5 className="card-title mt-4" style={{ fontSize: "26px", fontWeight: "800" }}>Top Notch Design</h5>
                                <p className="card-text text-start" style={{ color: "#49454F", fontSize: "20px" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-3'>
                                        <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} alt="Profile" />
                                        <p>By Alexander</p>
                                    </div>
                                    <p className="fw-semibold" style={{ color: "#49454F" }}>
                                        <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                    </p>
                                </div>
                            </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                <div className="mt-4 cardText">
                    <p style={{ color: "#000000" }}>Web <span style={{ color: "#407BFF" }}>Designing</span></p>
                    <div className="scrollable-container">
                        <div className="card">
                        <Link to="/gigpagedetailed" style={{textDecoration:"none"}}>
                            <img src="../Images/Rectangle 63.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className='fw-semibold text-primary'>UI/UX</p>
                                <h5 className="card-title mt-4" style={{ fontSize: "26px", fontWeight: "800" }}>Top Notch Design</h5>
                                <p className="card-text text-start" style={{ color: "#49454F", fontSize: "20px" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-3'>
                                        <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} alt="Profile" />
                                        <p>By Alexander</p>
                                    </div>
                                    <p className="fw-semibold" style={{ color: "#49454F" }}>
                                        <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                    </p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="card">
                        <Link to="/gigpagedetailed" style={{textDecoration:"none"}}>
                            <img src="../Images/Rectangle 64.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className='fw-semibold text-primary'>UI/UX</p>
                                <h5 className="card-title mt-4" style={{ fontSize: "26px", fontWeight: "800" }}>Top Notch Design</h5>
                                <p className="card-text text-start" style={{ color: "#49454F", fontSize: "20px" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-3'>
                                        <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} alt="Profile" />
                                        <p>By Alexander</p>
                                    </div>
                                    <p className="fw-semibold" style={{ color: "#49454F" }}>
                                        <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                    </p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className='card'>
                          <Link to="/gigpagedetailed" style={{textDecoration:"none"}}>
                            <img src="../Images/Rectangle 63.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className='fw-semibold text-primary'>UI/UX</p>
                                <h5 className="card-title mt-4" style={{ fontSize: "26px", fontWeight: "800" }}>Top Notch Design</h5>
                                <p className="card-text text-start" style={{ color: "#49454F", fontSize: "20px" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-3'>
                                        <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} alt="Profile" />
                                        <p>By Alexander</p>
                                    </div>
                                    <p className="fw-semibold" style={{ color: "#49454F" }}>
                                        <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                    </p>
                                </div>
                            </div>
                            </Link>
                            </div>
                        <div className='card'>
                        <Link to="/gigpagedetailed" style={{textDecoration:"none"}}>
                            <img src="../Images/Rectangle 64.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className='fw-semibold text-primary'>UI/UX</p>
                                <h5 className="card-title mt-4" style={{ fontSize: "26px", fontWeight: "800" }}>Top Notch Design</h5>
                                <p className="card-text text-start" style={{ color: "#49454F", fontSize: "20px" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-3'>
                                        <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} alt="Profile" />
                                        <p>By Alexander</p>
                                    </div>
                                    <p className="fw-semibold" style={{ color: "#49454F" }}>
                                        <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                    </p>
                                </div>
                            </div>
                            </Link>
                            </div>
                    </div>

                </div>
                <div className="mt-4 cardText">
                    <p style={{ color: "#000000" }}>UI/UX <span style={{ color: "#407BFF" }}>Designing</span></p>
                    <div className="scrollable-container">
                        <div className="card">
                        <Link to="/gigpagedetailed" style={{textDecoration:"none"}}>
                            <img src="../Images/Rectangle 63.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className='fw-semibold text-primary'>UI/UX</p>
                                <h5 className="card-title mt-4" style={{ fontSize: "26px", fontWeight: "800" }}>Top Notch Design</h5>
                                <p className="card-text text-start" style={{ color: "#49454F", fontSize: "20px" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-3'>
                                        <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} alt="Profile" />
                                        <p>By Alexander</p>
                                    </div>
                                    <p className="fw-semibold" style={{ color: "#49454F" }}>
                                        <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                    </p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="card">
                        <Link to="/gigpagedetailed" style={{textDecoration:"none"}}>
                            <img src="../Images/Rectangle 64.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className='fw-semibold text-primary'>UI/UX</p>
                                <h5 className="card-title mt-4" style={{ fontSize: "26px", fontWeight: "800" }}>Top Notch Design</h5>
                                <p className="card-text text-start" style={{ color: "#49454F", fontSize: "20px" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-3'>
                                        <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} alt="Profile" />
                                        <p>By Alexander</p>
                                    </div>
                                    <p className="fw-semibold" style={{ color: "#49454F" }}>
                                        <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                    </p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className='card'>
                          <Link to="/gigpagedetailed" style={{textDecoration:"none"}}>
                            <img src="../Images/Rectangle 63.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className='fw-semibold text-primary'>UI/UX</p>
                                <h5 className="card-title mt-4" style={{ fontSize: "26px", fontWeight: "800" }}>Top Notch Design</h5>
                                <p className="card-text text-start" style={{ color: "#49454F", fontSize: "20px" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-3'>
                                        <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} alt="Profile" />
                                        <p>By Alexander</p>
                                    </div>
                                    <p className="fw-semibold" style={{ color: "#49454F" }}>
                                        <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                    </p>
                                </div>
                            </div>
                            </Link>
                            </div>
                        <div className='card'>
                        <Link to="/gigpagedetailed" style={{textDecoration:"none"}}>
                            <img src="../Images/Rectangle 64.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className='fw-semibold text-primary'>UI/UX</p>
                                <h5 className="card-title mt-4" style={{ fontSize: "26px", fontWeight: "800" }}>Top Notch Design</h5>
                                <p className="card-text text-start" style={{ color: "#49454F", fontSize: "20px" }}>Crafting user experiences that are both intuitive and visually stunning, specialize in transforming</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-3'>
                                        <img src='../Images/Ellipse 50.png' style={{ height: "2rem" }} alt="Profile" />
                                        <p>By Alexander</p>
                                    </div>
                                    <p className="fw-semibold" style={{ color: "#49454F" }}>
                                        <i className="text-warning bi bi-star-fill"></i> 4.5(56)
                                    </p>
                                </div>
                            </div>
                            </Link>
                            </div>
                    </div>
                    
                </div>
            </div>
            <Footer />

        </>
    )
}

export default GigsScreen

{/* <img src='../Images/gigslogo.png' className='headImg-1' /> */ }