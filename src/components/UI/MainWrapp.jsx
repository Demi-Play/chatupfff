import React, { useState } from 'react';
import "./index.css";
import ChatsBar from "../bar-figures/ChatsBar";
import ChatMessages from "../chat-messages/ChatMessages";
import ChatHeader from "../chat-header/ChatHeader";
import Cookies from 'js-cookie';

const MainWrapp = (props) => {
  const [selected, setSelected] = useState(null)

  const handleClick = (sign) => {
    props.onClick(sign)
  }



  const handleSelect = (user_id) => {
    setSelected(null);
    setTimeout(() => {
      setSelected(user_id);
      // console.log('user_id ', user_id);
    }, 500); // Timeout duration in milliseconds (e.g., 2000ms = 2 seconds)
  }

  return (
    <div className="main-wrapp ">
      <ChatsBar selectedChat={handleSelect} />
      <div style={{ marginLeft: '36px' }}>
        <ChatHeader onClick={handleClick} />
        {selected != null ?
          <ChatMessages />
          :
          null
        }
      </div>
    </div>
  );
};

export default MainWrapp;
