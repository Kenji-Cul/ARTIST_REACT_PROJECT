import React from 'react'
import image_1 from '../../images/art-one.png';
import './Sculpture.css';

const Sculpture = () => {
  return (
    <div className="sculpture-container">
        <h3>Sculpture</h3>
        <div className="sculpture-div-container">
            <div className="sculpture-flex-container">
                <div className="sculpture-div">
                    <img src={image_1} alt="" />
                    <p>£20,000</p>
                    <p>The First of Arts</p>
                    <p>Landscape Painting</p>
                </div>

                <div className="sculpture-div">
                    <img src={image_1} alt="" />
                    <p>£40,000</p>
                    <p>The Second of Arts</p>
                    <p>Portrait Painting</p>
                </div>
            </div>

            <div className="sculpture-flex-container">
                <div className="sculpture-div">
                    <img src={image_1} alt="" />
                    <p>£50,000</p>
                    <p>The Third of Arts</p>
                    <p>Abstract Painting</p>
                </div>

                <div className="sculpture-div">
                    <img src={image_1} alt="" />
                    <p>£70,000</p>
                    <p>The Fourth of Arts</p>
                    <p>Abstract Painting</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sculpture