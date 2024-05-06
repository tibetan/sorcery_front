import React from 'react';

import './demonstration.sass';

import image1 from '../../../images/demo_1.jpg';

const Demonstration = () => {
  return (
    <div className='demonstration'>
        <div className='title'>
            Demonstration
        </div>
        <div className='items row'>
            <div className='item col-md-6'>
                <div className='img-wrapper'>
                    <img src={image1}/>
                </div>
            </div>
            <div className='item col-md-6'>
                <div className='title'>What I Do</div>
                <div className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipisc d tempor et dolore. Ut enim ad minim veniam, quis nostrud exercitation knd knisi ut commodo consequat. Duis aute iruren voluptate velit.
                </div>
                <div className='title-2'>Monthly Discounts</div>
                <div className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore. Ut enim ad minim veniam, quis nostrud.


                </div>
            </div>
        </div>
    </div>
  );
};

export default Demonstration;
