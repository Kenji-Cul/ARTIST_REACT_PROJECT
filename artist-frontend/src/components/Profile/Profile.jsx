import React from 'react'
import Image from '../../images/featured-1.jpg'
import './Profile.css';

const Profile = () => {
  let user = localStorage.getItem("userdetails");
  let userdata = JSON.parse(user);
 
  return ( 
  <div className="profile-parent-container">
      <h3>Artist Profile</h3>
       <div className="profile-container">
          <img src={Image} alt="" />
          <h4>{userdata.name}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliquavelit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua</p>
       </div>
  </div>
  )
}

export default Profile