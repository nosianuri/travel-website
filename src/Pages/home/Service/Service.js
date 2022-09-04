import React from 'react';
import { useNavigate} from 'react-router-dom';
import './Service.css'; 

const Service = ({service}) => {
    const {_id, name, image, description, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
        <img className='w-100' src={image} alt="" />
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetail(_id)} className='btn btn-primary'>Visit Now</button>
        </div>
    );
};

export default Service;