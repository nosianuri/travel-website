import React from 'react';
import './Guiders.css';

import guider1 from '../../../images/guider/guide1.png';
import guider2 from '../../../images/guider/guide2.png';
import guider3 from '../../../images/guider/guide3.png';
import guider4 from '../../../images/guider/guide4.png';
import guider5 from '../../../images/guider/guide5.jpg';
import guider6 from '../../../images/guider/guide6.jpg';
import Gudier from '../Guider/Gudier';

const guiders = [
    {
        id:1, 
        name: 'Nissan Sentra or Similar', 
        img: 'https://i.ibb.co/qYp73Fm/pexels-mike-217326.jpg',
        address: 'From US$130.88'
    },
    {
        id:2, 
        name: 'Nissan Sentra or Similar', 
        img: 'https://i.ibb.co/jZLNvR8/car.jpg',
        address: 'From US$130.88'
    },
    {
        id:3, 
        name: 'Volkswagen Jetta 2 Doors or Similar', img: 'https://i.ibb.co/0ZTZ69V/car1.jpg',
        address: 'From US$131.79'
    },
    {
        id:4, 
        name: 'Nissan Sentra or Similar', 
        img: 'https://i.ibb.co/bFt7GTd/car4.jpg',
        address: 'From US$130.88'
    },
    {
        id:5, 
        name: 'Nissan Sentra or Similar', 
        img: 'https://i.ibb.co/6PD5Bpf/car6.jpg',
        address: 'From US$130.88'
    },
    {
        id:6, 
        name: 'Nissan Sentra or Similar', 
        img: 'https://i.ibb.co/4pnBNK2/car8.jpg'
    },
]

const Gudiers = () => {
    return (
        <div id='guiders' className='container mt-5 '>
            <h2 className='text-color text-center'>Recommended Car Rentals</h2>
            <div className='row'>
                {
                    guiders.map(guider => <Gudier
                    key={guider.id}
                    guider= {guider}
                    ></Gudier>)
                }
            </div>
        </div>
    );
};

export default Gudiers;