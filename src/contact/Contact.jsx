import React, { useState } from 'react';
import Validator from 'validator';
import './style.css';

const Contact = () => {
    const [emailTitle, setEmailTitle] = useState('');

    const names = (id) => {
        let val = Validator.ltrim(document.getElementById(id).value);
        if (Validator.isAlpha(val) && Validator.isLength(val, 2, 25)) {
            document.getElementById(id).style.borderBottom = '2px solid #fff';
        } else {
            document.getElementById(id).style.borderBottom = '2px solid red';
        }
        document.getElementById(id).value = val;
    }

    const emailValidate = (id) => {
        let val = document.getElementById(id).value;
        if (Validator.isEmail(val) && Validator.isLength(val, 3, 125)) {
            document.getElementById(id).style.borderBottom = '2px solid #fff';
            setEmailTitle('Please enter a valid email address');
            setEmailTitle('Please enter a valid email address');
        } else {
            document.getElementById(id).style.borderBottom = '2px solid red';
        }
    }

    const subjectValidate = (id) => {
        let val = Validator.ltrim(document.getElementById(id).value);
        if (Validator.isAlphanumeric(val, 'en-US', { ignore: ' -_*' })) {
            document.getElementById(id).style.borderBottom = '2px solid #fff';
            // console.log('apple');
        } else {
            document.getElementById(id).style.borderBottom = '2px solid red';
        }
        document.getElementById(id).value = val;
    }

    const msgValidate = (id) => {
        let val = Validator.ltrim(document.getElementById(id).value);
        if (Validator.isAlphanumeric(val, 'en-US', { ignore: ' -_*' })) {
            document.getElementById(id).style.borderBottom = '2px solid #fff';
            // console.log('apple');
        } else {
            document.getElementById(id).style.borderBottom = '2px solid red';
        }
        document.getElementById(id).value = val;
    }

    return (
        <div className="section7 py-5" id='contact'>
            <div className="container text-white">
                <div className="row justify-content-center text-uppercase mb-3">
                    <h1>Contact</h1>
                </div>
                <form className="row text-white">
                    <div className="col-md-6 parts">
                        <label htmlFor="first">First Name *</label>
                        <input
                            type="text"
                            id='first'
                            required
                            onInput={(e) => names(e.target.id)} />
                    </div>
                    <div className="col-md-6 parts">
                        <label htmlFor="last">Last Name *</label>
                        <input
                            type="text"
                            id='last'
                            required
                            onInput={(e) => names(e.target.id)} />
                    </div>
                    <div className="col-md-6 parts">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id='email'
                            title={emailTitle}
                            onInput={(e) => emailValidate(e.target.id)} />
                    </div>
                    <div className="col-md-6 parts">
                        <label htmlFor="subject">Subject *</label>
                        <input
                            type="text"
                            id='subject'
                            required
                            onInput={(e) => subjectValidate(e.target.id)} />
                    </div>
                    <div className="col-md-10 parts">
                        <label htmlFor="msg">Message *</label>
                        <textarea
                            name=""
                            id="msg"
                            cols="30"
                            rows="5"
                            required
                            onInput={(e) => msgValidate(e.target.id)}></textarea>
                    </div>
                    <div className="col-md-2 parts d-flex justify-content-md-start justify-content-center align-items-end px-0">
                        <a href="#" className='bt'>Submit</a>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Contact;
