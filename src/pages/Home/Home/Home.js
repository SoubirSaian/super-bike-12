import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';
import DisplayReview from '../DisplayReview/DisplayReview';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeBanner></HomeBanner>
            <Products></Products>
            <DisplayReview></DisplayReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;