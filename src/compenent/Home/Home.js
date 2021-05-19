import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    const [events, setEvents] = useState([])

    useEffect(()=>{
        fetch('https://infinite-bastion-25636.herokuapp.com/events')
        .then(res => res.json())
        .then(data => {
            setEvents(data)
            console.log(data)
        })
    }, [])

    return (
        <div className="row container">
            {
                events.map(event => <Event event={event}></Event>)
            }
        </div>
    );
};

export default Home;