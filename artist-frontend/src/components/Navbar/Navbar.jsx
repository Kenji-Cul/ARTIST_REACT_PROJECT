import React, { useEffect, useRef} from 'react'
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
    var w = window.innerWidth;
    if(w < 800){
      menu.current.style.transform =  `translateX(100%)`;
    }
    
   }

   const logOut = () => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('userdetails')
    window.location.reload();
    resetMenu();
   }


   let user = localStorage.getItem("userdetails");
   let usertoken = localStorage.getItem("userToken");
   if(usertoken){
     const res = (new Date()).getTime() > JSON.parse(usertoken).expDate;
     if(res){
       logOut()
     }
   }
  //  const dispatch = useDispatch();
   

  return (
    <div className="navbar">
       <Link to='/'><img src={Logo} alt="" /></Link>
       
       <ul ref={menu}>
        <li className="close-icon"><img src={CloseIcon} alt="" onClick={resetMenu}/></li>
        <li ><Link to='/' className={(pathname==='/') ? 'home-link': ''} onClick={resetMenu}>Home</Link></li>
        <li ><Link to='about' className={(pathname==='/about') ? 'home-link': ''} onClick={resetMenu}>About Us</Link></li>
        <li><Link to='artists' className={(pathname==='/artists') ? 'home-link': ''} onClick={resetMenu}>Artists</Link></li>
        <li><Link to="events" className={(pathname==='/events') ? 'home-link': ''} onClick={resetMenu}>Events</Link></li>
        {
          user ? (
            <span>
            <li><Link  onClick={() => logOut()} >Logout</Link></li>
            <li><Link to="artistprofile" className={(pathname==='/artistprofile') ? 'home-link': ''} onClick={resetMenu}>Profile</Link></li>
            </span>
          ) : (
            <span>
            <li><Link to="register" className={(pathname==='/register') ? 'home-link': ''} onClick={resetMenu}>Register</Link></li>
            <li><Link to="login" className={(pathname==='/login') ? 'home-link': ''} onClick={resetMenu}>Login</Link></li>
            </span>
          )
        }

        
        <li><Link to="contactus" className={(pathname==='/contactus') ? 'home-link': ''} onClick={resetMenu}>Contact Us</Link></li>
       </ul>
       <img src={MenuIcon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </div>
  )
}

export default Navbar