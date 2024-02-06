import React from 'react'; 
import sendIcon from '../../assets/send.svg'

const UserInput = () => {
    return (
        <div>
            <textarea type="text" name="message" id="message" />
            <button className='send-message'><img src={sendIcon} alt="" /></button>
        </div>
    );
}

export default UserInput;
