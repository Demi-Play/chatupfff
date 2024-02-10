import React, { useState } from 'react';
import Auth from './Auth';
import SignIn from './SignIn';
import Reg from './Reg';
import MainWrapp from '../UI/MainWrapp';

const AuthProvider = () => {
    const [auth, setAuth] = useState(false)
    const [sign, setSign] = useState(false)
    const handleClick = (auth) => {
        setAuth(auth)
    }
    // false is not regged, true is not signed, object is good verified
    const [regAuth, setRegAuth] = useState(false)

    const handleSignIn = (sign) => {
        setSign(sign)
        console.log(sign);
    }

    return (
        <>
            {sign ?
                <MainWrapp onClick={handleSignIn} value={sign} />
                :
                <div className='auth-main-wrapp'>
                    <SignIn auth={auth} onStateChange={handleClick} />
                    {auth ? (<Auth onClick={handleSignIn} value={sign} />) : (<Reg onClick={handleSignIn} value={sign} />)}
                </div>
            }

        </>
    );
}

export default AuthProvider;
