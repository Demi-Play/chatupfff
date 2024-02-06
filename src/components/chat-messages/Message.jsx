/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./index.css";
import Msg from "./Msg";
import UserInput from "./UserInput";

const Message = (props) => {
  return (
    <>
      <div className="message-chat-scroll">
        <Msg text={props.text} className="user-to" time='12:30'/>
        <Msg text={props.text + ". " + props.text} className="user-from" time='12:30'/>
        <Msg text={props.text} className="user-to" time='12:30'/>
        <Msg text={props.text} className="user-from" time='12:30'/>
        <Msg text={props.text + ". " + props.text} className="user-to" time='12:30'/>
        <Msg text={props.text} className="user-to" time='12:30'/>
        <Msg text={props.text + ". " + props.text} className="user-from" time='12:30'/>
        <Msg text={props.text} className="user-to" time='12:30'/>
        <Msg text={props.text} className="user-from" time='12:30'/>
        <Msg text={props.text + ". " + props.text} className="user-to" time='12:30'/>
      </div>
      <UserInput />
    </>
  );
};

export default Message;
