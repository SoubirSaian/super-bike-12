import React from 'react';
import  Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import './MyReview.css';


const MyReview = (props) => {
    const{name,review,rating} = props.review;

    return (
        <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={4} sx={{height: '70%',py: 3}}>
                    <Typography variant="h5" sx={{color:'info.main',fontWeight:600}} gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {review}
                    </Typography>
                    <Rating name="read-only" value={parseInt(rating)} readOnly />
              </Paper> 
          </Grid>
    );
};

export default MyReview;