import React, { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return (
        <div id='services' className='container mt-5'>
            <h2 className='services-title'>Tour Place: {services.length}</h2>
            <div className='services-container mt-5'>
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
            
        </div>
    );
};

export default Services;