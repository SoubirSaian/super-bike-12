import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './AllProduct.css';
import { Link } from 'react-router-dom';

const AllProduct = (props) => {
    const {id,name,img,description,price} = props.allproduct;
    return (
        <Grid item sx={{
            // some styles
            ":hover": {
              boxShadow: 6,
            },
          }} xs={12} md={6} lg={4} >
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image= {img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography color="#3f51bf" gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {description.slice(0,150)}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{color:'#ff5722', m: 2}}>
                    Price: {price} tk.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/${id}`}>
                        <Button variant="contained">Order</Button>
                    </Link>
                    
                </CardActions>
            </Card>
        </Grid>
    );
};

export default AllProduct;