import React from 'react'
import './FeaturedArtists.css'
import { useDispatch, useSelector } from 'react-redux'
import FeaturedArtist from './FeaturedArtist'


const FeaturedArtists = () => {
  
  const FeaturedArtists = useSelector((state) => state.data.featuredartists);
  // const dispatch = useDispatch();
  // console.log(FeaturedArtists);

  return (
    <div className="featured-artist-container">
        <p className="heading">Featured Artists</p>

      <div className="featured-container">
        {
          FeaturedArtists.map((artist) => {
            return (
              <FeaturedArtist artist={artist} key={artist.id}/>
            )
            
          })
        }
                   
        </div>
    </div>
  )
}

export default FeaturedArtists