import React, { useState } from "react";
import '../styles/home.css'
import pic from '../images/Bachelorette_24.jpg'
import pic2 from '../images/IMG_5624.jpeg'
import { Carousel } from "bootstrap";

const Home = () => {

    return (
        <div className="">
            <div id="carouselExampleIndicators" className="carousel slide col-5">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active myImgContainer" style={{ backgroundImage: `url(${pic})` }}></div>
                    <div className="carousel-item active myImgContainer" style={{ backgroundImage: `url(${pic2})` }}></div>
                    <div className="carousel-item active myImgContainer" style={{ backgroundImage: `url(${pic})` }}></div>
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