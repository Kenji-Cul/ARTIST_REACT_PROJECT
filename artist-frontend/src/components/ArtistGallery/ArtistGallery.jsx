import React from 'react'
import image_1 from '../../images/art-one.png'
import './ArtistGallery.css'

const ArtistGallery = () => {
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