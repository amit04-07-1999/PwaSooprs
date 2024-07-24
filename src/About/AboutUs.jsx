import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import clientImg from '../../public/Images/img2.png';
import handimage from '../../public/Images/ServiceCommitment.png';
import handimage1 from '../../public/Images/fab.png';
import handimage2 from '../../public/Images/DataSecure.png';
import handimage3 from '../../public/Images/SecurePayment.png';
import handimage4 from '../../public/Images/FastService.png';
import handimage5 from '../../public/Images/DedicatedSupport.png';

const Testimonials = () => {
    return (
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
            <div>
                <img src={clientImg} alt="Client" />
                <div className="legend">
                    <h4>Great Work</h4>
                    <p>“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn't on our original designs.”</p>
                    <div className="star-rate">
                        <span>
                            <i className="fa fa-star filled"></i>
                            <i className="fa fa-star filled"></i>
                            <i className="fa fa-star filled"></i>
                            <i className="fa fa-star filled"></i>
                            <i className="fa fa-star filled"></i>
                        </span>
                    </div>
                    <div className="review-user">
                        <a href="javascript:void(0);"><img className="client-img" src={clientImg} alt="img" /></a>
                        <h6 className="px-3"><a href="javascript:void(0);">Gloria Weber</a><span>United States</span></h6>
                    </div>
                </div>
            </div>
            {/* Add more items as needed */}
        </Carousel>
    );
};

const AboutUs = () => {
    return (
        <div>
            <div className="w-100%" style={{ backgroundColor: "#EEF9FD", borderRadius: "0 0 20px 20px" }}>
                <div className="container d-flex" style={{ height: "138px" }}>
                    <i className="bi bi-arrow-left-short d-flex justify-content-center align-items-center fs-1 fw-bold"></i>
                    <h1 className="m-auto" style={{ fontWeight: "500", fontSize: "1.2rem", lineHeight: "1.2rem", letterSpacing: "0.25px" }}>About Us</h1>
                </div>
            </div>
            <div className="container">
                <h1 style={{ fontSize: "16px", fontWeight: "500", lineHeight: "20px", letterSpacing: "0.25px" }} className='text-center my-4'>
                    We Provide Best solutions For <span style={{ fontSize: "16px", fontWeight: "500", lineHeight: "20px", letterSpacing: "0.25px", color: "#0077FF" }}> Your Business </span>
                </h1>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img style={{ Height: "183px", width: "100%", borderRadius: "8px" }} src="./Images/Rectangle 98.svg" alt="" />
                    <p style={{ fontSize: "12px", fontWeight: "500", lineHeight: "25px", letterSpacing: "0.25px", color: "#6B6B6B" }} className=' text-center my-3'>
                        <span className='text-primary fw-medium'> Sooprs</span> is an online platform, with a mission of helping people or businesses to transform digitally. We have seen many issues in this field, as a lot of businesses want to transform themselves digitally but due to lack of relevant knowledge are not able to do so. Some got cheated or not able to understand how all of this works. We at Sooprs have only one mission in our mind to help our clients in their digital transformation journey. We first try to understand the needs of our clients, we suggest that they once go through a round of counselling where they can speak with our experts who have years of experience in their respective fields. Based on their discussion we suggest to them what is best for their business and based on that also give them the idea of how much budget will be needed for the project. And according to their budget we assign them experts, who will develop their product or service.
                    </p>
                </div>
                <div className="mt-1 mb-5 d-flex">
                    <div className="col-6">
                        <img className='img-fluid' src="./Images/Rectangle 99.svg" alt="" />
                    </div>
                    <div className="">
                        <div className="mb-1">
                            <img className='img-fluid' src="./Images/Rectangle 100.svg" alt="" />
                        </div>
                        <div className="">
                            <img className='img-fluid' src="./Images/Rectangle 101.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundColor: "#BCDCF4C9", borderRadius: "21px" }}>
                <div className="container ">
                    <div className="row">
                        <h1 className="mt-5 text-center">Why Choose <span className='text-primary fw-normal'> Us </span></h1>
                        <p className="text-center mt-1 mb-4">We prioritize your satisfaction through personalized solutions and a commitment to excellence.</p>
                        <div className='d-flex flex-wrap gap-2 justify-content-center mb-4'>
                            <MultiTimesCards img={handimage} title="Service Commitment" des="We deliver top-tier solutions, ensuring satisfaction through reliability, transparency, and a dedication to exceeding expectations." />
                            <MultiTimesCards img={handimage1} title="Fabulous Experience" des="Our intuitive interface offers an effortless journey, from browsing services to booking and beyond." />
                            <MultiTimesCards img={handimage2} title="Data Secure" des="We employ robust encryption, stringent access controls, and ongoing monitoring to safeguard your information." />
                            <MultiTimesCards img={handimage3} title="Secure Payment" des="Enjoy peace of mind with encrypted transactions, trusted gateways, and a commitment to safeguarding your information." />
                            <MultiTimesCards img={handimage4} title="Fast Service" des="We prioritize speed without compromising quality, ensuring your needs are met promptly and effectively" />
                            <MultiTimesCards img={handimage5} title="Dedicated Support" des="Our 24/7 customer service team is here to assist you every step of the way. Experience personalized assistance for a seamless journey" />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='my-4 text-center' >See Some <span className='text-primary fw-normal'>words </span></h1>
            <div className="container-fluid" style={{ backgroundColor: "#CAE4F633" }}>
                <Testimonials />
            </div>
        </div>
    );
};

export default AboutUs;
