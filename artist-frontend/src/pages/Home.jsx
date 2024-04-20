import React from 'react'
import Hero from '../components/Hero/Hero'
import FeaturedArtists from '../components/FeaturedArtists/FeaturedArtists'
import UpcomingEvents from '../components/UpcomingEvents/UpcomingEvents'


const Home = () => {
  return (
    <div>
        <Hero />
        <FeaturedArtists />
        <UpcomingEvents />
    </div>
  )
}

export default Home