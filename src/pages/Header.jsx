import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/header.scss';
import { Link } from 'react-router-dom';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const Header = () => {
  return (
    <>
    <Navbar />
    <div className="header">
        <div className="header-card">
            <img src="" alt="" className="header-img" />
            <div className="header-desc">
                <h1 className="header-title">NEW YEAR SALE</h1>
                <p>New Year is getting close! The discount is coming</p>
                <Link to='/newyear' className='button'>EXPLORE</Link>
            </div>
            <div className="switch">
                <KeyboardArrowLeft style={{ padding: '10px' }}/>
                <KeyboardArrowRight style={{ padding: '10px' }}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header