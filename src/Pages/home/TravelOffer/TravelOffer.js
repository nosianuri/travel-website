import React from 'react';
import Gold from '../../../images/gold.png';
import './TravelOffer.css';

function TravelOffer() {
  return (
    <div>
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
    </div>
  )
}

export default TravelOffer