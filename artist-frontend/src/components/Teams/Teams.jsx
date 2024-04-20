import React from 'react'
import Member1 from '../../images/featured-1.jpg'
import Member2 from '../../images/featured-2.jpg'
import Member3 from '../../images/featured-3.jpg'
import Member4 from '../../images/featured-4.jpg'
import './Teams.css'

const Teams = () => {
  return (
    <div className="team-parent-container">
        <h3>Our Teams</h3>
        <div className="team-container">
            <div className="team-div">
                    <h4>Team Member</h4>
                    <img src={Member1} alt="" />
            </div>
            <div className="team-div-2">
               <div>
                    <h4>Team Member</h4>
                    <img src={Member2} alt="" />
                </div>
                <div>
                    <h4>Team Member</h4>
                    <img src={Member3} alt="" />
                </div>
            </div>
            <div className="team-div">
                    <h4>Team Member</h4>
                    <img src={Member4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Teams