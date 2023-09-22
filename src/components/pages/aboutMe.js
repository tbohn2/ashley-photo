import React, { useState } from "react";
import '../styles/aboutMe.css'
import pic from '../images/aboutMePortrait.jpg'

const AboutMe = () => {

    return (
        <div className="d-flex mt-5 flex-column align-items-center">
            <h1 className="ist-italic mt-5">MEET YOUR PHOTOGRAPHER</h1>
            <div className="col-7 my-5 border">
                <div className="float-end  border aboutMePortrait" style={{ backgroundImage: `url(${pic})` }}></div>
                <p className="fs-1">Hello! My name is Ashley! I am passionate about photography.
                    I have been doing it for years and am a pro dawg. Hello! My name is Ashley! I am passionate about photography. I have been doing it for years and am a pro dawg
                    Hello! My name is Ashley! I am passionate about photography. I have been doing it for years and am a pro dawg
                    Hello! My name is Ashley! I am passionate about photography. I have been doing it for years and am a pro dawg</p>
            </div>
        </div>
    )
}

export default AboutMe;