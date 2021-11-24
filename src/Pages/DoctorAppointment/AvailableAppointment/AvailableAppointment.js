
import { Alert, Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Bookings from '../Bookings/Bookings';

const bookings = [
    {
        id: 1,
        name: "Teeth Orthodontics",
        time: '8:00 AM - 9.00 AM',
        price: 20,
        space: 10,
    },
    {
        id: 2,
        name: "Cosmetic Dentistry",
        time: '10:05 AM - 11.30 AM',
        price: 24,
        space: 8,
    },

    {
        id: 3,
        name: "Teeth Cleaning",
        time: '5.00 PM - 6.30 PM',
        price: 17,
        space: 10,
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: '4.00 PM - 4.45 PM',
        price: 16,
        space: 10,
    },
    {
        id: 5,
        name: "Pediatric Dental",
        time: '7.00 PM - 8.00 PM',
        price: 19,
        space: 5,
    },
    {
        id: 6,
        name: "Oral Surgery",
        time: '9.00 PM - 10.00 PM',
        price: 22,
        space: 10,
    },
]



const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container sx={{ my: 5 }}>
            <Typography variant="h5" sx={{ my: 5 }} style={{ color: "#1BB7E1", fontWeight: "600", textAlign: 'center' }}>
                Available Appointment on:
                <Typography variant='text'
                    sx={{
                        backgroundColor: 'black',
                        color: 'white'
                    }}>
                    {date.toDateString()}
                </Typography>
            </Typography>
            {
                bookingSuccess && <Alert
                    sx={{ width: '50%', margin: "auto", }}
                    action={
                        <Button onClick={() => setBookingSuccess(false)} color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This is a success alert — check it out!
                </Alert>
            }
            <br />
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Bookings key={booking.id}
                        date={date}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess} />)
                }

            </Grid>

        </Container >
    );
};

export default AvailableAppointment;