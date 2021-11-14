import Typography from '@mui/material/Typography';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
             `<Typography variant="body1" sx={{color: '#ffffff'}} gutterBottom>
                    Contact: +918945993088, +917363800857
                </Typography>
                <Typography variant="body1" sx={{color: '#ffffff'}}     gutterBottom>
                    Email : super.bike.2021@gmail.com
                </Typography>
                 <span>
                    <i className="fab fa-facebook-square social-icon"></i>
                    <i className="fab fa-twitter-square social-icon"></i>
                    <i className="fab fa-instagram-square social-icon"></i>
                    <i className="fab fa-youtube-square social-icon"></i>
                    <i className="fab fa-linkedin social-icon"></i>
                </span>
                <Typography variant="body1" sx={{color: '#ffffff'}} gutterBottom>
                    Super Bike &copy; 2021
                </Typography>
        </div>
    );
};

export default Footer;