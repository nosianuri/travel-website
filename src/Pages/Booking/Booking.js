import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Booking = () => {
    const [user] = useAuthState(auth);
    const [booking, setBookings] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getBookings = async () => {
            const email = user?.email;
            const url = `https://fierce-waters-93331.herokuapp.com/booking?email=${email}`;
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
        <div>
            <h2>Your Bookings: {booking.length}</h2>
            {
                setBookings.map(booking =><div key={ondragover._id}>
                    <p>{booking.email} : {ondragover.service}</p>
                </div>)
            }
        </div>
    );
};

export default Booking;