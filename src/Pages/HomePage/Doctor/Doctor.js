import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';


const Doctor = ({ doctor }) => {
    const { name, email, image } = doctor;
    return (
        <Box sx={{ m: 1, boxShadow: "1px 1px 3px 1px gray" }}>
            <CardMedia
                sx={{ width: 'auto', height: '200px', m: 'auto' }}
                component="img"
                image={`data:image/jpeg;base64,${image}`}
                alt="Paella dish"
            />

            <Box sx={{ px: 4, py: 1, backgroundColor: "black", color: 'white' }}>
                <hr />
                <Typography variant="h4">
                    {name}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 400, fontSize: '16px' }}>
                    {email}
                </Typography>
            </Box>
        </Box>
    );
};

export default Doctor;