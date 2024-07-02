import React, { useEffect, useState } from 'react'
// import Image from '../../images/featured-1.jpg';
import './Profile.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { userSelector, updateUser, clearState, getUser } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const StyledSpan = styled.span`
color: #ffffff!important;
`;

const StyledSpan2 = styled.span`
color: #ffffff!important;
padding-left: 0.3em;
`;

const Profile = () => {
  
  
  let user = localStorage.getItem("userdetails");
  let userdata = JSON.parse(user);
  let link = `http://localhost:5000/artists/${userdata.id}`;
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    img: "",
    desc: "",
    username: "",
    location: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const { isFetchingUser, isSuccessUser, isErrorUser, errorMsgUser, userInfo } = useSelector(
    userSelector
 );

 
 
  // useEffect(() => {
    
  //    dispatch(getUser());
   
  // },[]);

  
  async function fetchData(){
    const response = await axios.get(link, {
      headers: {
          'Content-Type': 'application/json',
      },
      
  });

 
  let data = response.data.artist;
  
  // profile.img = data.img;
  // profile.username = data.name;
  // profile.desc = data.description;
  // profile.location = data.location;
  // profile.phone = data.phone;
  setProfile(data);
  // console.log(profile);
  }
   fetchData();

  


  const Update = () => {
      navigate('/updatedetails')
  }

  const Gallery = () => {
    navigate('/gallery')
  }
 

 
  let image = `http://localhost:5000/uploads/${profile.img}`;
  let image2 = `http://localhost:5000/uploads/profile-img.jpg`;
 
 

  return ( 

  <div className="profile-parent-container">
      <h3>Artist Profile</h3>
       <div className="profile-container">
          <img src={profile.img === null ? image2 : image} alt="" />
          <h4>Welcome! <StyledSpan>{profile.name}</StyledSpan></h4>
          <h4><FontAwesomeIcon icon={faLocationDot} /> <StyledSpan2>{profile.location}</StyledSpan2></h4>
          <h4><FontAwesomeIcon icon={faPhone} /> <StyledSpan2>{profile.phone}</StyledSpan2></h4>
          <button onClick={Update}>Edit Details</button>
          <button onClick={Gallery}>Create Gallery</button>
          
           <p>{profile.description}</p>
       </div>
  </div>
  )
}

export default Profile