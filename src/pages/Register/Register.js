import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './Register.css';
import  TextField  from '@mui/material/TextField';
import  Typography  from '@mui/material/Typography';
import  Button  from '@mui/material/Button';
import  CircularProgress  from '@mui/material/CircularProgress';
import  Alert  from '@mui/material/Alert';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useHistory} from 'react-router';

const Register = () => {
    const {user,error,isLoading,registerUser} = useAuth();
    const [registerInfo,setRegisterInfo] = useState({});
    const history = useHistory();
    
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
        //  console.log(registerInfo.name,registerInfo.email,registerInfo.password,registerInfo.password2);
         
         if(registerInfo.password !== registerInfo.password2){
             window.alert('enter right password');
         }
         registerUser(registerInfo.name,registerInfo.email,registerInfo.password,history);
         e.preventDefault();
         e.target.value = '';
    }
    console.log(user.email);
    
    return (
        <>
            <Header></Header>
            <Typography variant="h4" sx={{mt: 3}}>
                Complete your <span style={{color: '#f44366'}}>registration</span>
            </Typography>
             <Box sx={{mt: 3,mb: 8}}> 
                <form onSubmit={handleEmailPasswordRegister}>
                    <TextField
                        sx={{width: '50%', m: 1}}
                        
                        name="name"
                        onBlur={handleInputField}
                        type="text"
                        label="enter your name"
                        variant="standard"
                    />
                    <TextField
                        sx={{width: '50%', m: 1}}
                         
                        name="email"
                        onBlur={handleInputField}
                        type="email"
                        label="enter your email"
                        variant="standard"
                    />
                    <TextField
                        sx={{width: '50%', m: 1}}
                         
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
                                Already registered ? go to logIn page
                            </Typography>
                    </Link>
             </Box>
            <Footer></Footer>
        </>
    );
};

export default Register;