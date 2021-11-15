import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './PlaceOrder.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal';
import  TextField  from '@mui/material/TextField';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const PlaceOrder = (props) => {
    const {name,img,description,price} = props.product;
    const {user} = useAuth();
    const [number,setNumber] = useState('');
    const [address,setAddress] = useState('');

        // modal handler 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleNumberInput = e =>{
        setNumber(e.target.value);
        e.preventDefault();
    }
    const handleAddressInput = e =>{
        setAddress(e.target.value);
        e.preventDefault();
    }

    const handlePlaceOrder = e =>{
        
        const orderData = {userEmail: user.email,userName: user.displayName,product: name,productPrice: price,number,address};
        // console.log(orderData);

        fetch('http://enigmatic-mesa-30035.herokuapp.com/orderd_bike',{
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(data => {
            
            if(data.insertedId){
                console.log(data);
                window.alert('Order placed successfully');
            }
        })
        
        
        handleClose();
        e.preventDefault();
    }

    return (
        <Container>
            <Typography variant="h3" color="#1976d2" sx={{mt: 6,mb: 3}} gutterBottom>
                Model: {name}
            </Typography>
            <img src={img} style={{width: '70%',height: '70%'}} alt="" />
            <Typography variant="h5" color="#f57c00" gutterBottom>
                Price: {price}
            </Typography>
            
            <Typography variant="text" color="#00796b" gutterBottom>
                {description}
            </Typography>
                <br />
            <Button onClick={handleOpen} variant="contained" sx={{m: 6}}>Enter Details and Place Order</Button>

               {/* modal open  */}
               <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        Enter your details
                        </Typography>

                           {/* modal input field  */}
                         <form onSubmit={handlePlaceOrder}>
                             <TextField
                                disabled
                                sx={{width: '90%',m: 1}}
                                id="outlined-basic"
                                name="email"
                                defaultValue={user.email}
                                label="email"
                                variant="outlined"
                                type="email"
                             />
                             <TextField
                                disabled
                                sx={{width: '90%',m: 1}}
                                id="outlined-basic"
                                name="name"
                                defaultValue={user.displayName}
                                label="Your Name"
                                variant="outlined"
                                type="text"
                             />
                             <TextField
                                sx={{width: '90%',m: 1}}
                                id="outlined-basic"
                                name="number"
                                onBlur={handleNumberInput}
                                label="Contact Number"
                                variant="outlined"
                                type="number"
                             />
                             <TextField
                                sx={{width: '90%',m: 1}}
                                id="outlined-basic"
                                name="address"
                                onBlur={handleAddressInput}
                                label="Your Address"
                                variant="outlined"
                                type="text"
                             />

                            <Button type="submit" sx={{mx: 'auto',my: 4}} variant="contained">Place Order</Button>
                         </form>
                         
                    </Box>
                </Modal>
        </Container>
    );
};

export default PlaceOrder;