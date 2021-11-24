import { Button, Input, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddDoctor = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)

        fetch(' https://dry-harbor-11353.herokuapp.com/doctors', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor Added Successfully')
                    formData.append = ''
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>

            <Box sx={{ textAlign: 'center' }}>
                <h2>Add Doctor</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        sx={{ width: '50%' }}
                        label="Name"
                        required
                        onChange={e => setName(e.target.value)}
                        variant="standard" />
                    <br />
                    <TextField
                        sx={{ width: '50%' }}
                        label="Email"
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                        required
                        variant="standard" />
                    <br />
                    <Input
                        sx={{ width: '50%' }}
                        required
                        accept="image/*"
                        type="file"
                        onChange={e => setImage(e.target.files[0])}
                    />
                    {success && <p style={{ color: "green" }}>{success}</p>}
                    <br />

                    <Button
                        sx={{ width: '20%', mt: 2 }}
                        type='submit'
                        variant="contained">
                        Add Doctor
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default AddDoctor;