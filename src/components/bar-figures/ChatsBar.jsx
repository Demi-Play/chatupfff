import React from 'react';
import LeftBarHeader from './LeftBarHeader';
import ChatNav from '../chat-nav/ChatNav';

const ChatsBar = () => {
    return (
        <div className="chats-bar-wrapp">
            <LeftBarHeader />
            <ChatNav />
            <ChatNav />
            <ChatNav />
            <ChatNav />
            <ChatNav />
            <ChatNav />
            <ChatNav />

        </div>
    );
}

export default ChatsBar;
