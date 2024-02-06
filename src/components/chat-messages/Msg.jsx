/* eslint-disable react/prop-types */
import React from 'react'; 
import './index.css'


const Msg = (props) => {
    return (
        <div className='msg-wrapp'>
        <div className={'message-text ' + props.className}>{props.text} <br />
        <p >{props.time}</p></div>
        </div>
    );
}

export default Msg;
