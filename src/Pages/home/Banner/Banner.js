import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Button } from "@material-ui/core";
import Search from './Search';
import './Banner.css';
import banner1 from '../../../images/travel.jpg';
import banner2 from '../../../images/Rectangle 28.png';
import banner3 from '../../../images/Rectangle 27.png';
import { useNavigate } from 'react-router-dom';
import Video from '../../../images/maldivesVideo.mp4';

const Banner = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [showSearch, setShowSearch] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    // <div activeIndex={index} onSelect={handleSelect}>
    //   <div className='banner__search'>
    //     {showSearch && <Search />}

    //     <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
    //       {showSearch ? "Hide" : "Search Dates"}
    //     </Button>
    //   </div>
    //   <div className='hero'>
    //     {/* Hero */}
    //     <video autoPlay loop muted id='video'>
    //       <source src={Video} type='video/mp4' />
    //     </video>
    //     <div className="overlay"></div>
    //     <div className="hero-text">
    //       <h1>First Class Travel</h1>
    //       <h2>Top 1% Locations Worldwide</h2>
    //       <form className='form'>
    //         <div>
    //           <input type="text" placeholder='Search Destinations' />
    //         </div>
    //         <div>
    //           <button className='hero-btn'><svg className='icon' width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg></button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className='banner__search'>
          {showSearch && <Search />}

          <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
            {showSearch ? "Hide" : "Search Dates"}
          </Button>
        </div>
        <Carousel.Caption>
        {/* <div className="overlay"></div>
        <div className="hero-text banner-text">
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
        </div> */}
          <h1 className="banner-text">First Class Travel</h1>
          <h2 className="banner-text">Top 1% Locations Worldwide</h2>
          {/* <p className="banner-text">Your all-in-one travel app.</p> */}
          <Button className='ENbtn' onClick={() => navigate('/search')} variant='outlined'>Explore Nearby</Button>
        </Carousel.Caption>
        <img
          className="d-block w-100" height={"600"}
          src={banner1}
          alt="Second slide"
        />
        
      </Carousel.Item>
      
      
    </Carousel>
  );
};

export default Banner;