import React, { useState, useEffect } from "react";
import LeftBarHeader from "./LeftBarHeader";
import ChatNav from "../chat-nav/ChatNav";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const ChatsBar = () => {
  const [usersData, setUsersData] = useState(null);

  const dispatch = useDispatch();


  const users = useSelector((state) => state.users);
  const activeUser = useSelector((state) => state.activeUser);

  const handleUserClick = (userId) => {
    dispatch({ type: 'SELECT_ACTIVE_USER', payload: userId });
    console.log(activeUser)
  };
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

  const checkedUser = async (id) => {
    console.log(usersData[id].name)
  }

  return (
    <div className="chats-bar-wrapp">
      <LeftBarHeader />
      <div className="chats-bar-wrapp-scroll">
        {usersData ? (
          usersData.map((user) => (
            (Cookies.get('user_id') != user.id) ?
              <ChatNav key={user.id} id={user.id} name={user.name} onClick={() => handleUserClick(user.id)} />
              :
              null
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </div>
  );
};

export default ChatsBar;
