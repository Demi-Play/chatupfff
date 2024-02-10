import React, { useState } from 'react';
import './index.css'
import menuIcon from '../../assets/menu.svg'
import searchIcon from '../../assets/search.svg'
import Preference from '../preference/Preference'

const LeftBarHeader = () => {
    const [menuActive, setMenuActive] = useState(false)

    const hanndleMenu = () => {
        setMenuActive(!menuActive)
    }
    return (
        <div className="left-bar-header-wrapp">
            <button onClick={hanndleMenu} className='left-bar-header-wrapp-menu'><img src={menuIcon} /></button>            
            <input type="text" className='left-bar-header-wrapp-search' placeholder='search...' />
            <button className='left-bar-header-wrapp-search-img'><img className='left-bar-header-wrapp-search-img-icon' src={searchIcon} /></button>
            {menuActive ? <Preference /> : null}
        </div>
    );
}

export default LeftBarHeader;
