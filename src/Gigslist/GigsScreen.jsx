import React from 'react'
import Header from '../components/Header';
import "./GigsScreen.css";
import OffcanvasExample from '../components/OffcanvasExample';
import "../Client/style.css"

const GigsScreen = () => {
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
                        <i class="bi bi-search" style={{ position: 'absolute', padding: '12px', color: "#CFCFCF" }}></i>
                        <input className='search-bar form-control' placeholder='Search Gigs' style={{ paddingLeft: "40px" }} />
                    </div>
                    {/* <button className='filter-1 bi bi-filter'></button> */}
                    <OffcanvasExample />

                </div>
                <div className='p-4 mt-5 exploreCard d-flex justify-content-between'>
                    <div className="textSection d-flex" style={{ flexDirection: "column" }}>
                        <p className="cardText">Explore Exciting & <span>Useful Gigs Near </span><span>You</span></p>
                        <button style={{ height: "80px", width: "80%", fontSize: "16px", fontWeight: "700", borderRadius: "8px", backgroundColor: "#FA7733", color: "#FFFFFF" }} type="button">Explore</button>
                    </div>
                    <div>
                        <img src='../Images/gigslogo.png' className='' />
                    </div>
                </div>
                <div className="catSection mt-4">
                    <p className="cardText" style={{ color: "#000000", fontSize: "19px" }}>Categories</p>
                    <div className="catSectionItems d-flex flex-row justify-content-between">
                        <div className="catSectionItem d-flex">
                            <div className="itemImg" style={{borderRadius:"25px", width:"42px", height:"42px",backgroundColor:"lightblue", padding:"4px", marginRight:"15px"}}>
                                <img src='../Images/gdlogo.png' className='' />
                            </div>
                            <p className='cardText' style={{color:"#000000", fontSize:"17px"}}>
                                    Graphic Designer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GigsScreen

{/* <img src='../Images/gigslogo.png' className='headImg-1' /> */ }