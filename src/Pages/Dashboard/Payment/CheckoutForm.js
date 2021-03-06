import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe, } from '@stripe/react-stripe-js'
import useAuth from '../../../Hooks/useAuth';
import { CircularProgress } from '@mui/material';

const CheckoutForm = ({ appointment }) => {
    const { price, patientName, _id } = appointment
    const { user } = useAuth()

    const stripe = useStripe()
    const elements = useElements()

    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [success, setSuccess] = useState('')


    useEffect(() => {
        fetch(' https://dry-harbor-11353.herokuapp.com/create-payment-intent', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price])



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message);
            setSuccess('')
        }
        else {
            setError('')

            console.log(paymentMethod);
        }
        //payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user.email,
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        }
        else {
            setError('')
            setSuccess('Your Payment successfully done')
            console.log(paymentIntent);
            setProcessing(false)

            /* == Save To Database */
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0],
            }
            fetch(` https://dry-harbor-11353.herokuapp.com/appointments/${_id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })

        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div style={{ textAlign: 'center' }}>
                    {processing ? <CircularProgress /> : <button type="submit" disabled={!stripe || success}>
                        Pay ${price}
                    </button>}
                </div>
            </form>
            {
                error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
            }
            {
                success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>
            }
        </div>
    );
};

export default CheckoutForm;