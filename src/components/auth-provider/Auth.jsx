import React from 'react';
import Logo from '../../assets/logo.svg'
import './index.css'
import SignIn from './SignIn';

const Auth = () => {

    return (
        <>
            <SignIn />
            <div className='auth-wrapp-form'>
                <h2 className='auth-wrapp-form-head'>
                    Регистрация
                </h2>
            </div>
        </>
    );
}

export default Auth;
