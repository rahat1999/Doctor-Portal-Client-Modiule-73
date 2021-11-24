import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Appointments = ({ date }) => {

    const { user, token } = useAuth();
    const [appointments, setAppointments] = useState([])

    // console.log(user.email)
    useEffect(() => {
        const url = `https://dry-harbor-11353.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`;
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(result => setAppointments(result))
    }, [date, user.email, token])

    return (
        <Box>
            <h2>Appointments :  {appointments.length}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row, index) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell align="left">
                                    {index + 1}
                                </TableCell>
                                <TableCell align="left">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="left">
                                    {row.time}
                                </TableCell>
                                <TableCell align="left">
                                    {row.serviceName}
                                </TableCell>
                                <TableCell align="left">
                                    {row?.payment ? "Paid" :
                                        <Link to={`/dashboard/payment/${row._id}`}>
                                            <Button>Pay</Button>
                                        </Link>}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Appointments;