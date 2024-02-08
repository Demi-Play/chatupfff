import React from 'react';
import Logo from '../../assets/logo.svg'
import './index.css'

const Reg = () => {
    let sign = false
    return (
        <div className='auth-wrapp-form'>
            <h2 className='auth-wrapp-form-head'>
                Авторизация
            </h2>
            <input className='auth-inp' type="text" name="name" id="name" />
            {/* <input className='auth-inp' type="email" name="email" id="email" /> */}
            <input className='auth-inp' type="password" name="password" id="password" />
            <button className='auth-btn' >Войти</button>
        </div>
    );
}

export default Reg;
