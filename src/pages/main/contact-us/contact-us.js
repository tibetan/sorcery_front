import React from 'react';

import './contact-us.sass';

const ContactUs = () => {
  return (
    <div className='contact-us'>
        <div className='title'>
            Contact Us
        </div>
        <div className='body'>
            <form className='contact-us-body-form'>
                <div className="col-md-12">
                    <label/>
                    <textarea className="form-control" rows={5} placeholder="Your Text*"/>
                </div>
                <div className="col-md-12">
                    <label/>
                    <input type="text" className="form-control" placeholder="Your Name*"/>
                </div>
                <div className="col-md-12">
                    <label/>
                    <input type="email" className="form-control" placeholder="Your Email*"/>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  );
};

export default ContactUs;
