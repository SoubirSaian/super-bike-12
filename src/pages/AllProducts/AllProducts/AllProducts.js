import React, { useEffect, useState } from 'react';
// import Footer from '../../shared/Footer/Footer';
// import Header from '../../shared/Header/Header';
import  Container  from '@mui/material/Container';
import  Grid  from '@mui/material/Grid';
import  Typography  from '@mui/material/Typography';
import AllProduct from '../AllProduct/AllProduct';
import './AllProducts.css';

const AllProducts = () => {
    const [allproducts,setAllProducts] = useState([]);

    useEffect(()=>{
        fetch('https://enigmatic-mesa-30035.herokuapp.com/all_bike')
            .then(res => res.json())
            .then(data => setAllProducts(data));
    },[]);

    return (
        <div>
            {/* <Header></Header> */}
            <Container sx={{my: 6}}>
                <Typography variant="h4" sx={{mt: 4,mb:8,color: '#2195f3'}}>
                    All of our Bikes
                </Typography>
                <Grid container rowSpacing={6} spacing={2}>
                    {
                        allproducts.map(allproduct => <AllProduct key={allproduct._id} allproduct={allproduct}></AllProduct>)
                    }
                </Grid>
            </Container>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default AllProducts;