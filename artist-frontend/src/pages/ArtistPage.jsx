import React from 'react'
import ArtistList from '../components/ArtistList/ArtistList'
import Paintings from '../components/Paintings/Paintings'
import Sculpture from '../components/Sculpture/Sculpture'

const ArtistPage = () => {
  return (
    <div>
        <ArtistList />
        <Paintings />
        <Sculpture />
    </div>
  )
}

export default ArtistPage