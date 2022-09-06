import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Booking = () => {
    const [user] = useAuthState(auth);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getBookings = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/booking?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setBookings(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getBookings();

    }, [user]);
    return (
        <div className='w-50 mx-auto'>
            <h2>Your Bookings: {bookings.length}</h2>
            {
                bookings.map(booking =><div key={booking._id}>
                    <p>{booking.email} : {booking.service}</p>
                </div>)
            }
        </div>
    );
};

export default Booking;