import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51JwniYApcXzxd6l8DztBL3Xzly0E80lLUN6lrpIrqsnRBPSaD82J9yFq7gx84dXmeY8E1Jfafo9dGxs7ntOrpZEJ00AMK8ylTm');

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState({})

    useEffect(() => {
        fetch(` https://dry-harbor-11353.herokuapp.com/appointment/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Please Payment For {appointment.patientName}  For :{appointment.serviceName}
            </h2>
            <h4 style={{ textAlign: 'center' }}>Pay: ${appointment.price}
            </h4>

            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;