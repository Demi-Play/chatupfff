import React from 'react';
import './index.css'

const ChatNav = () => {
    return (
        <a href='#' className="chat-nav-main-wrapp">
            <div className='chat-nav-main-wrapp-img'></div>
            <div>
                <div className='chat-nav-main-wrapp-name'>NickName</div>
                <div className='chat-nav-main-wrapp-status'>online</div>
            </div>
        </a>
    );
}

export default ChatNav;
