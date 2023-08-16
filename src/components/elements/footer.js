import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/ashley_logo3.png'
// import '../styles/footer.css'

const Footer = () => {


    return (
        <footer className='footer d-flex justify-content-center border-top border-dark'>
            <img src={image}></img>
        </footer>
    )
};

export default Footer;