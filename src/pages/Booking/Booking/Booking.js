import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';


const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <h2>Details of :- <span className='text-warning' key={service._id}>{service.name} Price : {service.price}</span></h2>
            <h4>This is booking: {serviceId}</h4>
            <img src={service.img} alt="" srcset="" />
        </div>
    );
};

export default Booking;