import React from 'react'
import Image_3 from '../../images/artist-img.png';
import Image_4 from '../../images/artist-img-2.png';
import image_5 from '../../images/artist-img-3.png'
import './ArtistList.css';
import { useSelector } from 'react-redux';
import ArtistDetails from './ArtistDetails';

const ArtistList = () => {
    const artistdata = useSelector((state) => state.data.artists);
  return (
    <div className="artist-list-container">
        <h3>List of Artists</h3>
        <div className="artist-list">
           
                {
                    artistdata.map((artist) => {
                        return (
                            <ArtistDetails artist={artist} key={artist.id}/>
                        )
                     
                    })
                }
        </div>
    </div>
  )
}

export default ArtistList