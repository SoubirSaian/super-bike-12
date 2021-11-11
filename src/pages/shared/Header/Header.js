import  Button  from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const {user} = useAuth();

    // const email =user.email;
    // const emailName = email?.subString(0,email?.lastIndexOf('@'));

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
                 <span>{user.email}</span>
                 {
                     user?.email ? <Button variant="contained">Log Out</Button> : <li><Link to="/login">Log In</Link></li>
                 }
             </ul>
         </div>
    );
};

export default Header;