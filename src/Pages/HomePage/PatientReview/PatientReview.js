import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Container, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import quats from '../../../images/quotation.png'
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'





const PatientReview = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="h6 " sx={{ fontWeight: 500, }}
                                style={{ color: "#1BB7E1" }}>
                                Testmonial
                            </Typography>
                            <Typography variant="h4" sx={{ fontWeight: 600, mt: 2 }}>
                                What's Our Patients <br /> Says
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box >
                            <img style={{ width: "150px" }} src={quats} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* ===================================== */}
            <Box sx={{ flexGrow: 1, my: 5 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4} >
                        <Box sx={{ boxShadow: 2, p: 3 }}>
                            <Typography variant="h6 " sx={{ fontWeight: 500, textAlign: 'left' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus animi ratione accusantium quos ad porro quis voluptatem ullam consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nobis.
                            </Typography>
                            <Box style={{
                                marginTop: '40px',
                                borderRadius: "5px",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                            }} >
                                <CardMedia
                                    component="img"
                                    style={{ width: "60px", height: '60px' }}
                                    image={people1}
                                    alt="green iguana"
                                />

                                <Box style={{ textAlign: 'left' }}>
                                    <Typography variant="h6" sx={{
                                        fontWeight: 500
                                    }}>
                                        Wingson Herry
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        fontSize: 14,
                                        color: "gray"
                                    }}>
                                        Californiya
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Box sx={{ boxShadow: 2, p: 3 }}>
                            <Typography variant="h6 " sx={{ fontWeight: 500, textAlign: 'left' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus animi ratione accusantium quos ad porro quis voluptatem ullam consequuntur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, et.
                            </Typography>
                            <Box style={{
                                marginTop: '40px',
                                borderRadius: "5px",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                            }} >
                                <CardMedia
                                    component="img"
                                    style={{ width: "60px", height: '60px' }}
                                    image={people2}
                                    alt="green iguana"
                                />

                                <Box style={{ textAlign: 'left' }}>
                                    <Typography variant="h6" sx={{
                                        fontWeight: 500
                                    }}>
                                        Wingson Herry
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        fontSize: 14,
                                        color: "gray"
                                    }}>
                                        Californiya
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}  >
                        <Box sx={{ boxShadow: 2, p: 3 }}>
                            <Typography variant="h6 " sx={{ fontWeight: 500, textAlign: 'left' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus animi ratione accusantium quos ad porro quis voluptatem ullam consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, aspernatur?
                            </Typography>
                            <Box style={{
                                marginTop: '40px',
                                borderRadius: "5px",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                            }} >
                                <CardMedia
                                    component="img"
                                    style={{ width: "60px", height: '60px' }}
                                    image={people3}
                                    alt="green iguana"
                                />
                                <Box style={{ textAlign: 'left' }}>
                                    <Typography variant="h6" sx={{
                                        fontWeight: 500
                                    }}>
                                        Wingson Herry
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        fontSize: 14,
                                        color: "gray"
                                    }}>
                                        Californiya
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>




                </Grid>
            </Box>

        </Container>
    );
};

export default PatientReview;