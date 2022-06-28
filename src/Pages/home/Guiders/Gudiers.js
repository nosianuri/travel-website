import React from 'react';

import guider1 from '../../../images/guider/guide1.png';
import guider2 from '../../../images/guider/guide2.png';
import guider3 from '../../../images/guider/guide3.png';
import guider4 from '../../../images/guider/guide4.png';
import guider5 from '../../../images/guider/guide5.jpg';
import guider6 from '../../../images/guider/guide6.jpg';
import Gudier from '../Guider/Gudier';

const guiders = [
    {id:1, name: 'Munker Naim', img: guider1},
    {id:2, name: 'Munker Naim', img: guider2},
    {id:3, name: 'Munker Naim', img: guider3},
    {id:4, name: 'Munker Naim', img: guider4},
    {id:5, name: 'Munker Naim', img: guider5},
    {id:6, name: 'Munker Naim', img: guider6},
]

const Gudiers = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-primary text-center'>Our Touriest Guider</h2>
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