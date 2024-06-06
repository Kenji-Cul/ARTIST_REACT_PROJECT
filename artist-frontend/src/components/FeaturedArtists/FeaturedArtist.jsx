import React from 'react'

function FeaturedArtist({ artist }) {
    
  return (
    <div className="featured-div">
    <img src={artist.img} alt="" className="feature-img"/>
    <div>
    <p className="featured-name">{artist.name}</p>
    <p className="feature-info">{artist.info}</p>
    </div>
</div>
  )
}

export default FeaturedArtist
