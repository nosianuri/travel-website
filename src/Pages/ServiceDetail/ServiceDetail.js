import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import Gmap from '../Gmap/Gmap';
import '../home/Service/Service.css';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    
    return (
        <div className='m-5'>
        <Gmap />
        <img className='w-100 serviceimg' src={service.image} alt="" />
        
            <h2 className='text-center'>Welcome to detail: {service.name}</h2>
            <p className='text-center'><small>{service.description}</small></p>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;