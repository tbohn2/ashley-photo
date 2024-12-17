import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/pricing.css'
import pricingBG from '../images/pricingBG.jpg'

const PriceCard = ({ title, listItems, investment }) => (
    <div className="priceCard d-flex flex-column align-items-center bgTeal justify-content-between py-3">
        <h2 className="col-9 fw-bolder text-center border-dark border-bottom">{title}</h2>
        <ul className="d-flex flex-column justify-content-start listIncluded list-unstyled fs-4 col-9">
            {listItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <p className="fs-3">Investment: {investment}</p>
    </div>
);

const Pricing = ({ setCurrent, setLoaded }) => {

    const packages = [
        {
            title: "FAMILIES",
            listItems: ["1 location", "1-2 hour session", "60+ edited photos"],
            investment: "$100",
        },
        {
            title: "COUPLES",
            listItems: ["1 location", "1-2 hour session", "60+ edited photos", "1 outfit change"],
            investment: "$100",
        },
        {
            title: "GRADUATION",
            listItems: ["1 location", "1-2 hour session", "60+ edited photos", "1 outfit change"],
            investment: "$100",
        },
        {
            title: "MATERNITY",
            listItems: ["1 location", "1-2 hour session", "60+ edited photos", "1 outfit change"],
            investment: "$100",
        },
        {
            title: "HEADSHOTS",
            listItems: ["1 location", "1-2 hour session", "60+ edited photos"],
            investment: "$100",
        },
        {
            title: "BUSINESS",
            listItems: ["1 location", "1-2 hour session", "60+ edited photos"],
            investment: "$100",
        },
    ];

    useEffect(() => {
        setCurrent('pricing');
    }, []);

    useEffect(() => {
        const image = new Image();
        image.src = pricingBG;

        image.onload = () => {
            setLoaded('pricing');
        };
    }, [pricingBG]);


    return (
        <div className="fade-in d-flex flex-column mt-5 pb-3 align-items-center pricingBG" style={{ backgroundImage: `url(${pricingBG})` }}>
            <div className="d-flex align-items-center gloock bgGray packageHeader align-self-start myLgText col-8 col-sm-6 pe-5 text-end">
                <h1 className="col-10 my-1">P a c k a g e s</h1>
            </div>
            <div className="d-flex flex-wrap justify-content-evenly mt-5 col-12">
                {packages.map((packageInfo, index) => (
                    <PriceCard key={index} {...packageInfo} />
                ))}
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