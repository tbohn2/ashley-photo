import React, { useState } from "react";
import '../styles/aboutMe.css'
import pic from '../images/aboutMePortrait.jpg'
import collage1 from '../images/collage1.png'
import collage2 from '../images/collage2.png'
import collage3 from '../images/collage3.png'

const AboutMe = () => {

    return (
        <div className="fade-in d-flex pt-5 bgTeal flex-column align-items-center">
            <div className="d-flex align-items-center">
                <h1 className="gloock d-flex align-items-center">MEET YOUR</h1>
                <h1 className="myXLText allura">&nbsp;Photographer</h1>
            </div>
            <div className="col-7 my-5">
                <div className="float-end  border aboutMePortrait" style={{ backgroundImage: `url(${pic})` }}></div>
                <p className="fs-1">
                    Hey there! I'm Ashley, your go-to photographer from the sunny deserts of Arizona. When I'm not behind the lens, you'll find me frolicking in the great outdoors, soaking up
                    that glorious Arizona sunshine, and getting my adrenaline fix hiking.
                    I am passionate about many things, but my true artistic expression comes to life through photography. It's my creative escape!
                    In between designing, catching rays, spending time with friends and family, burying my nose in a good book, and conquering hiking trails, I'm here to sprinkle some magic into your life.

                    Let's make your precious moments unforgettable together. I'm not just your photographer; I'm your buddy, your biggest cheerleader, and the guardian of your memories.
                    Because let's face it, a photograph frozen in time is a treasure that'll last a lifetime. Let's capture your story, one stunning frame at a time!
                </p>
            </div>
            <div className="col-10 my-5 d-flex justify-content-evenly">
                <img className="col-3 collage" src={collage2} />
                <img className="col-3 border border-dark collage" src={collage1} />
                <img className="col-3 collage" src={collage3} />
            </div>
        </div>
    )
}

export default AboutMe;