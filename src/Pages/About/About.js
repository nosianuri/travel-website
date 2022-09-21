import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';
import Video from '../../images/maldivesVideo.mp4';
import BoraBora from '../../images/borabora.jpg';
import BoraBora2 from '../../images/borabora2.jpg';
import Maldives from '../../images/maldives.jpg';
import Maldives2 from '../../images/maldives2.jpg';
import KeyWest from '../../images/keywest.jpg';

const About = () => {
    return (
        <div>
        <Helmet>
            <title>About - Travel Master</title>
        </Helmet>
            <div className='hero'>
            {/* Hero */}
                <video autoPlay loop muted id='video'>
                    <source src={Video} type='video/mp4' />
                </video>
                <div className="overlay"></div>
                <div className="hero-text">
                    <h1>First Class Travel</h1>
                    <h2>Top 1% Locations Worldwide</h2>
                    <form className='form'>
                        <div>
                        <input type="text" placeholder='Search Destinations' />
                        </div>
                        <div>
                            <button className='hero-btn'><svg className='icon' width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg></button>
                        </div>
                    </form>
                </div>
            </div>
            
            {/* Destinations */}
<div className='destinations'>
    <div className='container'>
        <h1>All-Inclusive Resorts</h1>
        <p>On the Cox's Bazars Best Beaches</p>
        <div className='img-container'>
            <img className='span-3 image-grid-row-2' src={BoraBora} alt="" />
            <img src={BoraBora2} alt="" />
            <img src={Maldives} alt="" />
            <img src={Maldives2} alt="" />
            <img src={KeyWest} alt="" />
        </div>
    </div>
</div>
            {/* Travel */}
            {/* Book */}
            {/* Views */}
        </div>
    );
};

export default About;