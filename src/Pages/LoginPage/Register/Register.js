import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import login from '../../../images/login.png'
import useAuth from '../../../Hooks/useAuth';
import { Box } from '@mui/system';

const Register = () => {
    const [registerData, setRegisterData] = useState({})
    const { user, authError, registerUser, isLoading } = useAuth()
    // console.log(registerData)

    const navigate = useNavigate()

    const handleOneBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData }
        newRegisterData[field] = value;
        setRegisterData(newRegisterData)
    }

    const handaleLoginSubmit = (e) => {
        if (registerData.password !== registerData.password2) {
            alert('Your Password did not match')
            return;
        }
        registerUser(registerData.email, registerData.password, registerData.name, navigate)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: 8 }}>
                    <Typography variant="body1" sx={{ textAlign: "center", width: '75%', fontWeight: 600 }}>
                        Register
                    </Typography>
                    {
                        !isLoading &&
                        <form onSubmit={handaleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                required
                                label=" Your Name"
                                name="name"
                                onBlur={handleOneBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                required
                                label=" Your Email"
                                type="Email"
                                name="email"
                                onBlur={handleOneBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type='password'
                                required

                                name="password"
                                onBlur={handleOneBlur}
                                label=" Password"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type='password'
                                required
                                name="password2"
                                onBlur={handleOneBlur}
                                label=" Re-Type Password"
                                variant="standard" />

                            <Button variant="contained" type="submit" sx={{ width: '75%', m: 1, backgroundColor: '#1BB7E1' }}>Register</Button>

                        </form>
                    }
                    {isLoading && <Box sx={{ textAlign: "center" }}>
                        <CircularProgress />
                    </Box>}
                    {user?.email ? <Alert severity="success"> User Registered successfulley!</Alert> : <><NavLink to='/login'>
                        <Button variant='text' sx={{ width: '75%', m: 1 }} >Already Registered? Please Login</Button>
                    </NavLink></>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img
                        style={{ width: '80%' }}
                        src={login} alt="login-banner" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Register;