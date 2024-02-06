import React, { useState } from 'react';
import Logo from '../../assets/logo.svg'
import './index.css'

const SignIn = () => {
    const [sign, setSign] = useState(true)
    const handleClick = () => {
        setSign(!sign)
    }
    return (
        <div className='auth-header'>
                <img className='auth-header-logo' src={Logo} alt="" />
                <button onClick={handleClick} className='auth-header-sign-change'>{sign ? 'Sign in' : 'Sign up'}</button>
            </div>
    );
}

export default SignIn;
