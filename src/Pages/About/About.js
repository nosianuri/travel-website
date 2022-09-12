import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About = () => {
    return (
        <div>
        <Helmet>
            <title>About - Travel Master</title>
        </Helmet>
            <h2>This is about us</h2>
        </div>
    );
};

export default About;