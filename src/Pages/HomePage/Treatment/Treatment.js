import { Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png'
const Treatment = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0} sx={{ alignItems: 'center', my: 5 }}>
                    <Grid item xs={12} md={4}>
                        <CardMedia
                            component="img"
                            style={{ height: 'auto', width: "350px", margin: "auto" }}
                            image={treatment}
                            alt="Paella dish"
                        />
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ pr: 15 }}>
                        <Typography variant="h4" sx={{ fontWeight: 500 }}>Exceptional Dental <br /> Care ,on Your Terms</Typography>
                        <Typography sx={{ my: 5 }} variant="h6" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum est facilis expedita enim error repellat deserunt voluptas magnam. Facilis, repellat! Lorem ipsum dolor sit amet.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#1BB7E1" }}>
                            Learn More
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Treatment;