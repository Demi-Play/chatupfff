import React from 'react';
import './index.css'

const Preference = () => {
    return (
        <div className='preference-wrapp'>
            <div className='preference-wrapp-head'></div>
            <button className='preference-wrapp-button'>Change theme</button>
            <button className='preference-wrapp-button'>Quit</button>
        </div>
    );
}

export default Preference;
