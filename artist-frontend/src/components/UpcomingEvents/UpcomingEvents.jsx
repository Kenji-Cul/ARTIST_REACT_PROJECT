import React from 'react'
import Image_3 from '../../images/artist-img.png'
import Image_4 from '../../images/artist-img-2.png'
import Image_5 from '../../images/artist-img-3.png'
import Image_2 from '../../images/calendar.png'
import Image_6 from '../../images/location.png'
import './UpcomingEvents.css'

const UpcomingEvents = () => {
  return (
    <div className="events-container">
         <p className="event-heading">Upcoming Events</p>
         <div className="overall-container">
                <div className="img-container">
                            <div>
                            <img src={Image_3} alt="" />
                            </div>
                            <div>
                            <img src={Image_4} alt="" />
                            </div>
                        <div>
                        <img src={Image_5} alt="" />
                        </div>
                        <div>
                            <img src={Image_4} alt="" />
                            </div>
                </div>
                <div className="event-details">
                    <p>Alcatraz Inhibition</p>
                    <div>
                        <p>4,August,2024</p>
                        <img src={Image_2} alt="" />
                    </div>
                    <div>
                        <p>London, UK</p>
                        <img src={Image_6} alt="" />
                    </div>
                </div>
                <p className="event-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons
                </p>
         </div>
    </div>
  )
}

export default UpcomingEvents