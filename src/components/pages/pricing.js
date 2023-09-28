import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/pricing.css'
import pricingBG from '../images/pricingBG.jpg'

const Pricing = () => {

    return (
        <div className="d-flex flex-column mt-5 pb-3 align-items-center pricingBG" style={{ backgroundImage: `url(${pricingBG})` }}>
            <div className="d-flex align-items-center gloock bgGray packageHeader align-self-start myLgText col-6 pe-5 text-end">
                <h1 className="col-10 my-1">P a c k a g e s</h1>
            </div>
            <div className="d-flex flex-wrap justify-content-evenly mt-5 col-9">
                <div className="priceCard d-flex flex-column align-items-center bgTeal justify-content-between col-3 py-3 my-5 mx-3">
                    <h2 className="col-9 fw-bolder fs-1 text-center border-dark border-bottom">FAMILIES</h2>
                    <ul className="d-flex flex-column justify-content-start listIncluded list-unstyled fs-4 col-6">
                        <li>1 location</li>
                        <li>1-2 hour session</li>
                        <li>60+ edited photos</li>
                    </ul>
                    <p className="fs-3">Investment: $100</p>
                </div>
                <div className="priceCard d-flex flex-column align-items-center bgTeal justify-content-between col-3 py-3 my-5 mx-3">
                    <h2 className="col-9 fw-bolder fs-1 text-center border-dark border-bottom">COUPLES</h2>
                    <ul className="d-flex flex-column justify-content-start listIncluded list-unstyled fs-4 col-6">
                        <li>1 location</li>
                        <li>1-2 hour session</li>
                        <li>60+ edited photos</li>
                        <li>1 outfit change</li>
                    </ul>
                    <p className="fs-3">Investment: $100</p>
                </div>
                <div className="priceCard d-flex flex-column align-items-center bgTeal justify-content-between col-3 py-3 my-5 mx-3">
                    <h2 className="col-9 fw-bolder fs-1 text-center border-dark border-bottom">GRADUATION</h2>
                    <ul className="d-flex flex-column justify-content-start listIncluded list-unstyled fs-4 col-6">
                        <li>1 location</li>
                        <li>1-2 hour session</li>
                        <li>60+ edited photos</li>
                        <li>1 outfit change</li>
                    </ul>
                    <p className="fs-3">Investment: $100</p>
                </div>
                <div className="priceCard d-flex flex-column align-items-center bgTeal justify-content-between col-3 py-3 my-5 mx-3">
                    <h2 className="col-9 fw-bolder fs-1 text-center border-dark border-bottom">MATERNITY</h2>
                    <h3>What is included?</h3>
                    <ul className="d-flex flex-column justify-content-start listIncluded list-unstyled fs-4 col-6">
                        <li>1 location</li>
                        <li>1-2 hour session</li>
                        <li>60+ edited photos</li>
                        <li>1 outfit change</li>
                    </ul>
                    <p className="fs-3">Investment: $100</p>
                </div>
                <div className="priceCard d-flex flex-column align-items-center bgTeal justify-content-between col-3 py-3 my-5 mx-3">
                    <h2 className="col-9 fw-bolder fs-1 text-center border-dark border-bottom">HEADSHOTS</h2>
                    <h3>What is included?</h3>
                    <ul className="d-flex flex-column justify-content-start listIncluded list-unstyled fs-4 col-6">
                        <li>1 location</li>
                        <li>1-2 hour session</li>
                        <li>60+ edited photos</li>
                    </ul>
                    <p className="fs-3">Investment: $100</p>
                </div>
                <div className="priceCard d-flex flex-column align-items-center bgTeal justify-content-between col-3 py-3 my-5 mx-3">
                    <h2 className="col-9 fw-bolder fs-1 text-center border-dark border-bottom">BUSINESS</h2>
                    <h3>What is included?</h3>
                    <ul className="d-flex flex-column justify-content-start listIncluded list-unstyled fs-4 col-6">
                        <li>1 location</li>
                        <li>1-2 hour session</li>
                        <li>60+ edited photos</li>
                    </ul>
                    <p className="fs-3">Investment: $100</p>
                </div>
            </div>
            <div className="col-12 pb-5 d-flex justify-content-center">
                <Link className='fs-3 col-6 btn btn-light text-dark' to='/contact'>
                    Book Now
                </Link>
            </div>
        </div>
    )
}

export default Pricing;