import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';

import fluroide from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services = [
    {
        name: "Flouride Treatement",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi minus sint? Aliquid necessitatibus culpa in maxime a repudiandae odio. ",
        img: fluroide
    },
    {
        name: "Cavity Filling",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi minus sint? Aliquid necessitatibus culpa in maxime a repudiandae odio. ",
        img: cavity
    },
    {
        name: "Treeth Whitening",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi minus sint? Aliquid necessitatibus culpa in maxime a repudiandae odio. ",
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, mt: 2 }} style={{ color: "#1BB7E1" }} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: 600, my: 2 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        >

                        </Service>)
                    }
                </Grid>
            </Container>
        </Box>

    );
};

export default Services;