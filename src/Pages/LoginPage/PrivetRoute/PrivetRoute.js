import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    let location = useLocation();

    if (isLoading) {
        return <Box sx={{ textAlign: "center", mt: 5 }}><CircularProgress /></Box>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivetRoute;