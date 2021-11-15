import Typography from '@mui/material/Typography';
import axios from 'axios';
import React from 'react';
import {useForm} from 'react-hook-form';
import './AddItem.css';

    //    add Item component 
const AddItem = () => {
    //    using react-hook-form
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        // console.log(data);
        // sending a new place info to database
         axios.post('https://enigmatic-mesa-30035.herokuapp.com/all_bike',data)
         .then(res => {
            // console.log(res);
            if(res.data.insertedId){
                window.alert("A new item added successfully");
            }
        })
        reset();
    };

    return (
        <div className="add-place">
             <Typography variant="h4" sx={{m: 3,color: '#0277bd',borderBottom: 2}}>
                 add a new item to display
             </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="enter item name" />
                 
                <input  {...register("img")} placeholder="enter image url" />

                <textarea {...register("description")} placeholder="enter item description" />

                <input  {...register("price")} placeholder="enter item price" />
                <input type="Submit" />
            </form>
        </div>
    );
};

export default AddItem;