import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/ashley-logo2.png'
import '../styles/footer.css'

const Footer = () => {



    return (
        <footer className='d-flex mx-5'>
            <div className='d-flex flex-column col-4 align-items-center border border-dark'>
                <p>Ashley Bohn is a lifestyle family photographer based in Mesa, Arizona</p>

            </div>
            <div className='d-flex flex-column align-items-center col-4'>
                <div className="footerLogo border border-dark"></div>
            </div>
            <div></div>
        </footer>
    )
};

export default Footer;