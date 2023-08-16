import React, { useState } from "react";
import '../styles/home.css'
import pic from '../images/Bachelorette_24.jpg'
import pic2 from '../images/IMG_5624.jpeg'
import pic3 from '../images/IMG_5705.jpeg'
import pic4 from '../images/IMG_6801.JPG'
import pic5 from '../images/IMG_6826.JPG'
import pic6 from '../images/IMG_6909copy.JPG'
import pic7 from '../images/IMG_6985.JPG'
import { Carousel } from "bootstrap";

const Home = () => {

    return (
        <div className="">
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
        </div>
    )
}

export default Home;