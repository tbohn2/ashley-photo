import React, { useState, useEffect } from "react";
import '../styles/aboutMe.css'
import pic from '../images/aboutMePortrait.jpg'
import collage1 from '../images/collage1.png'
import collage2 from '../images/collage2.png'
import collage3 from '../images/collage3.png'

const AboutMe = ({ setCurrent, setLoaded }) => {

    useEffect(() => {
        setCurrent('aboutMe');
    }, []);

    useEffect(() => {
        const imageElements = [pic, collage1, collage2, collage3];

        const imagePromises = imageElements.map((src) => {
            const image = new Image();
            image.src = src;
            return new Promise((resolve) => {
                image.onload = resolve;
            });
        });

        Promise.all(imagePromises).then(() => {
            setLoaded('aboutMe');
        });
    }, []);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 1000);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? (
                <div className="fade-in d-flex pt-3 bgTeal flex-column align-items-center">
                    <div className="d-flex align-items-center">
                        <h1 className="gloock d-flex align-items-center">MEET YOUR</h1>
                        <h1 className="myXLText allura m-0">&nbsp;Photographer</h1>
                    </div>
                    <div className="col-10 d-flex flex-column align-items-center">
                        <img src={pic} alt="" className="float-end my-3 border aboutMePortrait" />
                        <p className="fs-3">
                            Hey there! I'm Ashley, your go-to photographer from the sunny deserts of Arizona. When I'm not behind the lens, you'll find me frolicking in the great outdoors, soaking up
                            that glorious Arizona sunshine, and getting my adrenaline fix hiking.
                            I am passionate about many things, but my true artistic expression comes to life through photography. It's my creative escape!
                            In between designing, catching rays, spending time with friends and family, burying my nose in a good book, and conquering hiking trails, I'm here to sprinkle some magic into your life.

                            Let's make your precious moments unforgettable together. I'm not just your photographer; I'm your buddy, your biggest cheerleader, and the guardian of your memories.
                            Because let's face it, a photograph frozen in time is a treasure that'll last a lifetime. Let's capture your story, one stunning frame at a time!
                        </p>
                    </div>
                    <div className="col-10 my-5 d-flex flex-column justify-content-evenly align-items-center">
                        <img className="col-9 my-3 collage" src={collage2} />
                        <img className="col-9 my-3 border border-dark collage" src={collage1} />
                        <img className="col-9 my-3 collage" src={collage3} />
                    </div>
                </div>

            ) : (
                <div className="fade-in d-flex mt-3 pt-5 bgTeal flex-column align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <h1 className="gloock d-flex align-items-center">MEET YOUR</h1>
                        <h1 className="myXLText allura m-0">&nbsp;Photographer</h1>
                    </div>
                    <div className="col-10 my-5">
                        <div className="float-end  border aboutMePortrait" style={{ backgroundImage: `url(${pic})` }}></div>
                        <p className="fs-2">
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
            )}
        </div>
    )
};

export default AboutMe;