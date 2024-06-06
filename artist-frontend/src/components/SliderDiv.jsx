import React, { useState } from 'react'
// import { SliderData } from './SliderData';
import ForwardArrow from '../images/arrow_forward.png'
import BackwardArrow from '../images/arrow_backward.png'
import { useSelector } from 'react-redux';

const SliderDiv = () => {
    const [current, setCurrent] = useState(0);
    const SliderData = useSelector((state) => state.data.sliderdata);
    const length = SliderData.length;

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }


    if(!Array.isArray(SliderData) || SliderData.length <= 0){
        return null
    }

  return (
    <div>
        <img src={ForwardArrow} alt="" className='backward' onClick={nextSlide}/>
       <img src={BackwardArrow} alt=""  className='forward' onClick={prevSlide}/>
        {
            SliderData.map((slide, index) => {
                return <div className={index === current ? 'active': ''} key={index}>
                    {
                        index === current && (
                            <li>
                            <div className='slider-div'>
            
                            <div className='image-div'>
                            <img src={slide.firstimage} alt="" />
                            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                
                            <div className="second-info">
                                <div className='artist-info'>
                                    <p className="artist-name">{slide.artist_name}</p>
                                    <div className="date-div">
                                        <p>{slide.event_date}</p>
                                        <img src={slide.secondimage} alt="" />
                                    </div>
                                </div>
                                <img src={slide.artist_image} alt="" className='artist-img'/>
                                <p className="slide-info">
                               {slide.slideinfo1}
                                </p>
                            </div>
                    </div>
                    </li>
                        )
                    }
                
        </div>
            })
        }
    
    </div>
  )
}

export default SliderDiv