import React from 'react'
import Image_3 from '../../images/artist-img.png';
import Image_4 from '../../images/artist-img-2.png';
import image_5 from '../../images/artist-img-3.png'
import './ArtistList.css';

const ArtistList = () => {
  return (
    <div className="artist-list-container">
        <h3>List of Artists</h3>
        <div className="artist-list">
            <div className="artist-list-div">
                <div className="artist-details">
                    <img src={Image_3} alt="" />
                    <p>Davies Luke</p>
                </div>

                <div className="artist-details">
                    <img src={Image_4} alt="" />
                    <p>Davies White</p>
                </div>
            </div>

            <div className="artist-list-div">
                <div className="artist-details">
                    <img src={Image_4} alt="" />
                    <p>Davies Luke</p>
                </div>

                <div className="artist-details">
                    <img src={image_5} alt="" />
                    <p>Davies White</p>
                </div>
            </div>

            <div className="artist-list-div">
                <div className="artist-details">
                    <img src={Image_4} alt="" />
                    <p>Davies Luke</p>
                </div>

                <div className="artist-details">
                    <img src={Image_3} alt="" />
                    <p>Davies White</p>
                </div>
            </div>

            <div className="artist-list-div">
                <div className="artist-details">
                    <img src={Image_4} alt="" />
                    <p>Davies Luke</p>
                </div>

                <div className="artist-details">
                    <img src={image_5} alt="" />
                    <p>Davies White</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ArtistList