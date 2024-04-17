import React from 'react'
import './FeaturedArtists.css'
import Featured1 from '../../images/featured-1.jpg'
import Featured2 from '../../images/featured-2.jpg'
import Featured3 from '../../images/featured-3.jpg'
import Featured4 from '../../images/featured-4.jpg'
import Featured5 from '../../images/featured-5.jpg'
import Featured6 from '../../images/featured-6.jpg'


const FeaturedArtists = () => {
  return (
    <div className="featured-artist-container">
        <p className="heading">Featured Artists</p>

      <div className="featured-container">
                    <div className="featured-div">
                        <img src={Featured1} alt="" className="feature-img"/>
                        <div>
                        <p className="featured-name">Alexandra Gilton</p>
                        <p className="feature-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam,</p>
                        </div>
                    </div>
                    <div className="featured-div">
                        <img src={Featured2} alt="" className="feature-img"/>
                        <div>
                        <p className="featured-name">Alexandra Gilton</p>
                        <p className="feature-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam,</p>
                        </div>
                    </div>
                    <div className="featured-div">
                        <img src={Featured3} alt="" className="feature-img"/>
                        <div>
                        <p className="featured-name">Alexandra Gilton</p>
                        <p className="feature-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam,</p>
                        </div>
                    </div>

                    <div className="featured-div">
                        <img src={Featured4} alt="" className="feature-img"/>
                        <div>
                        <p className="featured-name">Alexandra Gilton</p>
                        <p className="feature-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam,</p>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default FeaturedArtists