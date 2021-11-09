import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Doctor from '../../../images/doctor.png'
import Bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


//css style-------------
const appointmentBanner = {
    background: `url(${Bg})`,
    backgroundColor: 'rgba(45, 59, 81,.8 )',
    backgroundBlendMode: ' darken, luminosity',
    marginTop: '150px',

}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1, mb: 3 }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '80%', marginTop: '-110px', }}
                        src={Doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: "center",
                    textAlign: 'left',
                }}>
                    <Box sx={{ p: 2 }}>
                        <Typography variant="h6 " sx={{ fontWeight: 500, }}
                            style={{ color: "#1BB7E1" }}>
                            Appoinment
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 600, color: 'white', mt: 2 }}>
                            Make A Appoinment <br /> Today
                        </Typography>
                        <Typography variant="h6" sx={{ color: "white", fontSize: "16px", my: 2 }}>
                            Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#1BB7E1" }}>Learn More</Button>
                    </Box>

                </Grid>
            </Grid>
        </Box >
    );
};

export default AppointmentBanner;