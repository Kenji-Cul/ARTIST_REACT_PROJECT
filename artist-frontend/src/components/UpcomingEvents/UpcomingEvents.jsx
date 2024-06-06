import React from 'react'


import './UpcomingEvents.css'
import { useSelector } from 'react-redux'
import UpcomingEvent from './UpcomingEvent'

const UpcomingEvents = () => {
  const Upcomingevents = useSelector((state) => state.data.upcomingevents);
  return (
    <div className="events-container">
         <p className="event-heading">Upcoming Events</p>
         <div className="overall-container">
          {
            Upcomingevents.map((event) => {
             
               return (
                  <UpcomingEvent event={event} key={event.id}/>
               ) 
            })
          }
                
         </div>
    </div>
  )
}

export default UpcomingEvents