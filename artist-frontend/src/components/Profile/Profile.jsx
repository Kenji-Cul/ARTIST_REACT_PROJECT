import React from 'react'
import Image from '../../images/featured-1.jpg'
import './Profile.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledSpan = styled.span`
color: #ffffff!important;
`;

const Profile = () => {
  let user = localStorage.getItem("userdetails");
  let userdata = JSON.parse(user);
  const navigate = useNavigate();

 
  const Update = () => {
      navigate('/updatedetails')
  }

  return ( 
  <div className="profile-parent-container">
      <h3>Artist Profile</h3>
       <div className="profile-container">
          <img src={Image} alt="" />
          <h4><StyledSpan>Welcome!</StyledSpan> {userdata.name}</h4>
          <button onClick={Update}>Edit Details</button>
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