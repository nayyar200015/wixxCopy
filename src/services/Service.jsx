import React from 'react';
import Servicebox from './Servicebox';
import './style.css';
import List from './list';

const Service = () => {
    return (
        <div className='section3 d-flex align-items-center py-5' id='service'>
            <div className="container">
                <div className="row p-0 d-flex align-items-center">
                    {
                        List.map((elem, index) => {
                            return (
                                    <Servicebox
                                        key={index}
                                        heading={elem.heading}
                                        paragraph={elem.paragraph}
                                        moreinfo={elem.moreinfo} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Service;
