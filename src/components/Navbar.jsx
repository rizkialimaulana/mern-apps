import React from 'react';
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';
import { Search } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
          WEARING
        </div>
        <div className="input-wrapper">
          <div className="input">
            <Search />
            <input type="text" placeholder='H&M Clothes'/>
          </div>
        </div>
        <ul className="nav-items">
          {['login', 'register'].map((item)=> (
            <li className="nav-item" key={item}>
              <Link to={`/${item}`} className='link'>{item}</Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Navbar