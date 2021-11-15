import Alert from '@mui/material/Alert';
import  Button  from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success,setSuccess] = useState(false);

    const handleAdminInput= e =>{
        setEmail(e.target.value);
        e.preventDefault();
    }
    const handleMakeAdmin= e =>{
        const admin ={email};

        fetch('https://enigmatic-mesa-30035.herokuapp.com/users/admin',{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(admin)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
                // setEmail('');
            };
            
        });

        e.preventDefault();
    }
    return (
        <div>
            <Typography variant="h5" sx={{m: 4, color: '#0277bd',borderBottom: 2}} gutterBottom>
                Make Admin
            </Typography>
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    sx={{width: '50%',m: 2}}
                    label="enter email"
                    type="email"
                    onBlur={handleAdminInput}
                    name="email"
                    variant="standard"
                />
                <br />
                <Button type="submit" variant="contained" sx={{m: 2}}>Make Admin</Button>
            </form>
            <br />
            {success && <Alert severity="success">made admin successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;