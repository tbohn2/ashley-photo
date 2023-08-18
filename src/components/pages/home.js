import React, { useState } from "react";
import '../styles/home.css'
import pic from '../images/Bachelorette_24.jpg'
import pic2 from '../images/IMG_5624.jpeg'
import pic3 from '../images/IMG_5705.jpeg'
import pic4 from '../images/IMG_6801.JPG'
import pic5 from '../images/IMG_6826.JPG'
import pic6 from '../images/IMG_6909copy.JPG'
import pic7 from '../images/IMG_6985.JPG'
import ashleyPic from '../images/AshleyP2.jpeg'
import flower1 from '../graphics/1.png'
import { Carousel } from "bootstrap";

const Home = () => {

    return (
        <div className="d-flex flex-column align-items-center">
            <div id="carouselExampleIndicators" className="carousel slide col-12">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active myImgContainer" style={{ backgroundImage: `url(${pic})` }}></div>
                    <div className="carousel-item active myImgContainer" style={{ backgroundImage: `url(${pic2})` }}></div>
                    <div className="carousel-item active myImgContainer" style={{ backgroundImage: `url(${pic3})` }}></div>
                    <div className="carousel-item active myImgContainer" style={{ backgroundImage: `url(${pic4})` }}></div>
                    <div className="carousel-item active myImgContainer" style={{ backgroundImage: `url(${pic5})` }}></div>
                    <div className="carousel-item active myImgContainer" style={{ backgroundImage: `url(${pic6})` }}></div>
                    <div className="carousel-item active myImgContainer" style={{ backgroundImage: `url(${pic7})` }}></div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <div className="my-5 d-flex flex-column col-8">
                    <div className="d-flex justify-content-evenly align-items-center">
                        <div className="myPortrait z-0 col-3 d-flex" style={{ backgroundImage: `url(${ashleyPic})` }}>
                            <div className="myGraphic" style={{ backgroundImage: `url(${flower1})` }}></div>
                        </div>
                        <div className="d-flex flex-column align-items-center col-7">
                            <h1 className="meetHeader col-6 text-center">Meet Ashley</h1>
                            <p className="p-1 myInfoText">One time I ate a hot pocket, and it was so delicious that I ran back to Walmart to buy another package (because I ate the whole package). When
                                I got to Walmart, I sprinted down the aisle and grabbed as many hotpocket boxes as my little arms could hold. As I sprinted to self-checkout, suddenly I felt the urge to share with everyone and bought everyone some hot pockets. Yum!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-evenly align-items-center py-4 col-12 bg-secondary">
                <h1 className="fs-2">Professional Photo for your lifestyle</h1>
                <button className="bookBtn fs-2 btn btn-dark col-2">Book Now</button>
            </div>
        </div>
    )
}

export default Home;