import React from 'react'
import image_1 from '../../images/art-one.png'
import './ArtistGallery.css'
import axios from "axios";

const ArtistGallery = () => {

    
    let user = localStorage.getItem("userdetails");
  let userdata = JSON.parse(user);
  let link = `http://localhost:5000/galleries/${userdata.id}`;
  async function fetchData(){
    const response = await axios.get(link, {
      headers: {
          'Content-Type': 'application/json',
      },
      
  });

 
 const data = response.data;
  console.log(data);
 

   
  // console.log(profile);
  }
   fetchData();
  return (
    <div className="artist-gallery-container">
        <h3>Artist Gallery</h3>
        <div className="artist-gallery">
            <div className="gallery-art">
                <img src={image_1} alt="" />
                <p>Art Name</p>
            </div>

            <div className="gallery-art">
                <img src={image_1} alt="" />
                <p>Art Name</p>
            </div>

            <div className="gallery-art">
                <img src={image_1} alt="" />
                <p>Art Name</p>
            </div>

            <div className="gallery-art">
                <img src={image_1} alt="" />
                <p>Art Name</p>
            </div>
        </div>
    </div>
  )
}

export default ArtistGallery