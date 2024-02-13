import React, { useState } from 'react';
import './index.css'
import Cookies from 'js-cookie';

const Preference = () => {

    const [blackTheme, setBlackTheme] = useState(true)

    const handleChangeTheme = () => {
        setBlackTheme(!blackTheme)
        Cookies.remove('theme')
        Cookies.set('theme', blackTheme)
    }

    return (
        <div className={'preference-wrapp'}>
            <div className='preference-wrapp-head'>Preference</div>
            <div className='preference-set-wrapp'>
                <button onClick={handleChangeTheme} className='preference-wrapp-button'>Change theme to {blackTheme ? 'dark' : 'light'}</button>
                <button className='preference-wrapp-button'>Quit</button>
            </div>
        </div>
    );
}

export default Preference;
