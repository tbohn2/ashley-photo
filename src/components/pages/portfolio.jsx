import React, { useState } from "react";
import '../styles/portfolio.css'
import Logo from '../graphics/logo.png'
import portfolio1 from '../images/portfolio1.jpg'
import portfolio2 from '../images/portfolio2.jpg'
import portfolio3 from '../images/portfolio3.jpg'
import portfolio4 from '../images/portfolio4.jpg'
import portfolio5 from '../images/portfolio5.jpg'
import portfolio6 from '../images/portfolio6.jpg'
import portfolio7 from '../images/portfolio7.jpg'
import portfolio8 from '../images/portfolio8.jpg'
import portfolio9 from '../images/portfolio9.jpg'
import portfolio10 from '../images/portfolio10.jpg'
import portfolio11 from '../images/portfolio11.jpg'
import portfolio12 from '../images/portfolio12.jpg'

const PortImage = ({ src }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <img
            src={src}
            alt=""
            className={`portPortrait mx-5 my-3 ${loaded ? 'loaded' : null}`}
            onLoad={() => setLoaded(true)}
        />
    )
}

const LandscapeImage = ({ src }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <img
            src={src}
            alt={src}
            className={`portLandscape ${loaded ? 'loaded' : null}`}
            onLoad={() => setLoaded(true)}
        />)
}

const Portfolio = ({ setCurrent }) => {

    setCurrent('portfolio');

    const portraitImages = [portfolio2, portfolio5, portfolio3, portfolio6, portfolio7, portfolio8, portfolio9, portfolio10]

    return (
        <div className="fade-in d-flex mt-5 justify-content-center">
            <div className="col-12 d-flex flex-wrap justify-content-center">
                <div className="portPortrait loaded d-flex flex-column justify-content-between mx-5 my-3">
                    <LandscapeImage src={portfolio1} />
                    <LandscapeImage src={portfolio4} />
                </div>
                {portraitImages.map((src, index) =>
                    <PortImage key={index} src={src} />)
                }
                <div className="portPortrait loaded d-flex flex-column justify-content-between mx-5 my-3">
                    <LandscapeImage src={portfolio11} />
                    <LandscapeImage src={portfolio12} />
                </div>
            </div>

        </div>
    )
}

export default Portfolio;