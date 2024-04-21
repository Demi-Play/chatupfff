import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import './index.css';
import SignIn from './SignIn';
import axios from 'axios';
import Cookies from 'js-cookie';

const Auth = (props) => {
    const sign = false;
    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:5003/auth', {
                name: name,
                password: password,
            }, {
                withCredentials: true, // Allow sending cookies
                credentials: 'include', // Include credentials in the request
            });

            const handleSignIn = (signedIn) => {
                props.onClick(signedIn);
                Cookies.set('is_auth', signedIn);
                Cookies.set('user_id', response.data.id);
                console.log(response.data.id);
            };

            if (response.status === 200 && response.data.id) {
                handleSignIn(!sign);
                console.log(response.data);
            } else {
                handleSignIn(sign);
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred. Please try again.');
            props.onClick(sign);
        }
    };

    return (
        <div className='auth-wrapp-form'>
            <h2 className='auth-wrapp-form-head'>Авторизация</h2>
            <input
                onChange={(e) => setName(e.target.value)}
                className='auth-inp'
                type="text"
                name="name"
                id="name"
                placeholder='Name'
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                className='auth-inp'
                type="password"
                name="password"
                id="password"
                placeholder='Password'
            />
            <button onClick={handleSubmit} className='auth-btn'>Войти</button>
            {error && <p className="error-msg">{error}</p>}
        </div>
    );
};

export default Auth;
