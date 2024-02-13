import React, { useState } from 'react';
import Logo from '../../assets/logo.svg'
import './index.css'

const SignIn = (props) => {
    const handleClick = () => {
        props.onStateChange(!props.auth);
    };

    return (
        <div className='auth-header'>
            <img className='auth-header-logo' src={Logo} alt="" />
            <button onClick={handleClick} className='auth-header-sign-change'>{props.auth ? 'Sign up' : 'Sign in'}</button>
        </div>
    );
}

export default SignIn;
