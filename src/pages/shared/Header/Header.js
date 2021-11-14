import  Button  from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const {user,logOut} = useAuth();

    const email =user?.email;
    const emailName = email?.substring(0,email?.lastIndexOf('@'));

    return (
         <div className="nav-bar">
             <div className="nav-logo">
                <h2><i>Super Bike</i></h2>
             </div>
             <ul>
                 <li><Link to="/home">Home</Link></li>
                 <li><Link to="/allproducts">All Product</Link></li>
                 {user?.email && <li><Link to="/dashboard">Dashboard</Link></li>}
                 <li><Link to="/register">Register</Link></li>
                 <span className="email-name">{emailName}</span>
                 {
                     user?.email ? <Button onClick={logOut} variant="contained" sx={{backgroundColor: '#ff9966'}}>Log Out</Button> : <li><Link to="/login">Log In</Link></li>
                 }
             </ul>
         </div>
    );
};

export default Header;