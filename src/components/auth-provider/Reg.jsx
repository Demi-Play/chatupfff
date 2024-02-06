import React from 'react';
import Logo from '../../assets/logo.svg'
import './index.css'

const Reg = () => {
    let sign = false
    return (
        <div className='auth-wrapp'>
            <div className='auth-wrapp'>
                <div className='auth-header'>
                    <img className='auth-header-logo' src={Logo} alt="" />
                    <button className='auth-header-sign-change'>{sign ? 'Sign in' : 'Sign up'}</button>
                </div>
                <div className='auth-wrapp-form'>
                    <h2 className='auth-wrapp-form-head'>
                        Авторизация
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Reg;
