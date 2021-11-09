import { Box } from '@mui/system';
import React from 'react';
import contactBg from '../../../images/appointment-bg.png'
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';


const contactBanner = {
    background: `url(${contactBg})`,
    backgroundColor: 'rgba(45, 59, 81,.8 )',
    backgroundBlendMode: ' darken, luminosity',
    marginTop: "70px ",
    height: '100vh'
}
const Contacts = () => {

    const handleContact = (e) => {
        alert('Sumitted')
        e.preventDefault()
    }

    return (
        <Box style={contactBanner} sx={{ py: 5, }}>
            <Container>
                <Box sx={{ mb: 5 }}>
                    <Typography variant="h6" sx={{ textAlign: "center", color: "#1BB7E1" }}>
                        Contact Us
                    </Typography>
                    <Typography variant="h5" sx={{ textAlign: "center", fontWeight: 600, color: 'white' }}>
                        Always Connect With Us
                    </Typography>
                </Box>

                <Box style={{ width: "60%", height: 'auto', margin: 'auto' }}>
                    <form onSubmit={handleContact}>
                        <TextField
                            sx={{ width: '90%', pt: 1, m: 1, backgroundColor: "white" }}
                            id="email"
                            // defaultValue='Email Address'
                            label='Email Address*'
                            type="Email"
                            variant="standard"
                        />

                        <TextField
                            sx={{ width: '90%', pt: 1, m: 1, backgroundColor: "white" }}
                            id="subject"
                            type="Subject"
                            label="Subject*"
                            variant="standard"
                        />

                        <textarea
                            style={{
                                fontFamily: 'sans-serif',
                                width: '90%',
                                outline: '0px',
                                paddingTop: '8px',
                                margin: "4px",
                                backgroundColor: "white",
                                borderRadius: "6px"
                            }}
                            id="outlined-massage-static"
                            placeholder="Your massage*"
                            multiline='true'
                            rows={10}
                        />
                        <Box sx={{ textAlign: "center", }}>
                            <Button type="submit" variant="contained" sx={{ backgroundColor: "#1BB7E1", px: 5, my: 2 }}>Submit</Button>
                        </Box>
                    </form>
                </Box>
            </Container>

        </Box>
    );
};

export default Contacts;