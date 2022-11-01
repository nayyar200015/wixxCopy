import React from 'react';
import './style.css';

const About = () => {
    return (
        <div className='section4 d-flex align-items-center' id='about'>
            <div className="container abc">
                <div className="row d-flex">
                    <div className="col-12 parts text-center mb-4">
                        <h1>About us</h1>
                    </div>
                    <div className="col-12 parts text-center d-flex align-items-center mb-4">
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text”
                            or
                            double click me to add your own content and make changes to the font. Feel free to drag and drop
                            me
                            anywhere you like on your page. I’m a great place for you to tell a story and let your users
                            know a
                            little more about you.
                            <br /><br />
                            This is a great space to write a long text about your company and your services. You can use
                            this
                            space to go into a little more detail about your company. Talk about your team and what services
                            you
                            provide. Tell your visitors the story of how you came up with the idea for your business and
                            what
                            makes you different from your competitors. Make your company stand out and show your visitors
                            who
                            you are.
                        </p>
                    </div>
                    <div className="col-12 parts d-flex justify-content-center align-items-center">
                        <a href="/About/about.html">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
