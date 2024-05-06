import React from 'react';

import './header.sass';

const Header = () => {
  return (
      <div className='header'>
          <div className='header_container'>
              <div className='left-content'>
                  <h1>Logo</h1>
              </div>
              <div className='middle-content'>
                  <ul>
                      <li id='1'>
                          Menu-1
                      </li>
                      <li id='2'>
                          Menu-2
                      </li>
                      <li id='3'>
                          Menu-3
                      </li>
                      <li id='4'>
                          Menu-4
                      </li>
                      <li id='5'>
                          Menu-5
                      </li>
                  </ul>
              </div>
              <div className='right-content'>
                  <ul>
                      <li id='1'>
                          Login
                      </li>
                      <li id='2'>
                          Cart
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  );
};

export default Header;
