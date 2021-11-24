import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

const Bookings = ({ booking, date, setBookingSuccess }) => {
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (
        <>
            <Grid item xs={8} sm={6} md={4} sx={{ textAlign: "center", mb: 5 }}>

                <Paper elevation={3} sx={{ py: 4 }} >
                    <Typography style={{ color: "#1BB7E1", fontWeight: '600px' }}
                        gutterBottom variant="h5" component="div">
                        {booking.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Price: ${booking.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {booking.time}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Available Space: {booking.space}
                    </Typography>
                    <br />
                    <Button onClick={handleBookingOpen} variant="contained" style={{ backgroundColor: "#1BB7E1" }}>Book Appointment</Button>
                </Paper>
            </Grid >
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Bookings;