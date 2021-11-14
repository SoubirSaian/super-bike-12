import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import './Myorder.css';
import Button from '@mui/material/Button';

const Myorder = () => {
    const {user} = useAuth(); 
    const [orders,setOrders] = useState([]);
    // const [status,setStatus] = useState('');
    
    useEffect(()=>{
        const url = ` https://enigmatic-mesa-30035.herokuapp.com/orderd_bike?email=${user.email}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[user.email]);

     const handleDeleteProduct = (id) =>{
        const proceed = window.confirm('would you like to delete');
        if(proceed){
            const url = `https://enigmatic-mesa-30035.herokuapp.com/orderd_bike/${id}`

            fetch(url,{method : 'DELETE'})
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        window.alert('deleted successfully');
                        const remainorder = orders.filter(order => order._id !== id);
                        setOrders(remainorder);
                    }
                })
        }
     }
     
    return (
        <div>
             
             <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Delete Option</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.product}
                        </TableCell>
                        <TableCell align="right">{row.productPrice}</TableCell>
                        <TableCell align="right">{row.userName}</TableCell>
                        <TableCell align="right">{row.userEmail}</TableCell>
                        <TableCell align="right"><Button onClick={()=> handleDeleteProduct(row._id)} variant="contained" color="error">Delete</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Myorder;