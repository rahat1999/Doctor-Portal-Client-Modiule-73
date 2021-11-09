import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import footer from '../../../images/footer-bg.png'
import { Button, Container, Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';


const footerBg = {
    backgroundImage: `url(${footer})`,
    backgorundSize: 'cover',
    backgroundPosition: "center ",
}
const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 10 }} style={footerBg}>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center', color: 'gray' }}>
                    <Grid item xs={12} sm={6} md={3} >
                        <Box sx={{ px: 2 }}>
                            <Typography>
                                Emargincey Dental care
                            </Typography>
                            <Typography sx={{ my: 1 }}>
                                Check Up
                            </Typography>
                            <Typography>
                                Treatmet of Personal Disease
                            </Typography>
                            <Typography sx={{ my: 1 }}>
                                Tooth Extraction
                            </Typography>
                            <Typography>
                                checkup
                            </Typography>
                            <Typography sx={{ my: 1 }}>
                                checkup
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ px: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 500, color: "#1BB7E1" }}>
                                Services
                            </Typography>
                            <Typography sx={{ mt: 3 }}>
                                Emargincey Dental care
                            </Typography>
                            <Typography sx={{ my: 1 }}>
                                Check Up
                            </Typography>
                            <Typography>
                                Treatmet of Personal Disease
                            </Typography>
                            <Typography sx={{ my: 1 }}>
                                Tooth Extraction
                            </Typography>
                            <Typography>
                                checkup
                            </Typography>
                            <Typography sx={{ my: 1 }}>
                                checkup
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ px: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 500, color: "#1BB7E1" }}>
                                Our Health
                            </Typography>
                            <Typography sx={{ mt: 3 }}>
                                Emargincey Dental care
                            </Typography>
                            <Typography sx={{ my: 1 }}>
                                Check Up
                            </Typography>
                            <Typography>
                                Treatmet of Personal Disease
                            </Typography>
                            <Typography sx={{ my: 1 }}>
                                Tooth Extraction
                            </Typography>
                            <Typography>
                                checkup
                            </Typography>
                            <Typography sx={{ my: 1 }}>
                                checkup
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ px: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 500, color: "#1BB7E1" }}>
                                Our Address
                            </Typography>
                            <Typography sx={{ mt: 3 }}>
                                New Yourk - 101010 Handson <br /> Yeard
                            </Typography>
                            <Box sx={{ my: 3 }}>
                                <Button variant="contained" sx={{ backgroundColor: "#1BB7E1", borderRadius: "50%" }}>
                                    <FacebookOutlinedIcon />
                                </Button>
                                <Button variant="contained" sx={{ backgroundColor: "#1BB7E1", borderRadius: "50%", mx: 1 }}>
                                    <GoogleIcon />
                                </Button>
                                <Button variant="contained" sx={{ backgroundColor: "#1BB7E1", borderRadius: "50%" }}>
                                    <TwitterIcon />

                                </Button>


                            </Box>
                            <Typography sx={{ mt: 3 }}>
                                Call Now
                            </Typography>
                            <Button variant="contained" sx={{
                                backgroundColor: "#1BB7E1", marginTop: '8px'
                            }}>
                                +009863467
                            </Button>

                        </Box>
                    </Grid>

                </Grid>
                <Typography sx={{ textAlign: 'center', mt: 4, mb: 2, fontWeight: 400, color: 'gray', fontSize: "16px" }}>
                    Copyight 2022 &copy; All Rights Reserved
                </Typography>
            </Container>
        </Box >
    );
};

export default Footer;