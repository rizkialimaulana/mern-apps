import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.scss';
import { Person, Email, Key } from '@mui/icons-material';

const Register = () => {
  return (
    <div className="container">
        <div className="card">
            <h2 className="title">Sign In</h2>
            <form>
                <div className="input-container">
                    <label For="username"><Person /></label>
                    <input type="text" placeholder='Username' id="username"/>              
                </div>
                <div className="input-container">                  
                    <label For="email"><Email /></label>
                    <input type="email" placeholder='Email' id="email"/>                
                </div>
                <div className="input-container">
                    <label For="password"><Key /></label>
                    <input type="password" placeholder='Password' id="password"/>
                </div>
                <button>Sign In</button>                
            </form>
            <span>Have Account? <Link to='/login'>Click here</Link></span>
        </div>
    </div>
  )
}

export default Register