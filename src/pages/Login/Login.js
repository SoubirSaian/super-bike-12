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
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {user,error,isLoading,loginUser,googleSignIn} =  useAuth();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    const location = useLocation();

     const handleEmailInput = e =>{
         setEmail(e.target.value);
         e.preventDefault();
         
     }
     const handlPasswordInput = e =>{
         setPassword(e.target.value);
         e.preventDefault()
         
     }

    const handleLoginInput = (e) =>{
         
        // console.log(email,password);
        loginUser(email,password,history,location);
        e.preventDefault();
        e.target.value = '';
    }

    const handleGoogleSignIn =()=>{
        googleSignIn(history,location);
    }

    return (
        <>
            <Header></Header>
            <Typography variant="h4" sx={{mt: 3}}>
                 <span style={{color: '#f44366'}}>Login</span> here
            </Typography>
             <Box sx={{mt: 4,mb: 8}}>
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
                <Button onClick={handleGoogleSignIn} variant="contained">Googgle</Button>
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
                <Link to="/register" style={{textDecoration: 'none',}}>
                        <Typography variant="h6" gutterBottom>
                            If you are a new user ? go to Register page
                        </Typography>
                </Link>
                <div style={{margin: '60px'}}></div>
            <Footer></Footer>
        </>
    );
};

export default Login;