import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, name, description, img, price } = props.service;
    return (
        <div className="service">
            <img className="img-fluid" src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price : {price}</h5>
            <p className="px-4 text-center">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button type="button" class="btn btn-warning">Book: {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;