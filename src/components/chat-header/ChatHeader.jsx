import './index.css'
import documentImage from '../../assets/document-img.svg'
import callIcon from '../../assets/call.svg'
import backArrow from '../../assets/back-arrow.svg'

const ChatHeader = () => {
    return (
        <div className='chat-header-main'>
            <div className="chat-header-main-wrapp">
                <div className='chat-header-main-wrapp-img'><img className='chat-header-main-wrapp-img-document' src={documentImage} alt="" /></div>
                <div>
                    <div className='chat-header-main-wrapp-name'>NickName</div>
                    <div className='chat-header-main-wrapp-status'>online</div>
                </div>

            </div>
            <button className='chat-header-main-wrapp-call'><img src={callIcon} alt="" /></button>
            <button className='chat-header-main-wrapp-back'><img src={backArrow} alt="" /></button>
        </div>
    );
}

export default ChatHeader;
