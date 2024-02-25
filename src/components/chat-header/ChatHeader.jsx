import React from 'react';
import './index.css'
import documentImage from '../../assets/document-img.svg'
import callIcon from '../../assets/call.svg'
import backArrow from '../../assets/back-arrow.svg'

const ChatHeader = (props) => {
    const sign = false

    const handleOut = () => {
        props.onClick(sign)
    }

    return (
        <div className='chat-header-main'>
            <div className="chat-header-main-wrapp">
                <div className='chat-header-main-wrapp-img'><img className='chat-header-main-wrapp-img-document' src={documentImage} alt="" /></div>
                <div>
                    <div className='chat-header-main-wrapp-name'>NickName</div>
                    <div className='chat-header-main-wrapp-status'>online</div>
                </div>

            </div>
            <button title='' className='chat-header-main-wrapp-call'><img className='chat-header-call-icon' src={callIcon} alt="" /></button>
            <button title='' onClick={handleOut} className='chat-header-main-wrapp-back'><img className='chat-header-call-icon' src={backArrow} alt="" /></button>
        </div>
    );
}

export default ChatHeader;
