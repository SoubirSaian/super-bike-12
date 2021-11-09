import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
         <nav className="nav-bar">
             <div>
                <h2><i>Super Bike</i></h2>
             </div>
             <ul>
                 <li><Link to="/home">Home</Link></li>
                 <li><Link to="/allproducts">All Product</Link></li>
                 <li><Link to="/dashboard">Dashboard</Link></li>
                  
             </ul>
         </nav>
    );
};

export default Header;