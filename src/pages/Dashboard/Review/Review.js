import TextField from '@mui/material/TextField';
import  Box  from '@mui/material/Box';
import React, { useState } from 'react';
import './Review.css';
import  Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Review = () => {
    const [name,setName] = useState('');
    const [review,setReview] = useState('');
    const [rating,setRating] = useState('');

    const userNameInput= e =>{
        setName(e.target.value);
    }
    const reviewInput= e =>{
        setReview(e.target.value);
    }
    const ratingInput= e =>{
        setRating(e.target.value);
    }

    const handleUserReview = e =>{
        const reviewData = {name,review,rating};
        console.log(reviewData);
       
        setName('');
        setReview('');
        setRating('');
        
        e.preventDefault();
    }
    return (
         <Box>
             <Typography variant="h4" gutterBottom>
                Write a review of your Experience
             </Typography>
             <form sx={{my: 3}} onSubmit={handleUserReview}>
                 <TextField
                    sx={{width: '50%',m: 1}}
                    name="username"
                    onBlur={userNameInput}
                    type="text"
                    label="your name"
                    variant="outlined"
                 />
                 <br />
                 <TextField
                    sx={{width: '50%',m: 1}}
                    onBlur={reviewInput}
                    label="Your review"
                    multiline
                    rows={4}
                
                  />
                  <br />
                 <TextField
                    sx={{width: '50%',m: 1}}
                    multiline
                    name="review"
                    onBlur={ratingInput}
                    type="number"
                    label="your rating(1 to 5)"
                    variant="outlined"
                 />
                 <br />
                 <Button type="submit" variant="contained">Submit your review</Button>
             </form>
         </Box>
    );
};

export default Review;