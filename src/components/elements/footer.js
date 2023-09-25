import React from 'react';
import { Link } from 'react-router-dom';
import FBicon from '../graphics/FBIcon.png'
import IGicon from '../graphics/IGIcon.png'
import pinIcon from '../graphics/PinIcon.png'
import logo from '../graphics/logo.png'
import '../styles/footer.css'

const Footer = () => {



    return (
        <footer className='d-flex justify-content-center col-12'>
            <div className='d-flex col-10'>
                <div className='d-flex flex-column col-5 align-items-center justify-content-evenly'>
                    <p className='fs-3 col-8 mt-3'>Ashley Bohn is a lifestyle family photographer based in Mesa, Arizona</p>
                    <button className="bookBtn fs-3 my-3 btn btn-dark">Book Now</button>
                </div>
                <div className='d-flex flex-column align-items-center col-2'>
                    <div className="footerLogo" style={{ backgroundImage: `url(${logo})` }}></div>
                </div>
                <div className='d-flex flex-column col-5 justify-content-evenly align-items-center'>
                    <div className='d-flex justify-content-evenly col-8'>
                        <Link className='mediaIcon fbIcon' to='https://www.instagram.com/ashleybohnphotography/'></Link>
                        <Link className='mediaIcon igIcon' to='https://www.facebook.com/ashleybohnphotography/'></Link>
                        <Link className='mediaIcon pinIcon' to='https://www.pinterest.com/ashleybohnphotography/'></Link>
                    </div>
                    <p className='fs-3'>ashleybohnphotography@gmail.com</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;