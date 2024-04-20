import React, { useRef} from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../images/Logo.png'
import MenuIcon from '../../images/menu.png'
import CloseIcon from '../../images/close.png'

const Navbar = () => {

    const location = useLocation();
    const pathname = location.pathname;
  
   const menu = useRef();

   const toggleMenu = () => {
    menu.current.style.transform =  `translateX(0%)`;
   }

   const resetMenu = () => {
    menu.current.style.transform =  `translateX(100%)`;
   }

  return (
    <div className="navbar">
       <Link to='/'><img src={Logo} alt="" /></Link>
       <ul ref={menu}>
        <li className="close-icon"><img src={CloseIcon} alt="" onClick={resetMenu}/></li>
        <li class={(pathname==='/') ? 'home-link': ''}><Link to='/' class={(pathname==='/') ? 'navbar-link': ''}>Home</Link></li>
        <li class={(pathname==='/about') ? 'home-link': ''}><Link to='about' class={(pathname==='/about') ? 'navbar-link': ''}>About Us</Link></li>
        <li>Artists</li>
        <li>Events</li>
        <li>Contact Us</li>
       </ul>
       <img src={MenuIcon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </div>
  )
}

export default Navbar