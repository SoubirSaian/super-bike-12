import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
         <div className="nav-bar">
             <div>
                <h2><i>Super Bike</i></h2>
             </div>
             <ul>
                 <li><Link to="/home">Home</Link></li>
                 <li><Link to="/allproducts">All Product</Link></li>
                 <li><Link to="/dashboard">Dashboard</Link></li>
                 <li><Link to="/register">Register</Link></li>
                 <li><Link to="/login">Log In</Link></li>
             </ul>
         </div>
    );
};

export default Header;