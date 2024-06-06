import React, { useState } from 'react';
import image_1 from '../../images/art-one.png';
import Image_3 from '../../images/artist-img.png';
import Image_4 from '../../images/artist-img-2.png';
import { useSelector } from 'react-redux';

import './History.css';
import HistoryDiv from './HistoryDiv';

const History = () => {
    const historydata = useSelector((state) => state.data.history);
    

  return (
    <div className="history-parent-container">
        <h3>Our History</h3>
       
           
           {
                historydata.map((history) => {
                    return (
                        <div className="history-div-container">
                        <HistoryDiv history={history}  show={true}/>
                        <HistoryDiv history={history}  show={false}/>
                        <HistoryDiv history={history}  show={true}/>
                        <HistoryDiv history={history}  show={false}/>
                        <HistoryDiv history={history}  show={true}/>
                        <HistoryDiv history={history}  show={false}/>
                        </div>
                    )
                })
           }

       
    </div>
  )
}

export default History