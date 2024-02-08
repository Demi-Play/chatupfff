import React from 'react'; 
import sendIcon from '../../assets/send.svg'

const UserInput = () => {
    return (
        <>
            <textarea type="text" name="message" id="message" placeholder='Hey, how are you?' />
            <button className='send-message'><img src={sendIcon} alt="" /></button>
        </>
    );
}

export default UserInput;
