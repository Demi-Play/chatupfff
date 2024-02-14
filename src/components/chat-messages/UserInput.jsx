import React, { useState } from 'react';
import sendIcon from '../../assets/send.svg'

const UserInput = () => {


    const [userFrom, setUserFrom] = useState(1);
    const [userTo, setUserTo] = useState(2);
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const message = {
            user_from: userFrom,
            user_to: userTo,
            text: text,
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/sendmsg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            });

            if (response.ok) {
                console.log('Message sent successfully');
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='reerrs'>
            <textarea onChange={(e) => setText(e.target.value)} type="text" className='message' name="message" id="message" placeholder='Hey, how are you?' />
            <button onClick={handleSubmit} className='send-message'>
                <img src={sendIcon} alt="" />
            </button>
        </div>
    );
}

export default UserInput;
