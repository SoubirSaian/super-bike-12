import React, { useEffect, useState } from 'react';
import  Container  from '@mui/material/Container';
import  Grid  from '@mui/material/Grid';
import Product from '../Product/Product';
import  Typography  from '@mui/material/Typography';
import './Products.css';
import { Link } from 'react-router-dom';
import  Button  from '@mui/material/Button';

            //  homepage products component 
const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://enigmatic-mesa-30035.herokuapp.com/all_bike')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[]);

    return (
            <Container sx={{my:8}}>
             <Typography variant="h3" color="#f44366" gutterBottom>
                 Our collection
             </Typography>
             <hr />
             <Grid container sx={{mt:2}} rowSpacing={6} spacing={3}>
                {
                    products.slice(0,6).map(product => <Product key={product._id} product={product}></Product>)
                }
             </Grid>

             <Link to="/allproducts" sx={{textDecoration: 'none'}}>
                <Button variant="contained" sx={{m:6}}> For More Choice Click Here</Button>
             </Link>
         </Container>
    
    );
};

export default Products;