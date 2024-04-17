import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import FeaturedArtists from '../components/FeaturedArtists/FeaturedArtists'
import UpcomingEvents from '../components/UpcomingEvents/UpcomingEvents'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <FeaturedArtists />
        <UpcomingEvents />
        <Footer />
    </div>
  )
}

export default Home