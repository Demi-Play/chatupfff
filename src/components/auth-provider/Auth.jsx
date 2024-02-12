import React, { useState } from 'react';
import Logo from '../../assets/logo.svg'
import './index.css'
import SignIn from './SignIn';
import axios from 'axios';

const Auth = (props) => {
    const sign = false
    // const [formData, setFormData] = useState({});
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // 'http://127.0.0.1:5000/reg'

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:5000/auth', {
                name: name,
                password: password,
            });
            const handleSignIn = (sign) => {
                props.onClick(sign)
                // fetch('http://127.0.0.1:5000/reg')
                
                console.log(response.data)
            }
            if (response.status == 200) {
            handleSignIn(!sign)
            console.log(response.data);
            } else {
            handleSignIn(sign)
                
            }

            
            // Обработка ответа от сервера
            
        } catch (error) {
            console.error(error);
            props.onClick(sign)
            // Обработка ошибки
        }
    }

    return (
        <div className='auth-wrapp-form'>
            <h2 className='auth-wrapp-form-head'>
                Авторизация
            </h2>
            <input onChange={(e) => {setName(e.target.value)}} className='auth-inp' type="text" name="name" id="name" placeholder='name' />
            {/* <input className='auth-inp' type="email" name="email" id="email" /> */}
            <input onChange={(e) => {setPassword(e.target.value)}} className='auth-inp' type="password" name="password" id="password" placeholder='password' />
            <button onClick={handleSubmit} className='auth-btn' >Войти</button>
        </div>

    );
}

export default Auth;
