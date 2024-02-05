import React from 'react';
import './index.css'

const Message = (props) => {
    return (
        <div>
            <div className="message-text">{props.text}</div>
        </div>
    );
}

export default Message;
