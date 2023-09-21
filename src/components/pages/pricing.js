import React, { useState } from "react";
import '../styles/pricing.css'

const Pricing = () => {

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="fst-italic my-5">Packages</h1>
            <div className="d-flex flex-wrap col-9">
                <div className="d-flex flex-column align-items-center justify-content-between col-4 mb-3">
                    <h2 className="col-8 fw-bolder fs-1 text-center border-dark border-bottom">FAMILIES</h2>
                    <ul className="d-flex flex-column justify-content-start listIncluded list-unstyled fs-4 col-5">
                        <li>1 location</li>
                        <li>1-2 hour session</li>
                        <li>60+ edited photos</li>
                    </ul>
                    <p className="fs-3">Investment: $100</p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-between col-4 mb-3">
                    <h2 className="col-8 fw-bolder fs-1 text-center border-dark border-bottom">COUPLES</h2>
                    <ul className="d-flex flex-column justify-content-start listIncluded list-unstyled fs-4 col-5">
                        <li>1 location</li>
                        <li>1-2 hour session</li>
                        <li>60+ edited photos</li>
                        <li>1 outfit change</li>
                    </ul>
                    <p className="fs-3">Investment: $100</p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-between col-4 mb-3">
                    <h2 className="col-8 fw-bolder fs-1 text-center border-dark border-bottom">GRADUATION</h2>
                    <ul className="d-flex flex-column justify-content-start listIncluded list-unstyled fs-4 col-5">
                        <li>1 location</li>
                        <li>1-2 hour session</li>
                        <li>60+ edited photos</li>
                        <li>1 outfit change</li>
                    </ul>
                    <p className="fs-3">Investment: $100</p>
                </div>
                <div className="d-flex flex-column align-items-center col-4 mb-3">
                    <h2 className="col-8 fw-bolder fs-1 text-center border-dark border-bottom">MATERNITY</h2>
                    <h3>What is included?</h3>
                    <ul className="d-flex flex-column justify-content-start listIncluded list-unstyled fs-4 col-5">
                        <li>1 location</li>
                        <li>1-2 hour session</li>
                        <li>60+ edited photos</li>
                        <li>1 outfit change</li>
                    </ul>
                    <p className="fs-3">Investment: $100</p>
                </div>
                <div className="d-flex flex-column align-items-center col-4 mb-3">
                    <h2 className="col-8 fw-bolder fs-1 text-center border-dark border-bottom">HEADSHOTS</h2>
                    <h3>What is included?</h3>
                    <ul className="d-flex flex-column justify-content-start listIncluded list-unstyled fs-4 col-5">
                        <li>1 location</li>
                        <li>1-2 hour session</li>
                        <li>60+ edited photos</li>
                    </ul>
                    <p className="fs-3">Investment: $100</p>
                </div>
                <div className="d-flex flex-column align-items-center col-4 mb-3">
                    <h2 className="col-8 fw-bolder fs-1 text-center border-dark border-bottom">BUSINESS</h2>
                    <h3>What is included?</h3>
                    <ul className="d-flex flex-column justify-content-start listIncluded list-unstyled fs-4 col-5">
                        <li>1 location</li>
                        <li>1-2 hour session</li>
                        <li>60+ edited photos</li>
                    </ul>
                    <p className="fs-3">Investment: $100</p>
                </div>


            </div>
        </div>
    )
}

export default Pricing;