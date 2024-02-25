import React, { useState, useEffect } from 'react';
import './index.css'
import Cookies from 'js-cookie';

const Msg = (props) => {
    const [className, setClassName] = useState('user_from')
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(props.text);
    const [showMenu, setShowMenu] = useState(false);
    const [time, setTime] = useState(props.time)

    const convertDate = (dateString) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const date = new Date(dateString);

        const dayOfWeek = days[date.getDay()];
        const hours = date.getHours();
        const minutes = date.getMinutes();

        setTime(`${dayOfWeek}, ${hours}:${minutes}`)
    };

    useEffect(() => {
        if (props.to == Cookies.get('user_id')) {
            setClassName('user-to')
        } else {
            setClassName('user-from')
        }
        convertDate(time)
    }, [props.to, props.from])

    const handleUpdate = () => {
        // Отправьте запрос на сервер для обновления сообщения
        fetch(`http://127.0.0.1:5000/editmsg/${Number(props.id)}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ text })
        })
            .then(response => response.json())
            .then(data => {
                // Обновите состояние сообщения
                setText(data.text);
                setEditing(false);
            })
            .catch(error => {
                console.error('Ошибка при обновлении сообщения:', error);
            });
        setShowMenu(false);
    }

    const handleDelete = () => {
        // Отправьте запрос на сервер для удаления сообщения
        fetch(`http://127.0.0.1:5000/delmsg/${Number(props.id)}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .catch(error => {
                console.error('Ошибка при удалении сообщения:', error);
            });
        setShowMenu(false);
    }

    return (
        <div className={'msg-wrapp ' + className}>
            <div className={'message-text ' + className} onClick={() => setShowMenu(!showMenu)}>
                {editing ? (
                    <input
                        type="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                ) : (
                    <>
                        {text} <br />
                        <p className='message-time'>{time}</p>
                    </>
                )}
            </div>
            {showMenu ? (
                editing ? (
                    <div className='edit-menu'>
                        <button className='message-time' onClick={handleUpdate}>Сохранить</button>
                        <button className='message-time' onClick={() => { setEditing(false); setShowMenu(false); }}>Отмена</button>
                    </div>
                ) : (
                    <div className='edit-menu'>
                        <button className='message-time' onClick={() => setEditing(true)}>Редактировать</button>
                        <button className='message-time' onClick={handleDelete}>Удалить</button>
                    </div>
                )
            ) : (null)}

        </div>
    );
}


export default Msg;
