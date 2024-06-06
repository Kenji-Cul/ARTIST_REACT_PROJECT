import React from 'react'
import Image_2 from '../../images/calendar.png'
import Image_6 from '../../images/location.png'

function UpcomingEvent({event}) {
  return (
    <div>
        <div className="img-container">
                <div>
                <img src={event.img1} alt="" />
                </div>
                <div>
                <img src={event.img2} alt="" />
                </div>
            <div>
            <img src={event.img3} alt="" />
            </div>
            <div>
                <img src={event.img1} alt="" />
                </div>
    </div>
    <div className="event-details">
        <p>{event.eventname}</p>
        <div>
            <p>{event.eventdate}</p>
            <img src={Image_2} alt="" />
        </div>
        <div>
            <p>{event.eventlocation}</p>
            <img src={Image_6} alt="" />
        </div>
    </div>
    <p className="event-description">
   {event.eventdesc}
    </p>
    </div>
  )
}

export default UpcomingEvent
