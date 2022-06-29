import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center p-5 mt-5 bg-light ' variant="light">
            <p><small>copyright @ {year}</small></p>
        </footer>
    );
};

export default Footer;