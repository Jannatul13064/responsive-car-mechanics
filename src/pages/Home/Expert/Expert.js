import React from 'react';

const Expert = (props) => {
    const { name, img, expert } = props.expert;
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <img src={img} alt="" />
            <h4>Name : {name}</h4>
            <p className="text-danger"><span>Expertize: {expert}</span></p>
        </div>
    );
};

export default Expert;