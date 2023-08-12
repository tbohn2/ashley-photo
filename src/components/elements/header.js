import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/ashley_logo3.png'
import '../styles/header.css'

const Header = () => {


    return (
        <header className='bg-light d-flex flex-column align-items-center justify-content-center'>
            <div className='myImgBox border border-light bg-light d-flex flex-column align-items-center justify-content-center'>
                <img className='myImg' src={image}></img>
            </div>
            <nav className='d-flex justify-content-evenly align-items-end col-11 mt-1'>
                <Link className='myLink fs-3 text-dark' to='/'>
                    <button className='myBtn btn btn-dark fs-3'>
                        Home
                    </button>
                </Link>
                <Link className='myLink fs-3 text-dark' to='/'>
                    <button className='myBtn btn btn-dark fs-3'>
                        Pricing
                    </button>
                </Link>
                <Link className='myLink fs-3 text-dark' to='/'>
                    <button className='myBtn btn btn-dark fs-3'>
                        Contact
                    </button>
                </Link>
                <Link className='myLink fs-3 text-dark' to='/'>
                    <button className='myBtn btn btn-dark fs-3'>
                        About Me
                    </button>
                </Link>

            </nav>
        </header>
    )
};

export default Header;