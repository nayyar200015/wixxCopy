import React from 'react';
import './style.css';

const abc = {

}
const Navbar = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            })
        });
    });
    return (
        <div className="section1 sticky-top" >
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navar navbar-expand-md navbar-dark d-md-flex">
                            <a href="#" className="navbar-brand text-uppercase mb-0">nayyar abbas</a>
                            <button className="navbar-toggler float-right" type='button' data-toggle="collapse" data-target="#mynavbar" aria-expanded="false">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="mynavbar">
                                <ul className="navbar-nav ml-auto text-center" id='ul'>
                                    <li className='nav-item'><a href="#about" className='nav-link'>About</a></li>
                                    <li className='nav-item'><a href="#" className='nav-link'>Projects</a></li>
                                    <li className='nav-item'><a href="#service" className='nav-link'>Services</a></li>
                                    <li className='nav-item'><a href="#" className='nav-link'>Plans & Pricing</a></li>
                                    <li className='nav-item'><a href="#" className='nav-link'>Tools & Tips</a></li>
                                    <li className='nav-item'><a href="#contact" className='nav-link'>Contact</a></li>
                                    <li className='nav-item'><a href="#" className='nav-link'><i className="fa fa-user-circle-o mr-2" aria-hidden="true"></i>
                                        Log In</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Navbar;
