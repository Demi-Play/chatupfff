import React from 'react';
import './index.css'

const Preference = () => {
    return (
        <div className='preference-wrapp'>
            <div className='preference-wrapp-head'>Preference</div>
            <div className='preference-set-wrapp'>
                <button className='preference-wrapp-button'>Change theme</button>
                <button className='preference-wrapp-button'>Quit</button>
            </div>
        </div>
    );
}

export default Preference;
