import React, { useState, useEffect } from 'react';
import './index.css'

const Msg = (props) => {
    const [className, setClassName] = useState('user_from')

    useEffect(() => {
        if (props.to === 1 && props.from === 2) {
            setClassName('user-from')
        } else {
            setClassName('user-to')
        }
    }, [props.to, props.from])

    const handleUpdate = () => {
        // Обработчик обновления
    }

    const handleDelete = () => {
        // Обработчик удаления
    }

    return (
        <div className='msg-wrapp'>
            <div className={'message-text ' + className}>
                {props.text} <br />
                <p className='message-time'>{props.time}</p>
            </div>
            {/* <button onClick={handleUpdate}>Обновить</button>
            <button onClick={handleDelete}>Удалить</button> */}
        </div>
    );
}


export default Msg;
