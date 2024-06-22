import React, { useRef} from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../images/Logo.png'
import MenuIcon from '../../images/menu.png'
import CloseIcon from '../../images/close.png'
// import { logOut } from '../../features/logoutSlice'
// import { useDispatch  } from 'react-redux';

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

   let user = localStorage.getItem("userdetails");
  //  const dispatch = useDispatch();
   const logOut = () => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('userdetails')
    window.location.reload();
   }

  return (
    <div className="navbar">
       <Link to='/'><img src={Logo} alt="" /></Link>
       <ul ref={menu}>
        <li className="close-icon"><img src={CloseIcon} alt="" onClick={resetMenu}/></li>
        <li ><Link to='/' className={(pathname==='/') ? 'home-link': ''}>Home</Link></li>
        <li ><Link to='about' className={(pathname==='/about') ? 'home-link': ''} >About Us</Link></li>
        <li><Link to='artists' className={(pathname==='/artists') ? 'home-link': ''}>Artists</Link></li>
        <li><Link to="events" className={(pathname==='/events') ? 'home-link': ''}>Events</Link></li>
        {
          user ? (
            <span>
            <li><Link  onClick={() => logOut()}>Logout</Link></li>
            <li><Link to="artistprofile" className={(pathname==='/artistprofile') ? 'home-link': ''}>Profile</Link></li>
            </span>
          ) : (
            <li><Link to="register" className={(pathname==='/register') ? 'home-link': ''}>Register</Link></li>
          )
        }

        
        <li><Link to="contactus" className={(pathname==='/contactus') ? 'home-link': ''}>Contact Us</Link></li>
       </ul>
       <img src={MenuIcon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </div>
  )
}

export default Navbar