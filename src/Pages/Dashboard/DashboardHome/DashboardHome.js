import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender'
import Appointments from '../Appointments/Appointments';
import { Box } from '@mui/system';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    // console.log(date);
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4}>
                    <Calender
                        date={date}
                        setDate={setDate}
                    ></Calender>
                </Grid>

                <Grid item xs={12} sm={8} md={8}>
                    <Appointments
                        date={date}></Appointments>

                </Grid>

            </Grid>
        </Box>
    );
};

export default DashboardHome;