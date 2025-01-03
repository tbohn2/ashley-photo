import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/home.css'
import pic1 from '../images/homepage1.jpg'
import pic2 from '../images/homepage2.jpg'
import pic3 from '../images/homepage3.jpg'
import portfolio3 from '../images/portfolio3.jpg'
import portfolio8 from '../images/portfolio8.jpg'
import ashleyPic from '../images/AshleyP2.jpeg'
import graphic4 from '../graphics/4.png'
import graphic5 from '../graphics/5.png'
import flower1 from '../graphics/1.png'
import graphic3 from '../graphics/3.png'

const Home = ({ setCurrent, setLoaded }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        setCurrent('home');
    }, []);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const imageElements = [pic1, pic2, pic3, portfolio3, portfolio8, ashleyPic, graphic4, graphic5, flower1];

        const imagePromises = imageElements.map((src) => {
            const image = new Image();
            image.src = src;
            return new Promise((resolve) => {
                image.onload = resolve;
            });
        });

        Promise.all(imagePromises).then(() => {
            // All images have loaded
            setLoaded('home');
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="fade-in">
            {isMobile ? (
                <div className="d-flex justify-content-center col-12" >
                    <div className="d-flex flex-column align-items-center col-12">
                        <div className="homeGallery d-flex flex-column align-items-center mb-3">
                            <div className="mb-3 mx-3 d-flex justify-content-center align-items-center mobileHomeImgContainer">
                                <img className="mobileHomeImg" src={pic3}></img>
                            </div>
                            <div className="d-flex justify-content-evenly mobileHomeImgContainer2">
                                <img className="mobileHomeImg2" src={portfolio3}></img>
                                <img className="mobileHomeImg2 align-self-end" src={portfolio8}></img>
                            </div>
                        </div>
                        <div className="bgTeal pt-3 col-12 d-flex flex-column justify-content-center align-items-center">
                            <p className="allura welcome1">Welcome to Ashley Bohn Photography!</p>
                            <p className="gloock welcome2">I'D LOVE TO HEAR FROM YOU</p>
                            <p className="welcome3 mb-2">For session availability please fill out this <Link className="formLink" to={'/contact'}>form</Link> and I will get back to you.</p>
                            <img src={graphic5}></img>
                        </div>
                        <div className="meetSection col-12 d-flex justify-content-center">
                            <div className="d-flex flex-column justify-content-center align-items-center col-12">
                                <div className="myPortrait z-1 col-8" style={{ backgroundImage: `url(${ashleyPic})` }}></div>
                                <div className="d-flex flex-column align-self-center my-5 z-1 align-items-center col-10">
                                    <div className="border border-dark myTextBorder1">
                                        <div className="border border-dark myTextBorder2 d-flex justify-content-center align-items-center">
                                            <div className="bgWhite myInfoText p-4 d-flex flex-column">
                                                <h1 className="meetHeader col-12 text-center">Hi, I'm Ashley!</h1>
                                                <p>
                                                    I am the girl behind the lens! I love capturing sweet and special moments with my camera. You can find me exploring AZ, planning my next vacay, or getting cozy at home with my hubby or a book in my hand.
                                                    I am excited to get to know you!
                                                </p>
                                                <Link className='col-10 col-sm-8 align-self-center' to='/aboutMe'>
                                                    <button className='fs-4 col-12 moreAbout' onClick={scrollToTop}>
                                                        More about me!
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='graphic3-container graphic3-1'>
                                <img className="graphic3" src={graphic3} alt='graphic3'></img>
                            </div>
                            <div className='graphic3-container graphic3-2'>
                                <img className="graphic3" src={graphic3} alt='graphic3'></img>
                            </div>
                            <div className='graphic3-container graphic3-3 z-0'>
                                <img className="graphic3" src={graphic3} alt='graphic3'></img>
                            </div>
                            <div className='graphic3-container graphic3-4'>
                                <img className="graphic3" src={graphic3} alt='graphic3'></img>
                            </div>
                        </div>
                        <div className="bgLightTeal professionalPhoto d-flex justify-content-evenly align-items-center mt-5 py-3 col-12">
                            <div className="d-flex flex-column justify-content-evenly align-items-center col-12">
                                <div className="d-flex justify-content-center align-items-center bModa col-12">
                                    <h2 className="fw-bold text-center">Professional Photo for your <span className="fst-italic">lifestyle</span></h2>
                                </div>
                                <Link className='col-5 my-2' to='/contact'>
                                    <button className='bookBtn fs-3 col-12' onClick={scrollToTop}>
                                        Book Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="d-flex justify-content-center col-12" >
                    <div className="d-flex flex-column align-items-center col-12">
                        <div className="homeGallery col-10 d-flex justify-content-evenly align-items-center">
                            <div className="d-flex justify-content-center align-items-center mx-3 homepageImgContainer">
                                <img className="homepageImg" src={pic1}></img>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mx-3 homepageImgContainer">
                                <img className="homepageImg2 mb-5 pb-5" src={pic2}></img>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mx-3 homepageImgContainer">
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
                            <div className="d-flex flex-column col-10">
                                <div className="d-flex justify-content-evenly align-items-end">
                                    <div className="myPortrait z-1 col-4 col-xl-3 d-flex" style={{ backgroundImage: `url(${ashleyPic})` }}></div>
                                    <div className="d-flex flex-column align-self-center z-1 align-items-center col-7 col-xl-6">
                                        <h1 className="meetHeader col-10 text-center">Hi, I'm Ashley!</h1>
                                        <div className="border border-dark myTextBorder1">
                                            <div className="border border-dark myTextBorder2 d-flex justify-content-center align-items-center">
                                                <p className="bgWhite myInfoText p-3 col-11 d-flex flex-column justify-content-center align-items-center">
                                                    I am the girl behind the lens! I love capturing sweet and special moments with my camera. You can find me exploring AZ, planning my next vacay, or getting cozy at home with my hubby or a book in my hand.
                                                    I am excited to get to know you!
                                                    <br></br>
                                                    <Link className='col-6 col-sm-8 my-5 align-self-center' to='/aboutMe'>
                                                        <button className='fs-4 col-12 moreAbout' onClick={scrollToTop}>
                                                            More about me!
                                                        </button>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='graphic3-container graphic3-1 z-1'>
                                <img className="graphic3" src={graphic3} alt='graphic3'></img>
                            </div>
                            <div className='graphic3-container graphic3-2'>
                                <img className="graphic3" src={graphic3} alt='graphic3'></img>
                            </div>
                            <div className='graphic3-container graphic3-3 z-0'>
                                <img className="graphic3" src={graphic3} alt='graphic3'></img>
                            </div>
                            <div className='graphic3-container graphic3-4'>
                                <img className="graphic3" src={graphic3} alt='graphic3'></img>
                            </div>
                        </div>
                        <div className="bgLightTeal d-flex justify-content-evenly align-items-center mt-5 py-5 col-12">
                            <div className="d-flex justify-content-evenly align-items-center col-12">
                                <div className="d-flex align-items-center bModa">
                                    <h1 className="fs-1 fw-bold d-flex align-items-center">Professional Photo for your</h1>
                                    <h1 className="fs-1 fw-bold fst-italic">&nbsp;lifestyle</h1>
                                </div>
                                <Link className='col-3' to='/contact'>
                                    <button className='fs-1 bookBtn col-12' onClick={scrollToTop}>
                                        Book Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Home;