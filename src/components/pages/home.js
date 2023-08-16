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
            <div className="my-5 d-flex flex-column">
                <div className="d-flex justify-content-evenly align-items-center">
                    <div className="myPortrait col-3" style={{ backgroundImage: `url(${ashleyPic})` }}></div>
                    <div className="d-flex flex-column align-items-center col-5">
                        <h1 className="meetHeader col-6 text-center">Meet Ashley</h1>
                        <p className="p-1 myInfoText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Gravida quis blandit turpis cursus in hac habitasse platea. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Volutpat commodo sed egestas egestas. Vitae semper quis lectus nulla at volutpat diam. Donec enim diam vulputate ut pharetra sit amet aliquam id. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Eu volutpat odio facilisis mauris sit amet massa vitae. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Velit aliquet sagittis id consectetur purus ut.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;