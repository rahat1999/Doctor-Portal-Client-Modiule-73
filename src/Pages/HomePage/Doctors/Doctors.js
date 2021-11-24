import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import Doctor from '../Doctor/Doctor';
import Typography from '@mui/material/Typography';
const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    console.log(doctors[0]);
    useEffect(() => {
        fetch(' https://dry-harbor-11353.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <Container sx={{ my: 9 }}>
                <Typography variant='h4' sx={{ textAlign: "center", fontWeight: 600, my: 5 }}>Our Doctors : {doctors.length}
                    <hr style={{ width: "30%", margin: "auto", padding: "2px", backgroundColor: "#1BB7E1" }} />
                </Typography>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {
                            doctors.map(doctor =>
                                <Grid item key={doctor._id} xs={12} sm={6} md={4} >
                                    <Doctor

                                        doctor={doctor}
                                    ></Doctor>
                                </Grid>)
                        }
                    </Grid>
                </Box>

            </Container>
        </div>
    );
};

export default Doctors;