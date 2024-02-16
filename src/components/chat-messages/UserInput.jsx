import React, { useState } from 'react';
import sendIcon from '../../assets/send.svg'
import Cookies from 'js-cookie';

const UserInput = () => {


    const [userFrom, setUserFrom] = useState(Cookies.get('user_id'));
    const [userTo, setUserTo] = useState(Cookies.get('selected_user'));
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUserTo(Cookies.get('selected_user'))
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
                setText('')
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='reerrs'>
            <textarea value={text} onChange={(e) => setText(e.target.value)} type="text" className='message' name="message" id="message" placeholder='Hey, how are you?' />
            <button onClick={handleSubmit} className='send-message'>
                <img src={sendIcon} alt="" />
            </button>
        </div>
    );
}

export default UserInput;
