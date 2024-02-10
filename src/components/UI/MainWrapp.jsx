import React from 'react';
import "./index.css";
import ChatsBar from "../bar-figures/ChatsBar";
import ChatMessages from "../chat-messages/ChatMessages";
import ChatHeader from "../chat-header/ChatHeader";

const MainWrapp = (props) => {

  const handleClick = (sign) => {
    props.onClick(sign)
  }

  return (
    <div className="main-wrapp">
      <ChatsBar />
      <div style={{marginLeft: '36px'}}>
        <ChatHeader onClick={handleClick} />
        <ChatMessages />
      </div>
    </div>
  );
};

export default MainWrapp;
