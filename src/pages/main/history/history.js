import React from 'react';

import './history.sass';

import image1 from '../../../images/inner-icon-1.png';
import image2 from '../../../images/inner-icon-2.png';
import image3 from '../../../images/inner-icon-3.png';
import image4 from '../../../images/inner-icon-4.png';

const History = () => {
  return (
    <div className='history'>
        <div className='title'>
            History and philosophy. From Idea to Product
        </div>
        <div className='items row gx-5 gy-5'>
            <div className='item col-md-3'>
                <img src={image1} alt='image1'/>
                <div className='title'>Planning</div>
                <div className='description'>
                    Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do empor
                </div>
            </div>
            <div className='item col-md-3'>
                <img src={image2} alt='image2'/>
                <div className='title'>Execution</div>
                <div className='description'>
                    Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do empor
                </div>
            </div>
            <div className='item col-md-3'>
                <img src={image3} alt='image3'/>
                <div className='title'>Management</div>
                <div className='description'>
                    Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do empor
                </div>
            </div>
            <div className='item col-md-3'>
                <img src={image4} alt='image4'/>
                <div className='title'>Product</div>
                <div className='description'>
                    Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do empor
                </div>
            </div>
        </div>
    </div>
  );
};

export default History;
