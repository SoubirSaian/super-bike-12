import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React from 'react';
import './HomeBanner.css';
import Typography from '@mui/material/Typography';

import bikeImg from '../../../images/royal-enfield.jpg';

const HomeBanner = () => {
    return (
        <Box className="home">
            <img style={{width: '100%',height: '700px'}} src={bikeImg} alt="" />
            {/* <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                    <Typography variant="h3" gutterBottom>
                        Would you like to buy a new bike
                    </Typography>

                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <img style={{width: '100%',p: 2}} src={bikeImg} alt="" />
                </Grid>
            </Grid> */}
        </Box>
    );
};

export default HomeBanner;