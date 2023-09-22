import React, { useState } from "react";
import '../styles/home.css'
import pic1 from '../images/homepage1.jpg'
import pic2 from '../images/homepage2.jpg'
import pic3 from '../images/homepage3.jpg'
import ashleyPic from '../images/AshleyP2.jpeg'
import flower1 from '../graphics/1.png'

const Home = () => {

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="homeGallery d-flex pt-5">
                <div className="mx-1 d-flex justify-content-center align-items-center homepageImgContainer">
                    <img className="homepageImg" src={pic1}></img>
                </div>
                <div className="mx-1 d-flex justify-content-center align-items-center homepageImgContainer">
                    <img className="homepageImg2 mb-5 pb-5" src={pic2}></img>
                </div>
                <div className="mx-1 d-flex justify-content-center align-items-center homepageImgContainer">
                    <img className="homepageImg" src={pic3}></img>
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <div className="d-flex flex-column col-8">
                    <div className="d-flex justify-content-evenly align-items-center">
                        <div className="myPortrait z-0 col-3 d-flex" style={{ backgroundImage: `url(${ashleyPic})` }}>
                            {/* <div className="myGraphic" style={{ backgroundImage: `url(${flower1})` }}></div> */}
                        </div>
                        <div className="d-flex flex-column align-items-center col-7">
                            <h1 className="meetHeader col-6 text-center">Meet Ashley</h1>
                            <p className="p-1 myInfoText">One time I ate a hot pocket, and it was so delicious that I ran back to Walmart to buy another package (because I ate the whole package). When
                                I got to Walmart, I sprinted down the aisle and grabbed as many hotpocket boxes as my little arms could hold. As I sprinted to self-checkout, suddenly I felt the urge to share with everyone and bought everyone some hot pockets. Yum!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-evenly align-items-center my-5 py-4 col-12 bg-secondary">
                <h1 className="fs-2">Professional Photo for your lifestyle</h1>
                <button className="bookBtn fs-2 btn btn-dark col-2">Book Now</button>
            </div>
        </div>
    )
}

export default Home;