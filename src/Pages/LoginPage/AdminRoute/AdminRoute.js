import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const location = useLocation()
    const { user, admin, isLoading } = useAuth()

    if (isLoading) {
        return <Box sx={{ textAlign: "center", mt: 5 }}><CircularProgress /></Box>
    }
    if (user.email && admin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} />
};

export default AdminRoute;