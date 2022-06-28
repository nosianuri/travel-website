import React, { useState } from 'react';
import { useEffect } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return (
        <div>
            <h2>services: </h2>
        </div>
    );
};

export default Services;