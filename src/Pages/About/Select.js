import React from 'react';
import './Select.css';
import Nijhum from '../../images/nijhum.png';
import Patenga from '../../images/patenga.png';

function Select({bgImg, text}) {
  return (
    <div className='selects-location'>
        <img src={bgImg} alt="/" />
        <div className='overlay'>
            <p>{text}</p>
        </div>
        
    </div>
  )
}

export default Select