import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <div className='card-header'>
    <h2>To Do</h2>
    <ul className="nav nav-tabs card-header-tabs">
      <li className='nav-item'>
        <a className='nav-link active' aria-current='true' href='#'> List</a>
      </li>
      {/* <li className='nav-item'>
        <a className='nav-link' href='#'>Link</a>
      </li> */}
      <li className='nav-item'>
        <a className='nav-link disabled' href='#'>Features</a>
      </li>
    </ul>
  </div>
);

export default Header;
