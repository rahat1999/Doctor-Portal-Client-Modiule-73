import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const { token } = useAuth()

    const handleOnBlur = (e) => {
        const email = e.target.value;
        setEmail(email)
    }

    const handleAdminSubmit = (e) => {
        const user = { email };
        fetch('https://dry-harbor-11353.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                    // console.log(data);
                    setEmail('');
                }

            })

        e.preventDefault()

    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Make Admin</h2>

            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <Button
                    variant="contained"
                    type='submit'> Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Admin Made Successfully</Alert>
            }


        </div>
    );
};

export default MakeAdmin;