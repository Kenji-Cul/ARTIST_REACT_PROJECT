import React, { useState } from 'react'

function HistoryDiv({history, show}) {
    const [showTwoImages, setshowTwoImages] = useState(show);

  return (
    <div className="history-div">
                <div className="image-div">
                <img src={history.img1} alt="" />
                </div>
                <div className="round-image">
                    {
                        showTwoImages ?   (<img src={history.img2} alt="" />) :  
                        (
                        <div>
                        <img src={history.img2} alt="" />
                        <img src={history.img3} alt="" />
                        </div>
                    )
                    }
                   
                </div>
                <p>
                {history.desc}
                </p>
            </div>
  )
}

export default HistoryDiv
