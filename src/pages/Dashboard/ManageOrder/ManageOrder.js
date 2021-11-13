import React, { useEffect,useState } from 'react';

const ManageOrder = () => {
    const [orders,setOrders]= useState([]);

    useEffect(()=>{
        const url = 'https://enigmatic-mesa-30035.herokuapp.com/orderd_bike/manageorder';

        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[]);

    return (
        <div>
            <h2>manage order</h2>
            {   
              orders &&  orders.map(order =>  <li>{order.userEmail}</li>)
            }
        </div>
    );
};

export default ManageOrder;