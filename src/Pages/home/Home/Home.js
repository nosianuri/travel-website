import React from 'react';
import Services from '../Services/Services';
import Gudiers from '../Guiders/Gudiers';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import MailList from '../Maillist/MailList';
import Testimonial from '../Testimonial/Testimonial';
import Review from '../Review/Review';
import Attractions from '../Attractions/Attractions';
import Explore from '../Explore/Explore';



const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home - Travel Master</title>
        </Helmet>
            <Banner></Banner>
            <Testimonial />
            <Services></Services>
            <Attractions />
            <Gudiers></Gudiers>
            <Explore />
            <Review />
            <MailList />
        </>
    );
};

export default Home;