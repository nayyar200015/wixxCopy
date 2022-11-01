import React from 'react';
import './style.css';

const Servicebox = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 parts text-center mb-2">
                <h1 className='text-uppercase'>{props.heading}</h1>
                <p>{props.paragraph}</p>
                <a href={props.moreinfo}>More Info</a>
            </div>
        </>
    )
}

export default Servicebox;
