import React, { useState } from 'react';
import Box from '@mui/material/Box';
import  Button  from '@mui/material/Button';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import  TextField  from '@mui/material/TextField';
import './Login.css';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

     const handleEmailInput = e =>{
         setEmail(e.target.value);
         e.preventDefault();
         
     }
     const handlPasswordInput = e =>{
         setPassword(e.target.value);
         e.preventDefault()
         
     }

    const handleLoginInput = (e) =>{
         
        console.log(email,password);
        
        
        
        e.preventDefault();
        e.target.value = '';
    }
    return (
        <>
            <Header></Header>
             <Box sx={{my: 8}}>
                <form onSubmit={handleLoginInput}>
                    <TextField
                        sx={{width: '50%', m: 1}}
                        id="standard-basic"
                        name="email"
                        onBlur = {handleEmailInput}
                        type="email"
                        label="enter your email"
                        variant="standard"
                    />
                    <TextField
                        sx={{width: '50%', m: 1}}
                        id="standard-basic"
                        name="password"
                        onBlur = {handlPasswordInput}
                        type="password"
                        label="enter your password"
                        variant="standard"
                    />
                    <br />
                    <Button type="submit" sx={{width: '30%',m: 3}} variant="contained">Login</Button>
                </form>
             </Box>
            <Footer></Footer>
        </>
    );
};

export default Login;