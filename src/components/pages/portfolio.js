import React, { useState } from "react";
import '../styles/portfolio.css'
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

const Portfolio = () => {

    const portraitImages = [portfolio2, portfolio5, portfolio3, portfolio6, portfolio7, portfolio8, portfolio9, portfolio10]

    return (
        <div className="fade-in d-flex mt-5 justify-content-center">
            <div className="col-12 d-flex flex-wrap justify-content-center">
                <div className="portPortrait d-flex flex-column justify-content-between mx-5 my-3">
                    <img className="portLandscape" src={portfolio1} alt="portfolio1"></img>
                    <img className="portLandscape" src={portfolio4} alt="portfolio4"></img>
                </div>
                {portraitImages.map((src, index) => <img key={index} className="portPortrait mx-5 my-3" src={src} alt={src}></img>)}
                <div className="portPortrait d-flex flex-column justify-content-between mx-5 my-3">
                    <img className="portLandscape" src={portfolio11} alt="portfolio11"></img>
                    <img className="portLandscape" src={portfolio12} alt="portfolio12"></img>
                </div>
            </div>

        </div>
    )
}

export default Portfolio;