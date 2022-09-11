import { Check } from '@material-ui/icons';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://fierce-waters-93331.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div id='services' className='container'>
            <h2 className='services-title'>open for travel from T.G. BD</h2>
            <p className='services-p'> <span><Check/></span>Travel possible in both directions <span><Check/></span> No quarantine or 24h quarantine <span><Check/></span> Great Deals</p>
            <div className='services-container mt-5'>
                {
                    services.slice(0, 6).map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;