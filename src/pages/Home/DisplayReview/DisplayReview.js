import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MyReview from '../MyReview/MyReview';
import './DisplayReview.css';

        //   user review display component 
const DisplayReview = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://enigmatic-mesa-30035.herokuapp.com/user_review')
            .then(res => res.json())
            .then(data => setReviews(data));
    },[]);
    // console.log(reviews);

    return (
        <Box>
            <Typography variant="h4" sx={{mx: 4,color: '#d50000'}} gutterBottom>
                    Users Reviews 
            </Typography>
             <Grid container spacing={2} rowSpacing={2} sx={{mt:2,mb: 3}}>
                {
                reviews &&  reviews.map(review => <MyReview key={review._id} review={review}></MyReview>)
                }
             </Grid>
        </Box>
    );
};

export default DisplayReview;