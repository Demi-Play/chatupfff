import React from 'react';
import './index.css'
import menuIcon from '../../assets/menu.svg'
import searchIcon from '../../assets/search.svg'

const LeftBarHeader = () => {
    return (
        <div className="left-bar-header-wrapp">
            <button className='left-bar-header-wrapp-menu'><img src={menuIcon} /></button>
            <input type="text" className='left-bar-header-wrapp-search' placeholder='search...' />
            <button className='left-bar-header-wrapp-search-img'><img className='left-bar-header-wrapp-search-img-icon' src={searchIcon} /></button>
        </div>
    );
}

export default LeftBarHeader;
