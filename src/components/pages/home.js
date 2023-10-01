import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/home.css'
import pic1 from '../images/homepage1.jpg'
import pic2 from '../images/homepage2.jpg'
import pic3 from '../images/homepage3.jpg'
import ashleyPic from '../images/AshleyP2.jpeg'
import graphic4 from '../graphics/4.png'
import graphic5 from '../graphics/5.png'
import flower1 from '../graphics/1.png'

const Home = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imageElements = [pic1, pic2, pic3, ashleyPic, graphic4, graphic5, flower1];

        const imagePromises = imageElements.map((src) => {
            const image = new Image();
            image.src = src;
            return new Promise((resolve) => {
                image.onload = resolve;
            });
        });

        Promise.all(imagePromises).then(() => {
            // All images have loaded
            setImagesLoaded(true);
        });
    }, []);

    return (
        <div className="fade-in d-flex justify-content-center col-12" >
            {imagesLoaded ? (
                <div className="d-flex flex-column mb-5 align-items-center">
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
                    <div className="bgTeal col-12 d-flex flex-column justify-content-center align-items-center">
                        <p className="allura fs-2 welcome1">Welcome to Ashley Bohn Photography!</p>
                        <p className="gloock myLgText">I'D LOVE TO HEAR FROM YOU</p>
                        <p className="fs-5 welcome3 mb-2">For session availability please fill out this <Link className="formLink" to={'/contact'}>form</Link> and I will get back to you.</p>
                        <img src={graphic5}></img>
                    </div>
                    <div className="meetSection col-12 py-5 d-flex justify-content-center">
                        <div className="d-flex flex-column col-8">
                            <div className="d-flex justify-content-evenly align-items-center">
                                <div className="myPortrait z-0 col-3 d-flex" style={{ backgroundImage: `url(${ashleyPic})` }}>
                                    {/* <div className="myGraphic" style={{ backgroundImage: `url(${flower1})` }}></div> */}
                                </div>
                                <div className="d-flex flex-column z-0 align-items-center col-5">
                                    <h1 className="meetHeader col-6 text-center">Meet Ashley</h1>
                                    <p className="p-1 bgWhite myInfoText ">One time I ate a hot pocket, and it was so delicious that I ran back to Walmart to buy another package (because I ate the whole package). When
                                        I got to Walmart, I sprinted down the aisle and grabbed as many hotpocket boxes as my little arms could hold. As I sprinted to self-checkout, suddenly I felt the urge to share with everyone and bought everyone some hot pockets. Yum!</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="graphic4" style={{ backgroundImage: `url(${graphic4})` }}></div> */}
                    </div>
                    <div className="bgLightTeal d-flex justify-content-evenly align-items-center py-4 col-12">
                        <div className="d-flex justify-content-evenly align-items-center col-10">
                            <div className="d-flex align-items-center bModa">
                                <h1 className="myLgText fw-bold d-flex align-items-center">Professional Photo for your</h1>
                                <h1 className="myLgText fw-bold fst-italic">&nbsp;lifestyle</h1>
                            </div>
                            <Link className='col-2' to='/contact'>
                                <button className='bookBtn fs-2 btn btn-dark col-12'>
                                    Book Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="col-12 my-5 d-flex flex-column align-items-center">
                    <h1 className="myXLText allura">Welcome!</h1>
                    <h2 className="myLgText allura">Loading...</h2>
                </div>
            )}
        </div>
    )
}

export default Home;