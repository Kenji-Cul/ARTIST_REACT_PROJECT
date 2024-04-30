import React from 'react'
import image_1 from '../../images/art-one.png'
import './Paintings.css'

const Paintings = () => {
  return (
    <div className="painting-container">
        <h3>Paintings</h3>
        <div className="painting-div-container">
            <div className="painting-flex-container">
                <div className="painting-div">
                    <img src={image_1} alt="" className="type-1"/>
                    <p>£20,000</p>
                    <p>The First of Arts</p>
                    <p>Landscape Painting</p>
                </div>

                <div className="painting-div">
                    <img src={image_1} alt="" className="type-2"/>
                    <p>£40,000</p>
                    <p>The Second of Arts</p>
                    <p>Portrait Painting</p>
                </div>
            </div>

            <div className="painting-flex-container">
                <div className="painting-div">
                    <img src={image_1} alt="" className="type-3"/>
                    <p>£50,000</p>
                    <p>The Third of Arts</p>
                    <p>Abstract Painting</p>
                </div>

                <div className="painting-div">
                    <img src={image_1} alt="" className="type-4"/>
                    <p>£70,000</p>
                    <p>The Fourth of Arts</p>
                    <p>Abstract Painting</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Paintings