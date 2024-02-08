import React, { useState } from 'react';
import Auth from './Auth';
import SignIn from './SignIn';
import Reg from './Reg';

const AuthProvider = () => {
    const [auth, setAuth] = useState(false)
    const [sign, setSign] = useState(false)
    const handleClick = (auth) => {
        setAuth(auth)
        console.log(auth)
    }
    // false is not regged, true is not signed, object is good verified
    const [regAuth, setRegAuth] = useState(false)

    const handleSignIn = () => {
        sign ? 
        () => {
        setAuth(null)

        }
        :
        () => {
            setAuth(true)
        }
    }

    return (
        <div>
            <div className='auth-main-wrapp'>
                <SignIn auth={auth} onStateChange={handleClick} />
                {auth ? (<Auth />) : (<Reg />)} 
            </div>
        </div>
    );
}

export default AuthProvider;
