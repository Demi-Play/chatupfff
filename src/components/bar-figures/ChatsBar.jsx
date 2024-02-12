import React, { useState, useEffect } from "react";
import LeftBarHeader from "./LeftBarHeader";
import ChatNav from "../chat-nav/ChatNav";
import axios from "axios";

const ChatsBar = () => {
  const [usersData, setUsersData] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/users');
        setUsersData(response.data);
        
      } catch (error) {
        console.error(error);
      }
    };
    console.log(usersData)

    fetchUsers();
  }, []);

  const checkedUser = (id) => {
    console.log(usersData[id].name)
  }

  return (
    <div className="chats-bar-wrapp">
      <LeftBarHeader />
      <div className="chats-bar-wrapp-scroll">
        {usersData ? (
          usersData.map((user) => (
            <ChatNav key={user.id} id={user.id} name={user.name} onClick={checkedUser} />
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </div>
  );
};

export default ChatsBar;
