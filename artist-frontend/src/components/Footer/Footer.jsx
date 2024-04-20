import React from 'react'
import MailImage from '../../images/mail.png'
import CallImage from '../../images/call.png'
import Copyright from '../../images/copyright.png'
import Logo from '../../images/Logo.png'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="first-container">
            <div>
                <img src={MailImage} alt="" />
                <p>0734527654</p>
            </div>
            <div>
                <img src={CallImage} alt="" />
                <p>artists@gmail.com</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum</p>
        </div>
        <div className="sitemap-container">
            <ul>
                <li>
                    <p>Sitemap</p>
                </li>
                <li><Link to='/' className="footer-link">Home</Link></li>
                <li><Link to='about' className="footer-link">About Us</Link></li>
                <li>Artists</li>
                <li>Events</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="copyrights-container">
          <Link to='/'><img src={Logo} alt="" /></Link>
          <p>Copyrights <img src={Copyright} alt="" className="copyrights"/></p>
        </div>
    </div>
  )
}

export default Footer