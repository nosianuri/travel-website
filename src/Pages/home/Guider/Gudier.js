import React from 'react';

const Gudier = ({ guider }) => {
    const { name, img } = guider;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top img-fluid rounded-circle " alt="..." />
                <div className="card-body">
                    
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <h5 className="card-title p-3">{name}</h5>
        </div>

    );
};

export default Gudier;