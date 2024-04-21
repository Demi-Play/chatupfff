import React, { useState } from 'react';
import Logo from '../../assets/logo.svg'
import './index.css'
import axios from 'axios';

const Reg = (props) => {
    const sign = true


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:5003/reg', {
                name,
                email,
                password,
            });

            console.log(response.data);
            // Дополнительная обработка ответа сервера
            const handleSignIn = () => {
                props.onClick(sign)
                    // fetch('http://127.0.0.1:5000/reg')
                    .then((data) => {

                    })
            }
            handleSignIn()
        } catch (error) {
            console.error(error);
            // Обработка ошибок
        }
    };
    const handleChange = () => {

    }



    return (
        <div className='auth-wrapp-form'>
            <h2 className='auth-wrapp-form-head'>
                Регистрация
            </h2>
            <input onChange={(e) => setName(e.target.value)} className='auth-inp' type="text" name="name" id="name" />
            <input onChange={(e) => setEmail(e.target.value)} className='auth-inp' type="email" name="email" id="email" />
            <input onChange={(e) => setPassword(e.target.value)} className='auth-inp' type="password" name="password" id="password" />
            <button onClick={handleSubmit} className='auth-btn' >Зарегистрироваться</button>
        </div>
    );
}

export default Reg;
