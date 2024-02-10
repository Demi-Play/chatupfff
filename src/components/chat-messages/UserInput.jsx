import React from 'react'; 
import sendIcon from '../../assets/send.svg'

const UserInput = () => {
    return (
        <div className='reerrs'>
            <textarea type="text" className='message' name="message" id="message" placeholder='Hey, how are you?' />
            <button className='send-message'>
            <img src={sendIcon} alt="" />
            </button>
        </div>
    );
}

export default UserInput;
