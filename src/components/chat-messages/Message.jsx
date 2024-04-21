import React, { useEffect, useState } from "react";
import "./index.css";
import Msg from "./Msg";
import UserInput from "./UserInput";

const Message = (props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://127.0.0.1:5003/messages')
        .then(response => response.json())
        .then(data => setMessages(data))
        .catch(error => console.error(error));
    }, 500); // Обновление каждые 5 секунд

    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, []);


  return (
    <>
      <div className="message-chat-scroll">
        {Array.isArray(messages) && messages.map(message => (
          <Msg key={message.id}
            id={message.id}
            text={message.text}
            from={message.user_from}
            to={message.user_to}
            time={message.timestamp}
          />
        ))}
      </div>
      <UserInput />
    </>
  );
};

export default Message;
