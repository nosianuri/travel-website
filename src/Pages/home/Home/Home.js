import React from 'react';
import Services from '../Services/Services';
import Gudiers from '../Guiders/Gudiers';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import MailList from '../Maillist/MailList';
import Testimonial from '../Testimonial/Testimonial';
import Review from '../Review/Review';
import Attractions from '../Attractions/Attractions';



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
            <Review />
            <MailList />
        </>
    );
};

export default Home;