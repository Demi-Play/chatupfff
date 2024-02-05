import React from 'react';
import './index.css'
import ChatsBar from '../bar-figures/ChatsBar';
import ChatMessages from '../../assets/chat-messages/ChatMessages';

const MainWrapp = () => {
    return (
        <div className="main-wrapp">
            <ChatsBar />
            <ChatMessages />
        </div>
    );
}

export default MainWrapp;
