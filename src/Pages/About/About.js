import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';
import Video from '../../images/maldivesVideo.mp4';
import BoraBora from '../../images/borabora.jpg';
import BoraBora2 from '../../images/borabora2.jpg';
import Maldives from '../../images/maldives.jpg';
import Maldives2 from '../../images/maldives2.jpg';
import KeyWest from '../../images/keywest.jpg';
import Gold from '../../images/gold.png';
import Patenga from '../../images/patenga.png';
import Sajek from '../../images/Sajek.png';
import Paharpur from '../../images/paharpur.png';
import Sreemongol from '../../images/srimagal.png';
import KaptaiLake from '../../images/KaptaiLake.png';
import Rangamati from '../../images/rangamati.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Select from './Select';

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
                            <button className='hero-btn'><svg className='icon' width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg></button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Destinations */}
            <div className='destinations'>
                <div className='container'>
                    <h1>All-Inclusive Resorts</h1>
                    <p>On the Saint Martin's Best Beaches</p>
                    <div className='img-container'>
                        <img className='span-3 image-grid-row-2' src={BoraBora} alt="" />
                        <img src={BoraBora2} alt="" />
                        <img src={Maldives} alt="" />
                        <img src={Maldives2} alt="" />
                        <img src={KeyWest} alt="" />
                    </div>
                </div>
            </div>
            {/* Travel search */}
            <div className='travel-search'>
                <div className='container'>
                    <div className='left'>
                        <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                        <p>Come experince the very pinnacle of luxury Saint Martin all-inclusive vacations for couples at Sandals Resorts. Our luxury beach resorts, set along the most gorgeous tropical settings and Curacao, feature unlimited gourmei dining. Unique resturent serving premium food and drinks and every land and water sport, including complimentary green fees at our golf resorts and PADI" certified scuba diving at most resorts. If you are planning a wedding, Sandals is the leader in Saint Martin destination weddings and honeymoon packages.</p>
                        <div className='travel-search-col-2'>
                            <div className='box'>
                                <div>
                                    <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                                </div>
                                <div>
                                    <h3>BANGLADESH LEADING</h3>
                                    <p> ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>

                                </div>
                            </div>
                            <div className='box'>
                                <div>
                                    <h3>NO ONE INCLUDES MORE</h3>
                                    <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                                    <button className='hero-btn'>View Packages</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='promo'>
                            <h4 className='save'>GET AN ADDITIONAL 7% OFF</h4>
                            <p className='timer'>12 HOURS LEFT!</p>
                            <p className='offers'>VIEWS ALL SAINT MARTIN OFFERS</p>
                        </div>
                        <form>
                            <div className='input-wrap'>
                                <label>Destination</label>
                                <select>
                                    <option value="1">Grande Antique</option>
                                    <option value="1">Granda</option>
                                    <option value="1">Emerald Bay</option>
                                    <option value="1">BORA Bora</option>
                                    <option value="1">Key west</option>
                                    <option value="1">Maldives</option>
                                    <option value="1">Barbados</option>
                                </select>
                            </div>
                            <div className='date'>
                                <div className='input-wrap'>
                                    <label>Check-In</label>
                                    <input type="date" />
                                </div>
                                <div className='input-wrap'>
                                    <label>Check-Out</label>
                                    <input type="date" />
                                </div>
                            </div>
                            <button className='hero-btn'>Rates & Availabilities</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Book */}
            <div className='selects'>
                <div className='container'>
                    <Select bgImg={Patenga} text='Potenga' />
                    <Select bgImg={Sajek} text='Sajek' />
                    <Select bgImg={Paharpur} text='Paharpur' />
                    <Select bgImg={Sreemongol} text='Sreemongol' />
                    <Select bgImg={KaptaiLake} text='KaptaiLake' />
                    <Select bgImg={Rangamati} text='Rangamati' />
                </div>
            </div>
            {/* Views */}
            <div className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true} >
                <div>
                    <img src={BoraBora} alt='/'/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={BoraBora2} alt='/' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={Maldives} alt='/' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            </div>
        </div>
    );
};

export default About;