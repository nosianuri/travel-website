import React from 'react';
import Services from '../Services/Services';
import Gudiers from '../Guiders/Gudiers';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import MailList from '../Maillist/MailList';
// import Feature from '../Feature/Feature';
// import Searchbar from '../Search/Searchbar';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home - Travel Master</title>
        </Helmet>
            <Banner></Banner>
            <Services></Services>
            <Gudiers></Gudiers>
            <MailList />
        </>
    );
};

export default Home;