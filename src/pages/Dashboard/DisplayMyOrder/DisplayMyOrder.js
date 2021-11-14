import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import './DisplayMyOrder.css';

const DisplayMyOrder = (props) => {
    const {product,productPrice,userEmail,userName} = props.myorder;

    return (
         <Box sx={{display: 'flex',border: 1,borderRadius: '5px',m: 1}}>
             <Typography variant="h6" sx={{m: 2}}>
                {product}
             </Typography>
             <Typography variant="h6" sx={{m: 2}}>
                {userName}
             </Typography>
             <Typography variant="h6" sx={{m: 2}}>
                {userEmail}
             </Typography>
             <Typography variant="h6" sx={{m: 2}}>
                {productPrice}
             </Typography>
         </Box>
    );
};

export default DisplayMyOrder;