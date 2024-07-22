import React, { useEffect, useState } from 'react'
import image_1 from '../../images/art-one.png'
import './AllGallery.css'
import { gallerySelector, getUserGallery } from '../../features/gallerySlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AllGallery = () => {

    
    let user = localStorage.getItem("userdetails");
  let userdata = JSON.parse(user);
  

  const [gallery, setGallery] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { galleryFetching, gallerySuccess, galleryError, galleryInfo } = useSelector(
    gallerySelector
 );
  async function fetchData(){
    let link = `http://localhost:5000/artists/galleries/${userdata.id}`;
    const response = await axios.get(link, {
      headers: {
          'Content-Type': 'application/json',
      },
      
  });

 
 const data = response.data.gallery;

 if(data.length === 0){
    setGallery(null)
 } else {
    setGallery(data);
 }
  
  
  
 
  }
  if(userdata){
    fetchData();
  }


  
 

  const editGallery = (id) => {
    navigate(`/editgallery?gal_id=${id}`)
  }

//    useEffect(() => {
//     dispatch(getUserGallery());
//     setGallery(galleryInfo);
//     console.log(galleryInfo);
 
//  }, []);


 let galleryimage2 = `http://localhost:5000/galleryuploads/no-gallery.jpg`;
  return (
    <div className="artist-gallery-container">
        <h3>All Galleries</h3>
        <div className="artist-gallery">
            {
                 
                   gallery === null ? 
                  

                <div className="no-gallery">
                <img src={galleryimage2} alt="" />
                <h4>No Gallery found!</h4>
           </div>
                
                : 

                gallery.map((gallerydata) => {
                    let galleryimage = `http://localhost:5000/galleryuploads/${gallerydata.img}`;
                     let id = gallerydata._id;
                    return (
                        <div className="gallery-art" key={id}>
                        <img src={galleryimage} alt="" />
                        <p>{gallerydata.name}</p>
                        <button onClick={() => editGallery(id)} >Edit Gallery</button>
                    </div>
                    )
                })
               
            }
           
{/* 
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
            </div> */}
        </div>
    </div>
  )
}

export default AllGallery
