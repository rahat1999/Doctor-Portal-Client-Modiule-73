import React from 'react';
import chair from "../../../images/chair.png"
import bg from "../../../images/bg.png"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';


const bannerBackround = {
    background: `url(${bg})`,
    minHeight: '500px',
    height: "100vh"


}

const varticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '450px',
    // border: '1px solid red',

}



const Banner = () => {
    return (
        <Box >
            <Box style={bannerBackround}>
                <Container sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item style={{ ...varticalCenter, textAlign: 'left' }} xs={12} md={6} styel={{ textAlign: "left" }} >
                            <Box>
                                <Typography variant="h3">
                                    Your New Smile <br />
                                    Starts Here
                                </Typography>
                                <Typography variant="h6" sx={{ my: 3, fontSize: 14, color: 'gray', fontWeight: 300 }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet reiciendis, minima reprehenderit officiis delectus molestias repellendus cumque maiores a!
                                </Typography>
                                <Button variant="contained" style={{ backgroundColor: "#1BB7E1" }}>
                                    GET APPOINTMENT
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} style={varticalCenter}>
                            <img src={chair} alt="Chair" style={{
                                width: "80%"
                            }} />
                        </Grid>
                    </Grid>
                </Container>

            </Box>

            {/* ----------------Banner Card /Icons-------------- */}

            <Container>
                <Grid container spacing={2} style={{ marginTop: "-40px", color: 'white', }}>
                    <Grid item xs={12} md={4} >
                        <Box style={{
                            borderRadius: "10px",
                            padding: ' 10px 0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            backgroundColor: '#1BB7E1'
                        }} >
                            <AccessTimeIcon sx={{ fontSize: 45 }} />

                            <Box style={{ textAlign: 'left' }}>
                                <Typography variant="h6" sx={{
                                    fontWeight: 500
                                }}>
                                    Opening Hours
                                </Typography>
                                <Typography variant="h6" sx={{
                                    fontSize: 14,
                                    fontWeight: 400
                                }}>
                                    Lorem ipsum, dolor sit amet consectetur
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Box style={{
                            borderRadius: "10px",
                            padding: ' 10px 0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            backgroundColor: 'rgba(45, 59, 81,.8 )',
                        }} >
                            <RoomOutlinedIcon sx={{ fontSize: 45 }} />

                            <Box style={{ textAlign: 'left' }}>
                                <Typography variant="h6" sx={{
                                    fontWeight: 500
                                }}>
                                    Visit Us Now
                                </Typography>
                                <Typography variant="h6" sx={{
                                    fontSize: 14,
                                    fontWeight: 400
                                }}>
                                    dhanmondi/32,Dhaka,Bangladesh
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Box style={{
                            borderRadius: "10px",
                            padding: ' 10px 0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            backgroundColor: '#1BB7E1'
                        }} >
                            <WifiCalling3OutlinedIcon sx={{ fontSize: 45 }} />

                            <Box style={{ textAlign: 'left' }}>
                                <Typography variant="h6" sx={{
                                    fontWeight: 500
                                }}>
                                    Contact With Us
                                </Typography>
                                <Typography variant="h6" sx={{
                                    fontSize: 14,
                                    fontWeight: 400
                                }}>
                                    +0088747663743
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>



                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;