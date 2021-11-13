import React, { useState } from 'react';
import Box from '@mui/material/Box';
import  Button  from '@mui/material/Button';
import  Typography  from '@mui/material/Typography';
import  CircularProgress  from '@mui/material/CircularProgress';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import  TextField  from '@mui/material/TextField';
import  Alert  from '@mui/material/Alert';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const {user,error,isLoading,loginUser,googleSignIn} =  useAuth();
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
        loginUser(email,password);
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
                <br />

                <p>------------------------</p>
                <Button onClick={googleSignIn} variant="contained">Googgle</Button>
             </Box>

             {/* display a circular progress while registeration */}
             {
                    isLoading && <CircularProgress/>
              }

                {/* display a successfully registerd text  */}
                {
                    user?.email && <Alert severity="success">user added successfully</Alert>
                }

                {/* display error messege  */}
                {
                    error && <Alert severity="error">{error}</Alert>
                }
                <Link to="/login" style={{textDecoration: 'none'}}>
                        <Typography variant="h6" gutterBottom>
                            If you are a new user ? go to Register page
                        </Typography>
                </Link>
            <Footer></Footer>
        </>
    );
};

export default Login;