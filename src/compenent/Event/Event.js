import React from 'react';

const Event = ({event}) => {
    // console.log(event)
    const deleteEvent = id => {

    }

    return (
        <div className ="col-md-3">
            <img style={{height: '260px', width: '260px'}} src= {event.imageURL} alt=""/>
            <h3>{event.name} <button onClick={() => deleteEvent(event._id)}>Delete</button></h3>
        </div>
    );
};

export default Event;