import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
// import Footer from '../shared/Footer/Footer';
// import Header from '../shared/Header/Header';
import './ProductDetails.css';

const ProductDetails = () => {
    const {productId} = useParams();
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('/allBikes.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[]);

    const singleProduct = products.find(product => product.id === parseInt(productId));
    // console.log(singleProduct);
    
    return (
        <div>
            {/* <Header></Header> */}
            {
                singleProduct && <PlaceOrder key={singleProduct.id} product={singleProduct}></PlaceOrder>
            }
            {/* <Footer></Footer> */}
        </div>
    );
};

export default ProductDetails;