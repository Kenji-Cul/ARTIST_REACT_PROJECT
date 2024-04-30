import React from 'react'
import image_1 from '../../images/art-one.png'
import StarFill from '../../images/star-fill.png'
import StarHalf from '../../images/star-half.png'
import './Artshows.css';

const Artshows = () => {
  return (
    <div className="artshows-parent-container">
        <h3>Art Shows</h3>
        <div className="artshows-container">
            <div className="artshows-div">
              <img src={image_1} alt="" className="artshows-img"/>
              <p>Art show name</p>
              <div className="artshows-star">
                <img src={StarHalf} alt="" />
                <img src={StarHalf} alt="" />
                <img src={StarHalf} alt="" />
                <img src={StarFill} alt="" />
                <img src={StarFill} alt="" />
              </div>
              <p>Art show location</p>
              <p>Art show Date</p>
              <p className="artshow-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="artshows-btn">
                <button className="artshow-btn">Read Review</button>
                <button className="artshow-btn">Buy Ticket</button>
                </div>
            </div>

            <div className="artshows-div">
              <img src={image_1} alt="" className="artshows-img"/>
              <p>Art show name</p>
              <div className="artshows-star">
                <img src={StarHalf} alt="" />
                <img src={StarHalf} alt="" />
                <img src={StarHalf} alt="" />
                <img src={StarFill} alt="" />
                <img src={StarFill} alt="" />
              </div>
              <p>Art show location</p>
              <p>Art show Date</p>
              <p className="artshow-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="artshows-btn">
                <button className="artshow-btn">Read Review</button>
                <button className="artshow-btn">Buy Ticket</button>
                </div>
            </div>


            <div className="artshows-div">
              <img src={image_1} alt="" className="artshows-img"/>
              <p>Art show name</p>
              <div className="artshows-star">
                <img src={StarHalf} alt="" />
                <img src={StarHalf} alt="" />
                <img src={StarHalf} alt="" />
                <img src={StarFill} alt="" />
                <img src={StarFill} alt="" />
              </div>
              <p>Art show location</p>
              <p>Art show Date</p>
              <p className="artshow-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="artshows-btn">
                <button className="artshow-btn">Read Review</button>
                <button className="artshow-btn">Buy Ticket</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Artshows