import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import ChatWindow from './ChatWindow';
import Navbar from './layout/Navbar';
import './main.css';

const Chat = () => {
    const [name, setName] = useState('');
    const [registered, setRegistered] = useState(false);

    const register = e => {
        e.preventDefault();
        if (name !== '') {
            setRegistered(true);
        }
    }

    return (
        <>
            <Navbar />
            <section className='container'>
                <h1 className='chat__title text-center mt-5 pt-5'>Chat DevCode</h1>
                {
                    !registered &&
                    <form onSubmit={register} className='my-5 py-5'>
                        <div className='form-floating mb-4'>
                            <input
                                type='text'
                                name='name'
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder='Nombre'
                                className='form-control inputs-forms'
                                id='floatingName'
                                required
                            />
                            <label className='label' htmlFor='floatingName'>
                                <FormattedMessage
                                    id='chat.name'
                                    defaultMessage='Write your name'
                                />
                            </label>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-primary'>
                                <FormattedMessage
                                    id='chat.button'
                                    defaultMessage='Go to chat'
                                />
                            </button>
                        </div>
                    </form>
                }
                {
                    registered &&
                    <ChatWindow name={name} />
                }
            </section>
        </>
    )
}

export default Chat;