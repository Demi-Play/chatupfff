import React, { useState } from 'react';

function SendMessage() {
  const [userFrom, setUserFrom] = useState('');
  const [userTo, setUserTo] = useState('');
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
        mode: 'no-cors',
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userFrom}
        onChange={(e) => setUserFrom(e.target.value)}
        placeholder="From"
      />
      <input
        type="text"
        value={userTo}
        onChange={(e) => setUserTo(e.target.value)}
        placeholder="To"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Message"
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default SendMessage;
