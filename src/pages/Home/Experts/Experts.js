import React from 'react';

import machine1 from '../../../images/mechanic/mechanic-1.jpg';
import machine2 from '../../../images/mechanic/mechanic-2.jpg';
import machine3 from '../../../images/mechanic/mechanic-3.jpg';
import machine4 from '../../../images/mechanic/mechanic-4.jpg';
import Expert from '../Expert/Expert';

const experts = [
    { name: 'Andrew Agarwal', img: machine1, expert: '-Enginee Expert-' },
    { name: 'John Anderson', img: machine2, expert: '-Polish Expert-' },
    { name: 'Zakaria Smith', img: machine3, expert: '-Coloring Expert-' },
    { name: 'Shakib Watson', img: machine4, expert: '-Allrounder Expert-' },

]
const Experts = () => {
    return (
        <div id="experts" className="container">
            <h3 className="text-primary">Our Experts</h3>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;