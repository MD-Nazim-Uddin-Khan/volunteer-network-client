import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL
        }
        const url = `https://infinite-bastion-25636.herokuapp.com/addEvent`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then (res => console.log('server site', res))

        // console.log(eventData)
    };

    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '875b6cb04a81f714c5ed860a47be495f');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
            console.log(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });       
    }

    return (
        <div>
            <h1>Add your awesome Event hear</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="New Exciting Event" {...register("name")} /> <br/>

                <input type="file" {...register("exampleRequired")} onChange={handleImageUpload} /> <br/>

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;