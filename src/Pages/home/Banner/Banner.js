import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Button } from "@material-ui/core";
import Search from './Search';
import './Banner.css';
import banner1 from '../../../images/Rectangle 1.png';
import banner2 from '../../../images/Rectangle 28.png';
import banner3 from '../../../images/Rectangle 27.png';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [showSearch, setShowSearch] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className='banner__search'>
          {showSearch && <Search />}

          <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
            {showSearch ? "Hide" : "Search Dates"}
          </Button>
        </div>
        <img
          className="d-block w-100" height={"600"}
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="banner-text">Welcome to Bangladesh Tour</h3>
          <p className="banner-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button className='ENbtn' onClick={() => navigate.push('/search')} variant='outlined'>Explore Nearby</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='banner__search'>
          {showSearch && <Search />}

          <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
            {showSearch ? "Hide" : "Search Dates"}
          </Button>
        </div>
        <img
          className="d-block w-100" height={"600"}
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="banner-text">Adventure Is Worthwhile </h3>
          <p className="banner-text">DISCOVER NEW PLACES WITH BD, TRAVEL GURU.</p>
          <Button className='ENbtn' onClick={() => navigate.push('/search')}variant='outlined'>Explore Nearby</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='banner__search'>
          {showSearch && <Search />}

          <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
            {showSearch ? "Hide" : "Search Dates"}
          </Button>
        </div>
        <img
          className="d-block w-100" height={"600"}
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="banner-text">Incredible last-minute hotel deals</h3>
          <p className="banner-text">
            SAVE MONEY AND TIME BY BOOKING TONIGHT AND BEYOND.
          </p>
          <Button className='ENbtn' onClick={() => navigate.push('/search')}variant='outlined'>Explore Nearby</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;