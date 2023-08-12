import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/ashley_logo3.png'
import '../styles/header.css'

const Header = () => {
    return (
        <header className='border border-light bg-light d-flex flex-column align-items-center justify-content-center'>
            <div className='myImgBox border border-light bg-light d-flex flex-column align-items-center justify-content-center'>
                <img className='myImg' src={image}></img>
            </div>
            <nav className='border border-light navbar d-flex justify-content-evenly col-12'>
                <Link className='myLink nav-item fs-3 text-dark' to='/'>Home</Link>
                <Link className='myLink nav-item fs-3 text-dark' to='/'>Pricing</Link>
                <Link className='myLink nav-item fs-3 text-dark' to='/'>Contact</Link>
                <Link className='myLink nav-item fs-3 text-dark' to='/'>About Me</Link>

            </nav>
        </header>
    )
};

export default Header;