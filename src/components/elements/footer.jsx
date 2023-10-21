import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FBicon from '../graphics/FBIcon.png'
import IGicon from '../graphics/IGIcon.png'
import pinIcon from '../graphics/PinIcon.png'
import logo from '../graphics/logo.png'
import '../styles/footer.css'

const Footer = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className='d-flex justify-content-center align-items-center my-2 col-12'>
            {isMobile ? (
                <div className='d-flex col-xl-12 col-12 justify-content-evenly align-items-center'>
                    <div className='d-flex justify-content-center align-items-center footerLogoContainer'>
                        <img src={logo} alt="logo" className="footerLogo" />
                    </div>
                    <div className='d-flex flex-column col-6 justify-content-evenly align-items-center'>
                        <div className='d-flex justify-content-evenly col-8'>
                            <Link className='mediaIcon fbIcon' to='https://www.instagram.com/ashleybohnphotography/'></Link>
                            <Link className='mediaIcon igIcon' to='https://www.facebook.com/ashleybohnphotography/'></Link>
                            <Link className='mediaIcon pinIcon' to='https://www.pinterest.com/ashleybohnphotography/'></Link>
                        </div>
                        <p>ashleybohn.photography@gmail.com</p>
                    </div>
                </div>
            ) : (
                <div className='d-flex col-12 justify-content-evenly'>
                    <div className='col-4 d-flex flex-column align-items-center justify-content-evenly'>
                        <p className='col-8 mt-3'>Ashley Bohn is a lifestyle family photographer based in Mesa, Arizona</p>
                        <Link className='col-6 my-3' to='/contact'>
                            <button className='bookBtn col-12' onClick={scrollToTop}>
                                Book Now
                            </button>
                        </Link>
                    </div>
                    <div className='d-flex justify-content-center align-items-center footerLogoContainer'>
                        <img src={logo} alt="logo" className="footerLogo" />
                    </div>
                    <div className='col-4 d-flex flex-column justify-content-evenly align-items-center'>
                        <div className='d-flex justify-content-evenly col-8'>
                            <Link className='mediaIcon fbIcon' to='https://www.instagram.com/ashleybohnphotography/'></Link>
                            <Link className='mediaIcon igIcon' to='https://www.facebook.com/ashleybohnphotography/'></Link>
                            <Link className='mediaIcon pinIcon' to='https://www.pinterest.com/ashleybohnphotography/'></Link>
                        </div>
                        <p className=''>ashleybohnphotography@gmail.com</p>
                    </div>
                </div>
            )
            }
        </footer>
    )
};

export default Footer;