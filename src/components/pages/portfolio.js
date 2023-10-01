import React, { useState } from "react";
import '../styles/portfolio.css'
import portfolio1 from '../images/portfolio1.jpg'
import portfolio2 from '../images/portfolio2.jpg'
import portfolio3 from '../images/portfolio3.jpg'
import portfolio4 from '../images/portfolio4.jpg'
import portfolio5 from '../images/portfolio5.jpg'

const Portfolio = () => {

    return (
        <div className="fade-in d-flex mt-5 justify-content-center">
            <div className="col-10 d-flex flex-wrap">
                <div className="portPortrait d-flex flex-column justify-content-between col-3 mx-5 my-3">
                    <img className="portLandscape" src={portfolio1} alt="portfolio1"></img>
                    <img className="portLandscape" src={portfolio4} alt="portfolio4"></img>
                </div>
                <img className="portPortrait col-3 mx-5 my-3" src={portfolio2} alt="portfolio2"></img>
                <img className="portPortrait col-3 mx-5 my-3" src={portfolio5} alt="portfolio5"></img>
                <img className="portPortrait col-3 mx-5 my-3" src={portfolio3} alt="portfolio3"></img>
            </div>

        </div>
    )
}

export default Portfolio;