import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'
const Login = () => {
    const { user, isLoading, authError, loginWithEmailAndPassword, loginWithGoogle } = useAuth()
    const [loginData, setLoginData] = useState({})


    const location = useLocation();
    const history = useHistory();

    const handleOneChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handaleLoginSubmit = (e) => {
        loginWithEmailAndPassword(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleLogin = (e) => {
        loginWithGoogle(location, history)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: 8, }}>

                    <Typography variant="body1" sx={{ textAlign: 'center', width: '75%', m: 1, fontWeight: 600 }}>
                        Login
                    </Typography>
                    {isLoading && <Box sx={{ textAlign: "center" }}>
                        <CircularProgress />
                    </Box>}
                    {!isLoading && <form onSubmit={handaleLoginSubmit}>
                        <TextField
                            required
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label=" Your Email"
                            onChange={handleOneChange}
                            name="email"
                            type="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type='password'
                            name="password"
                            onChange={handleOneChange}
                            label=" Your Password"
                            variant="standard" />

                        <Button variant="contained" type="submit" sx={{ width: '75%', m: 1, backgroundColor: '#1BB7E1' }}>LogIn</Button>

                    </form>}
                    {
                        user?.email && <Alert severity="success"> User Registered successfulley!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                    {
                        user?.email ? '' : <NavLink to='/register'>
                            <Button variant='text' sx={{ width: '75%', m: 1 }} >Are You New user?Please Register</Button>
                        </NavLink>
                    }
                    <Box sx={{ textAlign: 'center', width: '75%', m: 1 }}>
                        <p>----------------------------</p>
                        <Button onClick={handleGoogleLogin} sx={{ backgroundColor: "#1BB7E1" }} variant="contained">Google Login</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img
                        style={{ width: '80%' }}
                        src={login} alt="login-banner" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;