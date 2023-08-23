import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/footer.css'

const Footer = () => {



    return (
        <footer className='d-flex mx-5'>
            <div className='d-flex flex-column col-4 align-items-center border border-dark'>
                <p>Ashley Bohn is a lifestyle family photographer based in Mesa, Arizona</p>
                <h3>Follow Me</h3>
                <Link to='https://www.instagram.com/ashleybohnphotography/'></Link>
                <Link to='https://www.instagram.com/ashleybohnphotography/'></Link>
            </div>
            <div className='d-flex flex-column align-items-center col-4'>
                <div className="footerLogo border border-dark"></div>
            </div>
            <div className='d-flex flex-column col-4 align-items-center border border-dark'>
                <button className="bookBtn fs-3 my-3 btn btn-dark">Book Now</button>
                <p>480-555-5555</p>
                <p>ashleybohnphotography@gmail.com</p>
            </div>
        </footer>
    )
};

export default Footer;