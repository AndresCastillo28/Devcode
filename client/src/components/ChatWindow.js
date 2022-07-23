import { UilMessage } from '@iconscout/react-unicons';
import { useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import './main.css';
import socket from './Socket';

const ChatWindow = ({ name }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.emit('connected', name);
    }, [name]);

    useEffect(() => {
        socket.on('messages', message => {
            setMessages([...messages, message]);
        });
        return () => { socket.off() };
    }, [messages]);

    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    const submit = e => {
        e.preventDefault();
        socket.emit('message', name, message);
        setMessage('');
    }

    return (
        <div>
            <div className='form-control inputs border-0 mb-4 chat'>
                {messages.map((e, i) =>
                    <div key={i}>
                        <div className='chat__title'>{e.name}</div>
                        <div>
                            {e.message}
                        </div>
                    </div>
                )}
                <div ref={divRef}></div>
            </div>
            <form onSubmit={submit}>
                <div className='form-floating mb-4'>
                    <textarea
                        name='text'
                        cols='30'
                        rows='8'
                        className='form-control inputs border-0'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder='Escribe tu mensaje'
                        id='floatingTextarea'
                        required
                    />
                    <label className='label' htmlFor='floatingTextarea'>
                        <FormattedMessage
                            id='chat.message'
                            defaultMessage='Write your message'
                        />
                    </label>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary'>
                        <FormattedMessage
                            id='chat.send'
                            defaultMessage='Send message'
                        />
                        <UilMessage className='ms-1' />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ChatWindow;