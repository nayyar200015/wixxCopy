import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer className='section8'>
            <div className="container text-white">
                <div className="row h-100">
                    <div className="col-md-4 parts">
                        <p className='text-uppercase'>nayyar abbas</p>
                        <address>
                            500 Terry Francois Street <br /> San Francisco, CA 94158
                        </address>
                        <div>
                            <span>Mail: <a href="#">info@mysite.com</a></span><br />
                            <span>Tel: <a href="#">123-456-7890</a></span>
                        </div>
                    </div>
                    <div className="col-md-4 parts d-none d-md-block">
                        <p className='text-uppercase'>menu</p>
                        <ul className='list-unstyled mb-0 p-0'>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Plans & Pricing</a></li>
                            <li><a href="#">Tools & Tips</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 parts">
                        <p className='text-uppercase'>socials</p>
                        <div>
                            <a href="#"><i className='fa fa-facebook text-white mr-3'></i></a>
                            <a href="#"><i className='fa fa-twitter text-white'></i></a>
                        </div>
                        <p>© 2023 by JAMES CONSULTING.
                            Proudly created with <a href="#" className='text-white'>Wix.com</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
