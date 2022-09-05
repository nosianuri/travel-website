import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    // if(user){
    //     console.log(user);
    // }
    const handlePlaceOrder = event => {
        event.preventDefault();
        const booking = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://fierce-waters-93331.herokuapp.com/booking', booking)
            .then(response => {
                // console.log(response);
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Checkout your booking: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='name' required readOnly />
                <input className='w-100 mb-2' type="email" value={user?.email} name='email' placeholder='email' required readOnly />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='service' required readOnly />
                <input className='w-100 mb-2' type="text" autoComplete='off' name='address' placeholder='address' required />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required />
                <input className='btn btn-primary' type="submit" value="Place Booking" />
            </form>
        </div>
    );
};

export default Checkout;