import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, time, } = booking;
    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: "" }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const handleOnBlure = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
        e.preventDefault()
    }

    const handleBookingSubmit = e => {
        //colect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // console.log(appointment);
        //send to the server
        fetch('https://dry-harbor-11353.herokuapp.com/appointments', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setBookingSuccess(true)
                    handleBookingClose()
                }
                // console.log(result);
            })
        e.preventDefault()
    }

    return (
        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography sx={{ textAlign: 'center', color: "#1BB7E1" }} id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>

                <form onSubmit={handleBookingSubmit}>
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        InputProps={{
                            readOnly: true,
                        }}
                        id="outlined-read-only-input"
                        label="time"
                        defaultValue={time}
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-helperText"
                        type="name"
                        onBlur={handleOnBlure}
                        defaultValue={user?.displayName}
                        name="patientName"
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-email"
                        type="email"
                        onBlur={handleOnBlure}
                        defaultValue={user?.email}
                        name="email"
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-phone-number"
                        placeholder='Phone Number'
                        onBlur={handleOnBlure}
                        name='phone'
                        variant="standard"
                        required
                    />
                    <TextField

                        sx={{ width: '90%', m: 1 }}
                        id="outlined-read-only-input"
                        defaultValue={date.toLocaleDateString()}
                        variant="standard"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <Button type="submit" variant="contained" style={{ backgroundColor: "#1BB7E1" }}>Submit</Button>
                </form>

            </Box>
        </Modal>
    );
};

export default BookingModal;