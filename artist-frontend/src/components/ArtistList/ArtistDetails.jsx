import React from 'react'

function ArtistDetails({artist}) {
  return (
    <div className="artist-details">
    <img src={artist.img} alt="" />
    <p>{artist.name}</p>
</div>
  )
}

export default ArtistDetails
