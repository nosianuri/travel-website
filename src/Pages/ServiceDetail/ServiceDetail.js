import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import Gmap from '../Gmap/Gmap';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    return (
        <div className='m-5'>
            <Gmap />
            {/* <div>
                <img className='w-100 serviceimg' src={service.image} alt="" />

                <h2 className='text-center'>Welcome to - {service.name}</h2>
                <p className='text-center'><small>{service.description}</small></p>
                <div className='text-center'>
                    <Link to={`/checkout/${serviceId}`}>
                        <button className='btn btn-primary'>Proceed Checkout</button>
                    </Link>
                </div>
            </div> */}
{/* extra */}
<div className='serviceResult'>
            <img src={service.image} alt="" />
            <FavoriteBorderIcon className="serviceResult__heart" />

            <div className='serviceResult__info'>
                <div className="serviceResult__infoTop">
                    <p>Welcome to - {service.name}</p>
                    <h3>{service.name}</h3>
                    <p>____</p>
                    <p>{service.description}</p>
                </div>

                <div className="serviceResult__infoBottom">
                    <div className="serviceResult__stars">
                        <StarIcon className="serviceResult__star" />
                        <p className='mt-3'>
                            <strong>{service.star}</strong>
                        </p>
                    </div>
                    <div className='serviceResults__price'>
                        <h2>Price: ${service.price}</h2>
                        <p>Room: {service.room}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center'>
                    <Link to={`/checkout/${serviceId}`}>
                        <button className='btn btn-primary'>Proceed Checkout</button>
                    </Link>
                </div>
        </div>
    );
};

export default ServiceDetail;