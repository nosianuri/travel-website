import React from 'react';
import './Service.css'; 

const Service = ({service}) => {
    const {name, image, description, price} = service;
    return (
        <div className='service'>
        <img src={image} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button>Book Now</button>
        </div>
    );
};

export default Service;