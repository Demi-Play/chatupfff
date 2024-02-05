import React from 'react';
import './index.css'

const ChatHeader = () => {
    return (
        <div className='chat-header-main'>
            <div className="chat-header-main-wrapp">
                <div className='chat-header-main-wrapp-img'></div>
                <div>
                    <div className='chat-header-main-wrapp-name'>NickName</div>
                    <div className='chat-header-main-wrapp-status'>online</div>
                </div>

            </div>
            <div className='chat-header-main-wrapp-call'></div>
            <div className='chat-header-main-wrapp-back'></div>
        </div>
    );
}

export default ChatHeader;
