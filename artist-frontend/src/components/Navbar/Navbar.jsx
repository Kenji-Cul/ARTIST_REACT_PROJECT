import React, { useRef} from 'react'
import './Navbar.css'
import Logo from '../../images/Logo.png'
import MenuIcon from '../../images/menu.png'
import CloseIcon from '../../images/close.png'

const Navbar = () => {
  
   const menu = useRef();

   const toggleMenu = () => {
    menu.current.style.transform =  `translateX(0%)`;
   }

   const resetMenu = () => {
    menu.current.style.transform =  `translateX(100%)`;
   }

  return (
    <div className="navbar">
       <img src={Logo} alt="" />
       <ul ref={menu}>
        <li className="close-icon"><img src={CloseIcon} alt="" onClick={resetMenu}/></li>
        <li class="home-link">Home</li>
        <li>About Us</li>
        <li>Artists</li>
        <li>Events</li>
        <li>Contact Us</li>
       </ul>
       <img src={MenuIcon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </div>
  )
}

export default Navbar