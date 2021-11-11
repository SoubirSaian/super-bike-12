import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './Register.css';
import  TextField  from '@mui/material/TextField';
import  Button  from '@mui/material/Button';

const Register = () => {
    const [registerInfo,setRegisterInfo] = useState({});
    
    const handleInputField = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...registerInfo};
        newInfo[field] = value;
        setRegisterInfo(newInfo); 
        console.log(registerInfo);
        e.preventDefault();
        // e.target.value = '';
    }
    const handleEmailPasswordRegister = (e) =>{
         console.log(registerInfo.email,registerInfo.password,registerInfo.password2);
         
         e.preventDefault();
         e.target.value = '';
    }
    return (
        <>
            <Header></Header>
             <Box sx={{my: 8}}> 
                <form onSubmit={handleEmailPasswordRegister}>
                    <TextField
                        sx={{width: '50%', m: 1}}
                        id="standard-basic"
                        name="email"
                        onBlur={handleInputField}
                        type="email"
                        label="enter your email"
                        variant="standard"
                    />
                    <TextField
                        sx={{width: '50%', m: 1}}
                        id="standard-basic"
                        name="password"
                        onBlur={handleInputField}
                        type="password"
                        label="enter your password"
                        variant="standard"
                    />
                    <TextField
                        sx={{width: '50%', m: 1}}
                        id="standard-basic"
                        name="password2"
                        onBlur={handleInputField}
                        type="password"
                        label="Re enter password"
                        variant="standard"
                    />
                    <br />
                    <Button type="submit" sx={{width: '30%',m: 3}} variant="contained">Register</Button>
                </form>
             </Box>
            <Footer></Footer>
        </>
    );
};

export default Register;