import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png';
import './Notfound.css';

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid' src={notfound} alt="" /><br />
            <Link className="back-button" to='/home'>
                Go back
            </Link>

        </div>
    );
};

export default NotFound;