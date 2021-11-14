import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';
import DisplayReview from '../DisplayReview/DisplayReview';
import './Home.css';
import PressRelease from '../PressRelease/PressRelease';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeBanner></HomeBanner>
            <Products></Products>
            <PressRelease></PressRelease>
            <DisplayReview></DisplayReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;