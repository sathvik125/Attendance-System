import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () =>  {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <>
      <nav className='navbar'>
        <Link to='/home' className='navbar-logo' >
          Sanjaya
       
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' >
              Home
            </Link>
          </li>
         
          <li className='nav-item'>
            <Link
              to='/dashboard'
              className='nav-links'
           
            >
              Dashboard
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/attendance'
              className='nav-links'
            >
              Attendance
            </Link>
          </li>
          <li className='nav-item' id='user' >
            <Link
              to='/user'
              className='nav-links'
            >
              <i id='arrowicon' className='fa-solid fa-user fa-2xl fa-inverse' />
            </Link>
        
          </li>
        </ul>
       
      </nav>
    </>
  );
}

