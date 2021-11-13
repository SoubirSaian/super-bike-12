import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyReview from '../MyReview/MyReview';
import './DisplayReview.css';

const DisplayReview = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/user_review')
            .then(res => res.json())
            .then(data => setReviews(data));
    },[]);
    console.log(reviews);

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                    Users Reviews 
            </Typography>
             {
                 reviews.map(review => <MyReview key={review._id} review={review}></MyReview>)
             }
        </Box>
    );
};

export default DisplayReview;