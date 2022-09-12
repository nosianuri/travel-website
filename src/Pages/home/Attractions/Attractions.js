import React from 'react';
import './Attractions.css';

function Attractions() {
    return (
        <div className='attrac'>
            <div className='attrac-detail'>
                <h2 className='pt-5'>Popular Attractions</h2>
                <p>
                    <button className='m-4 btn-a'>Dhaka</button>
                    <button className='m-4 btn-a'>Chittagong</button>
                    <button className='m-4 btn-a'>Cox's Bazar</button>
                    <button className='m-4 btn-a'>Tejgaon Circle</button>
                    <button className='m-4 btn-a'>Sylhet</button>
                    <button className='m-4 btn-a'>Bogura</button>
                </p>

                <div className=' attraction'>
                    <div className=' attraction-card m-4'>
                        <div className='imgbox'>
                            <img src="https://i.ibb.co/svst0yn/Ahsan-Manzil.jpg" alt="Ahsan Manzil" />
                        </div>
                        <div className='content'>
                            <h4>Ahsan Manzil</h4>
                            <p>Ahsan Manzil is the erstwhile official residential palace and seat of the Nawab of Dhaka.</p>
                        </div>
                    </div>
                    <div className=' attraction-card m-4'>
                        <div className='imgbox'>
                            <img src="https://i.ibb.co/mCZZbjY/National-museum.jpg" alt="Ahsan Manzil" />
                        </div>
                        <div className='content'>
                            <h4>National Museum</h4>
                            <p>Ahsan Manzil is the erstwhile official residential palace and seat of the Nawab of Dhaka.</p>
                        </div>
                    </div>
                    <div className=' attraction-card m-4'>
                        <div className='imgbox'>
                            <img src="https://i.ibb.co/xmdXz9q/mahasthangarh-bogra.jpg" alt="Ahsan Manzil" />
                        </div>
                        <div className='content'>
                            <h4>Mohostangor</h4>
                            <p>Ahsan Manzil is the erstwhile official residential palace and seat of the Nawab of Dhaka.</p>
                        </div>
                    </div>
                    <div className=' attraction-card m-4'>
                        <div className='imgbox'>
                            <img src="https://i.ibb.co/YR1C6p0/cox-s-bazar.jpg" alt="Ahsan Manzil" />
                        </div>
                        <div className='content'>
                            <h4>Cox's Bazar</h4>
                            <p>Ahsan Manzil is the erstwhile official residential palace and seat of the Nawab of Dhaka.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Attractions;