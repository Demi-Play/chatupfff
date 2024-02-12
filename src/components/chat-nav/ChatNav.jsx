
import React from 'react'; 
import './index.css'
import documentImg from '../../assets/document-img.svg'

const ChatNav = (props) => {
    const selectUser = () => {
        props.onClick(props.id)
    }
    return (
        <button onClick={selectUser} className="chat-nav-main-wrapp">
            <div className='chat-nav-main-wrapp-img'><img src={documentImg} alt="" /></div>
            <div>
                <div className='chat-nav-main-wrapp-name'>{props.name}</div>
                <div className='chat-nav-main-wrapp-status'>online</div>
            </div>
        </button>
    );
}

export default ChatNav;
