import React from 'react';
import './Fother.css'
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
    const year = new Date().getFullYear()
return (
    <footer className="footer">
        <hr />
        <div className="First_fother">
            <div className="">
                <h2>About Us</h2>
                <p>we are the csa student , have good day</p>
            </div>
            <div className="footer-section links">
                <h2>Quick Links</h2>
                <ul className='navList'> 
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Destription">Destription</Link></li>
                    <li><Link to="/Chat">Chat</Link></li>
                    <li><Link to="/Linux">Linux</Link></li>
                </ul>
            </div>
            <div className="contactFother">
                <h2>Contact Us</h2>
                <div className='ContactLink'>
                    <Link to="https://www.facebook.com/ComputerScienceAutomation"><FaFacebookF/></Link>
                    <Link to='https://discord.gg/j9C3779ZMA'><FaDiscord/></Link>
                </div>
            </div>
        </div>
        <div className="copy">
            <p> &copy; {year} Company Name. All rights reserved.</p>
        </div>
    </footer>
);
};

export default Footer;