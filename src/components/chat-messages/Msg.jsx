/* eslint-disable react/prop-types */
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
