import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './Myorder.css';

const Myorder = () => {
    const {user} = useAuth();
     
    const [orders,setOrders] = useState([]);
    
    useEffect(()=>{
        const url = ` https://enigmatic-mesa-30035.herokuapp.com/orderd_bike?email=${user.email}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[user.email]);

    // const myOrders = orders.filter(order => order.userEmail === myEmail);
    return (
        <div>
            {   
              orders &&  orders.map(order =>  <li>{order.userEmail}</li>)
            }
        </div>
    );
};

export default Myorder;